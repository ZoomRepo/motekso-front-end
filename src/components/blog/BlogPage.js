import React, { Component } from 'react';
import NavBar from './navbar/NavBar'
import Story from './pages/story/Story'
import Write from './pages/write/Write'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'

class BlogPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        return (
            <div class="blog">
                <NavBar/>
                <Login/>
            </div>
        );
    }
}

export default BlogPage;