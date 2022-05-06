import React, { Component } from 'react'
import tempImage from '../../../../../assets/images/who-are-we.jpg'
import { Link } from "react-router-dom";
import PostImage from './image/postImage'
import { format } from 'timeago.js';


export class PostItem extends Component {
    clenseDate = (date) => {
        var date = new Date(date);
        return date;
    }

    render() {
        return (
            <div class="post">
                <PostImage Post={this.props.Content} />
                <div class="post-info">
                        <div class="post-categories">
                        <span class="post-category">Development, Business, Technology</span>
                    </div>
                    <Link to={`/post/${this.props.Content._id}`} class="link">                    
                        <span class="post-title">{this.props.Content.title}</span>
                    </Link>
                    <span class="post-date">
                        {format(this.props.Content.date)}
                        </span>
                        <p class="post-description">{this.props.Content.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default PostItem
