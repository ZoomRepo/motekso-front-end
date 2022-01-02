import React, { Component } from 'react'
import Sidebar from '../../social-sidebar/SocialSidebar'
import PostContent from './content/Content'

export class PostPage extends Component {
    render() {
        return (
            <div class="post-page">
                <PostContent/>
                <Sidebar />
            </div>
        )
    }
}

export default PostPage
