import React, { Component } from 'react';
import NavBar from './navbar/NavBar'
import Story from './pages/story/Story'
import Write from './pages/write/Write'
import Home from './pages/home/Home'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Registration from './pages/registration/Registration'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class BlogPage extends Component {
    componentWillMount() {

    }

    componentDidMount() {

    }
    render() {
        const user = false;

        return (
            <div class="blog">
                <Router>
                    <NavBar/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/home">
                            <Home/>
                        </Route>
                        <Route path="/login">
                        { user ? <Home/> : <Login/> }
                        </Route>
                        <Route path="/registration">
                            { user ? <Home/> : <Registration/> }
                        </Route>
                        <Route path="/settings">
                            { user ? <Settings/> : <Registration/> }
                        </Route>
                        <Route path="/write">
                            { user ? <Write/> : <Home/> }
                        </Route>
                        <Route path="/post/:postId">
                            <Story/>
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default BlogPage;