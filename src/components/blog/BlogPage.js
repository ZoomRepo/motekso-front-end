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
    state = {
        loggedIn: false,
        token: null
    }
    
  authenticateApplication() {
    var token = localStorage.getItem("token")
    if(token !== null) {
          this.setState({ 
              loggedIn: true,
              token: token });
      } else  {
      this.setState({ 
          loggedIn: false,
        token: null });
    }
  }

  componentDidMount() {
    var token = localStorage.getItem("token")
    if(token !== null) {
          this.setState({ 
              loggedIn: true,
              token: token });
      } else  {
      this.setState({ 
          loggedIn: false,
        token: null });
    } 
  }
    render() {
        return (
            <div class="blog">
                <Router>
                    <NavBar Token={this.state.token}/>
                    <Switch>
                        <Route exact path="/">
                            <Home/>
                        </Route>
                        <Route exact path="/home">
                            <Home/>
                        </Route>
                        <Route path="/login">
                        { this.state.loggedIn ? <Home/> : <Login AuthenticateApplication={() => this.authenticateApplication()}/> }
                        </Route>
                        {/* <Route path="/registration">
                            { this.state.loggedIn ? <Home/> : <Registration/> }
                        </Route> */}
                        <Route path="/settings">
                            { this.state.loggedIn ? <Settings/> : <Registration/> }
                        </Route>
                        <Route path="/write">
                            { this.state.loggedIn ? <Write Token={this.state.token}/> : <Home/> }
                        </Route>
                        <Route path="/post/:postId">
                            <Story Token={this.state.token} />
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default BlogPage;