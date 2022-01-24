import React, { Component } from 'react'
import Sidebar from '../../social-sidebar/SocialSidebar'
import PostContent from './content/Content'

export class PostPage extends Component {
    render() {
        var location = window.location.href;
        var id = location.split('/')[4];

        return (
            <div class="post-page">
                <PostContent Id={id}/>
                <Sidebar />
            </div>
        )
    }
}

export default PostPage
