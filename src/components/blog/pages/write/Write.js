import React, { Component } from "react";
import { canUseEventListeners } from "react-twitter-embed";
import tempPostImage from "../../../../assets/images/who-are-we.jpg";
import parseJwt from "../../../../utils/parseJwt";
import { getPost, upsertPost } from '../../../../services/blogController/postController/postController'

export class Write extends Component {
  state = {
      Post: {}
  };

  componentDidMount() {
    var username = parseJwt(this.props.Token)["username"];
    if (username) {
      const pathname = window.location.pathname;
      const lastItem = pathname.substring(pathname.lastIndexOf("/") + 1);
      var Post = {...this.state.Post}

      if (lastItem !== "write") {
        getPost(lastItem).then(res =>  {
            Post.description = res.description;
            Post.title = res.title;
            Post._id = res._id;
        })
      }

      Post.author = username;
      Post.date = Date().toLocaleString();

      this.setState({Post})
    }
  }

  changeEvent = (e) => {
    this.setState({Post: { ...this.state.Post, [e.target.name]:e.target.value } });
  }

  validatePostContent() {
     if (this.state.Post.title  !== "" && this.state.Post.description !== "") {
        upsertPost(this.state.Post).then(res =>  console.log(res)).catch(err => console.log(err))
     } else {
        alert("Please write a story for me to Post... Stories don't write themselves...")
     }
  }

  render() {
    return (
      <div class="write">
        <img class="story-image" src={tempPostImage} alt="" />
          <div class="form-collection">
            <label htmlFor="fileUpload">
              <i class="upload-icon fas fa-plus"></i>
            </label>
            <input type="file" id="fileUpload" hidden="true" />
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
