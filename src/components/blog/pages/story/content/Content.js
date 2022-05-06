import React, { Component } from "react";
import tempPostImage from "../../../../../assets/images/who-are-we.jpg";
import {
  getPost,
  deletePost,
} from "../../../../../services/blogController/postController/postController";
import { Link } from "react-router-dom";
import PostImage from "./image/postImage";
import { format } from 'timeago.js';

export class PostContent extends Component {
  state = {
    Post: {},
    Edit: false,
  };

  componentDidMount() {
    getPost(this.props.Id).then((res) => this.setState({ Post: res }));
  }

  callDeletePost(id) {
    deletePost(this.props.Id).then((res) => this.setState({ Post: res }));
  }

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
            <input
              class="title-text"
              name="title"
              type="text"
              value={this.state.Post.title}
              onChange={(e) => {
                changeEvent(e);
              }}
              autoFocus="true"
            />
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
                      this.callDeletePost(this.state.Post.id);
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
          <p class="post-description">
            {this.state.Edit ? (
              <input
                class="title-text"
                name="title"
                type="text"
                value={this.state.Post.description}
                onChange={(e) => {
                  changeEvent(e);
                }}
                autoFocus="true"
              />
            ) : (
              <h1 class="post-title">{this.state.Post.description? this.state.Post.description: "Error loading Post Description..."}</h1>
            )}
          </p>
        </div>
      </div>
    );
  }
}

export default PostContent;
