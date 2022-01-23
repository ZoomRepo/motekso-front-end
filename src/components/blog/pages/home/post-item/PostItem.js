import React, { Component } from 'react'
import tempImage from '../../../../../assets/images/who-are-we.jpg'
import { Link } from "react-router-dom";

export class PostItem extends Component {
    
    actOnId(id) {
        console.log(id)
    }

    render() {
        return (
            <div class="post">
                <img class="post-image" src={tempImage} alt="Post Image"/>
                {console.log(this.props.Content)}
                <div class="post-info" onClick={() => this.actOnId(this.props.Content._id)}>
                    <div class="post-categories">
                        <span class="post-category">Development, Business, Technology</span>
                    </div>
                    <Link to={`/post/${this.props.Content._id}`} class="link">                    
                        <span class="post-title">{this.props.Content.title}</span>
                    </Link>
                    <span class="post-date">{this.props.Content.date}</span>
                    <p class="post-description">{this.props.Content.description}
                    </p>
                </div>
            </div>
        )
    }
}

export default PostItem
