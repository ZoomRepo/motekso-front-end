import React, { Component } from 'react'
import Header from './header/Header'
import Posts from './posts/Posts'
import Sidebar from '../../social-sidebar/SocialSidebar'
import getAllPosts from '../../../../services/blogController/postController/postController'

export class Home extends Component {
    render() {
        return (
            <>
            <Header />
            <div class="home">
                <Posts/>
                <Sidebar/>
            </div>
        </>
        )
    }
}

export default Home
