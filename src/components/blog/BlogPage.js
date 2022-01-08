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
        loggedIn: false
    }
    
  authenticateApplication() {
    if(localStorage.getItem("token") !== null) {
          this.setState({ loggedIn: true });
      } else  {
      this.setState({ loggedIn: false });
    }
  }
  
  componentWillMount() {
    if(localStorage.getItem('token')) {
      this.setState({ loggedIn: true });
    } else  {
      this.setState({ loggedIn: false });
    }
  }
    render() {
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
                        { this.state.loggedIn ? <Home/> : <Login AuthenticateApplication={() => this.authenticateApplication()}/> }
                        </Route>
                        <Route path="/registration">
                            { this.state.loggedIn ? <Home/> : <Registration/> }
                        </Route>
                        <Route path="/settings">
                            {console.log(this.state.loggedIn) }
                            { this.state.loggedIn ? <Settings/> : <Registration/> }
                        </Route>
                        <Route path="/write">
                            { this.state.loggedIn ? <Write/> : <Home/> }
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