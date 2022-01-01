import React, { Component } from 'react';
import NavBar from './navbar/NavBar'
import PostPage from './pages/post-page/PostPage'
import Home from './pages/home/Home'

class BlogPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        return (
            <div class="blogpage">
                <NavBar/>
                <PostPage/>
            </div>
        );
    }
}

export default BlogPage;