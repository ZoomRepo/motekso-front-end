import React, { Component } from 'react'
import Post from '../post-item/PostItem'
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
                <Post key={post.key} Content={post}/>
                ) : "Error fetching posts..."}
            </div>
        )
    }
}

export default Posts
