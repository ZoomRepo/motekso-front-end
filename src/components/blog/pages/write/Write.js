import React, { Component } from "react";
import { canUseEventListeners } from "react-twitter-embed";
import tempPostImage from "../../../../assets/images/who-are-we.jpg";
import parseJwt from "../../../../utils/parseJwt";
import {
  getPost,
  upsertPost,
} from "../../../../services/blogController/postController/postController";
import {
  uploadFile,
  getFile,
} from "../../../../services/blogController/fileController/FileController";

export class Write extends Component {
  state = {
    postImage:{},
    Post: {
      image: [],
    },
  };

  componentDidMount() {
    var username = parseJwt(this.props.Token)["username"];
    if (username) {
      const pathname = window.location.pathname;
      const lastItem = pathname.substring(pathname.lastIndexOf("/") + 1);
      var Post = { ...this.state.Post };
      if (lastItem !== "write") {
        getPost(lastItem).then((res) => {
          Post.description = res.description;
          Post.title = res.title;
          Post._id = res._id;
        });
      }

      Post.author = username;
      Post.date = Date().toLocaleString();
      console.log(Post);
      this.setState({ Post });
    }
  }

  onFileChange = (event) => {
    // Update the state
    const formData = new FormData();

    // Update the formData object
    formData.append(
      "myFile",
      event.target.files[0],
      event.target.files[0].name
    );

    // Request made to the backend api
    // Send formData object
    uploadFile(formData)
      .then((res) => {
        if (res) {
          var Post = { ...this.state.Post };
          Post.image = res;
          this.setState({ Post });
          this.getPostImage();
        }
      })
      .catch((err) => console.log(err));
  };

  getPostImage() {
    getFile(this.state.Post.image)
      .then((res) => {
        this.setState({ postImage: res });
      })
      .catch((err) => console.log(err));
  }

  changeEvent = (e) => {
    this.setState({
      Post: { ...this.state.Post, [e.target.name]: e.target.value },
    });
  };

  validatePostContent() {
    if (this.state.Post.title !== "" && this.state.Post.description !== "") {
      upsertPost(this.state.Post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    } else {
      alert(
        "Please write a story for me to Post... Stories don't write themselves..."
      );
    }
  }

  render() {
    return (
      <div class="write">
        {this.state.postImage ? (
          <img class="story-image" src={tempPostImage} alt="" />
        ) : (
          <img class="story-image" src={postImage} alt="" />
        )}
        <div class="form-collection">
          <label htmlFor="fileUpload">
            <i class="upload-icon fas fa-plus"></i>
          </label>
          {/* {this.state.Post.title ? <p>{this.state.Post.title}</p>:  <p>"No Post data"</p> } */}
          <input
            type="file"
            id="fileUpload"
            hidden="true"
            onChange={(e) => this.onFileChange(e)}
          />
          <input
            class="title-text"
            name="title"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              this.changeEvent(e);
            }}
            autoFocus="true"
          />
        </div>
        <div class="form-collection">
          <textarea
            class="story-text"
            name="description"
            placeholder="Tell you story..."
            onChange={(e) => {
              this.changeEvent(e);
            }}
            type="text"
          ></textarea>
          <button class="submit" onClick={() => this.validatePostContent()}>
            Publish
          </button>
        </div>
      </div>
    );
  }
}

export default Write;
