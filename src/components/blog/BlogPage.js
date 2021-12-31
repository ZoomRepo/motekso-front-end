import React, { Component } from 'react';
import NavBar from './navbar/NavBar'
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
                <Home/>
            </div>
        );
    }
}

export default BlogPage;