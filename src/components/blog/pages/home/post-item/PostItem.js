import React, { Component } from 'react'
import tempImage from '../../../../../assets/images/who-are-we.jpg'

export class PostItem extends Component {
    render() {
        return (
            <div class="post">
                <img class="post-image" src={tempImage} alt="Post Image"/>
                <div class="post-info">
                    <div class="post-categories">
                        <span class="post-category">Development, Business, Technology</span>
                        <span class="post-category"></span> 
                    </div>
                    <span class="post-title">Initial Blog Post</span>
                    <span class="post-date">1 hour ago</span>
                    <p class="post-description">Dolore ut consequat ullamco incididunt ut est laboris fugiat exercitation. Id in ea nostrud reprehenderit proident ut pariatur eu do ut nostrud exercitation. 
                        Laboris quis et officia ullamco minim magna deserunt ea id minim ea id pariatur do. Pariatur eu non dolore quis eiusmod enim cillum minim.
                        Dolore ut consequat ullamco incididunt ut est laboris fugiat exercitation. Id in ea nostrud reprehenderit proident ut pariatur eu do ut nostrud exercitation. 
                        Laboris quis et officia ullamco minim magna deserunt ea id minim ea id pariatur do. Pariatur eu non dolore quis eiusmod enim cillum minim.Dolore ut consequat ullamco incididunt ut est laboris fugiat exercitation. 
                        Id in ea nostrud reprehenderit proident ut pariatur eu do ut nostrud exercitation. 
                        Laboris quis et officia ullamco minim magna deserunt ea id minim ea id pariatur do. Pariatur eu non dolore quis eiusmod enim cillum minim.Dolore ut consequat ullamco incididunt ut est laboris fugiat exercitation. 
                        Id in ea nostrud reprehenderit proident ut pariatur eu do ut nostrud exercitation. 
                        Laboris quis et officia ullamco minim magna deserunt ea id minim ea id pariatur do. Pariatur eu non dolore quis eiusmod enim cillum minim.
                    </p>
                </div>
            </div>
        )
    }
}

export default PostItem
