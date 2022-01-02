import React, { Component } from 'react';
import NavBar from './navbar/NavBar'
import PostPage from './pages/post-page/PostPage'
import Write from './pages/write/Write'
import Home from './pages/home/Home'

class BlogPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        return (
            <div class="blog">
                <NavBar/>
                <Write/>
            </div>
        );
    }
}

export default BlogPage;