import React, { Component, useState, useEffect } from "react";
import UploadPostImage from "./image/uploadPostImage";
import PostImage from "./image/postImage";
import { upsertPost, getPost } from "../../../../services/blogController/postController/postController";
import { getFile } from '../../../../services/blogController/fileController/FileController'
import PostDetail from './content/postDetails'
import parseJwt from '../../../../utils/parseJwt'
import reactDom from "react-dom";

export class Write extends Component {
  state = {
    Post: {},
  };

  // changeEvent(e) {
  //   this.setState({
  //     Post: { ...this.state.Post, [e.target.name]: e.target.value },
  //   });
  // };

  render() {
    return (
      <div class="post-page">
        <div class="post-content">
          <div class="post-content-wrapper">
            <PostImage Post={this.state.Post} />
            <textarea
                  class="post-story edit"
                  name="description"
                  type="text"
                  value="Test"
               ></textarea> 
               {/* {{this.state.Post.description}
                  onChange={(e) => {
                    this.changeEvent(e);
                  }}} */}
                <textarea disabled
                class="post-story edit"
                value="Test description blah blah blah this is a test desc"
                name="description"
                type="text"></textarea>
                {/* {this.state.Post.description} */}
          </div>
        </div>
        {/*<PostDetails />*/}
      </div>
    );
  }
}

export default Write