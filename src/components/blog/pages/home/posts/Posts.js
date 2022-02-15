import React, { Component } from 'react'
import PostItem from '../post-item/PostItem'
import {getAllPosts} from '../../../../../services/blogController/postController/postController'

export class Posts extends Component {
    state = {
        Posts: []
    }

    componentDidMount() {
        getAllPosts().then(res => 
            this.setState({ Posts: res } 
              ));
    }

    render() {
        return (
            <div class="posts">
                {/* TODO: Implement map for posts */ }
                {this.state.Posts ? 
                this.state.Posts.map(post =>
                <PostItem Content={post}/>
                ) : "Error fetching posts..."}
            </div>
        )
    }
}

export default Posts
