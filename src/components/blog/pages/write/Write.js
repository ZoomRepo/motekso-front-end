import React, { Component } from "react";
import UploadPostImage from "./image/uploadPostImage";
import PostImage from "./image/postImage";
import { upsertPost } from "../../../../services/blogController/postController/postController";
import { getFile } from '../../../../services/blogController/fileController/FileController'
import PostDetail from './content/postDetails'
import parseJwt from '../../../../utils/parseJwt'

export class Write extends Component {
  state = {
    Post: {
      image: "",
    },
  };

  componentDidMount() {
    var username = parseJwt(this.props.Token)["username"];
    if (username) {
      const pathname = window.location.pathname;
      const lastItem = pathname.substring(pathname.lastIndexOf("/") + 1);

      var Post = { ...this.state.Post };
      if (lastItem !== "write") {
        getFile(lastItem).then((res) => {
          Post._id = lastItem;
        });

        Post.author = username;
        Post.date = Date().toLocaleString();
        this.setState({ Post });
      }
    }
  }

  updatePostImage = (image) => {
    this.setState({
      Post: { ...this.state.Post, image: image },
    });
  };

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
        <PostImage postImage={this.state.Post.image} />
        <div class="form-collection">
          <UploadPostImage updatePostImage={this.updatePostImage} />
          <PostDetail changeEvent={this.changeEvent} Post={this.state.Post} />
          <button class="submit" onClick={() => this.validatePostContent()}>
            Publish
          </button>
        </div>
        {/* <PostDetails/> */}
      </div>
    );
  }
}

export default Write;
