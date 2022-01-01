import React, { Component } from 'react'
import Header from './header/Header'
import Posts from './posts/Posts'
import Sidebar from '../../social-sidebar/SocialSidebar'

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
