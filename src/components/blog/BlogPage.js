import React, { Component } from 'react';
import NavBar from './navbar/NavBar'
import Story from './pages/story/Story'
import Write from './pages/write/Write'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'

class BlogPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        return (
            <div class="blog">
                <NavBar/>
                <Settings/>
            </div>
        );
    }
}

export default BlogPage;