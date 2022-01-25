import React, { Component } from 'react'
import tempPostImage from '../../../../../assets/images/who-are-we.jpg'
import { getPost, deletePost } from '../../../../../services/blogController/postController/postController'
import { Link } from "react-router-dom";

export class PostContent extends Component {
    state = {
        Post: {}
    }

    componentDidMount() {
        getPost(this.props.Id).then(res => this.setState({Post: res}))
    }

    callDeletePost(id) {
        deletePost(this.props.Id).then(res => this.setState({Post: res}))
    }

    render() {
        return (
            <div class="post-content">
                <div class="post-content-wrapper">
                    <img class="post-image" src={tempPostImage} alt="Post Image" />
                    <h1 class="post-title">{this.state.Post.title? this.state.Post.title: "Error loading Post Title..."}
                        <div class="post-edit">
                            <Link to={`/write/${this.props.Id}`} class="link">                    
                            <i class="post-icon far fa-edit" />
                            </Link>
                            <i onClick={() => {this.callDeletePost(this.state.Post.id)}} class="post-icon far fa-trash-alt" />
                        </div>
                    </h1>
                    <div class="post-info">
                        <span class="post-author">{this.state.Post.author? this.state.Post.author: "Error loading Post Author..."}</span>
                        <span class="post-date">{this.state.Post.date? this.state.Post.date: "Error loading Post Date..."}</span>
                    </div>
                    <p class="post-description">
                    {this.state.Post.description? this.state.Post.description: "Error loading Post Description..."}
                        </p>
                </div>
            </div>
        )
    }
}

export default PostContent
