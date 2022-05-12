import React, { Component } from "react";
import tempPostImage from "../../../../../assets/images/who-are-we.jpg";
import {
  getPost,
  deletePost,
  upsertPost,
} from "../../../../../services/blogController/postController/postController";
import { Link } from "react-router-dom";
import PostImage from "./image/postImage";
import { format } from 'timeago.js';

export class PostContent extends Component {
  state = {
    Post: {baboon:""},
    Edit: false,
  };

  componentDidMount() {
    getPost(this.props.Id).then((res) => this.setState({ Post: res }));
  }

  callDeletePost() {
    deletePost(this.props.Id).then((res) => this.setState({ Post: res }));
    window.location.reload(false);
  }
  changeEvent(e) {
    this.setState({
      Post: { ...this.state.Post, [e.target.name]: e.target.value },
    });
  };

 validatePostContent() {
    if (this.state.Post.title !== "" && this.state.Post.description !== "") {
      upsertPost(this.state.Post)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
        window.location.reload(false);
    } else {
      alert(
        "Please write a story for me to Post... Stories don't write themselves..."
      );
    }
  };

  updateMode() {
    if (this.state.Edit) {
      this.setState({ Edit: false });
      return;
    }
    this.setState({ Edit: true });
    return;
  }

  render() {
    return (
      <div class="post-content">
        <div class="post-content-wrapper">
          <PostImage Post={this.state.Post} />
          {this.state.Edit ? (
            <> <input
            class="post-title edit"
            name="title"
            type="text"
            value={this.state.Post.title}
            onChange={(e) => {
              this.changeEvent(e);
            }}
          />
          <div class="post-edit">
              <i
                class="saveButton fa-solid fa-check"
                onClick={() => {
                  this.validatePostContent();
                }}
              />
            </div></>
          ) : (
            <h1 class="post-title">
              {this.state.Post.title
                ? this.state.Post.title
                : "Error loading Post Title..."}
              {this.props.Token ? (
                <div class="post-edit">
                  <i
                    class="post-icon far fa-edit"
                    onClick={() => {
                      this.updateMode();
                    }}
                  />
                  <i
                    onClick={() => {
                      this.callDeletePost();
                    }}
                    class="post-icon far fa-trash-alt"
                  />
                </div>
              ) : (
                ""
              )}
            </h1>
          )}
          <div class="post-info">
            <span class="post-author">
              {this.state.Post.author
                ? this.state.Post.author
                : "Error loading Post Author..."}
            </span>
            <span class="post-date">
              {this.state.Post.date
                ? format(this.state.Post.date)
                : "Error loading Post Date..."}
            </span>
          </div>
            {this.state.Edit ? (
              <textarea
                class="post-story edit"
                name="description"
                type="text"
                value={this.state.Post.description}
                onChange={(e) => {
                  this.changeEvent(e);
                }}
             ></textarea> 
            ) : (
              <textarea disabled
              class="post-story edit"
              value={this.state.Post.description}
              name="description"
              type="text"></textarea> 
            )}
        </div>
      </div>
    );
  }
}

export default PostContent;
