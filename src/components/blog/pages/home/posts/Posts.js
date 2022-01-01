import React, { Component } from 'react'
import Post from '../post-item/PostItem'

export class Posts extends Component {
    render() {
        return (
            <div class="posts">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }
}

export default Posts
