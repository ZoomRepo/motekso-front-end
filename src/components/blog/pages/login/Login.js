import React, { Component } from 'react'
import { Link } from "react-router-dom"
import {signIn} from "../../../../services/authController/authController"

export class Login extends Component {
    state = {
        username: "",
        password: ""
    }

    login() {
        signIn(this.state.username, this.state.password).then(res => {
            if (res !== null && res !== undefined) {
                localStorage.setItem("token", res);
                console.log(res)
                this.props.AuthenticateApplication();
            }
        })
    }

    changeEvent = e => {
        if (e.target.name === "username") {
            this.setState({
                username: e.target.value
            });
        } else if (e.target.name === "password") {
            this.setState({
                password: e.target.value
            });
        }
    }

    render() {
        return (
            <div class="login">
                <span class="title">Login</span>
                <form class="form">
                    <label>Email</label>
                    <input class="login-input" name="username" type="text" placeholder="Enter your username..." value={this.state.username}
          onChange={e => { this.changeEvent(e); }} required />
                    <label>Password</label>
                    <input class="login-input" name="password" type="password" placeholder="Enter your password..." value={this.state.password}
          onChange={e => { this.changeEvent(e); }} required />
                    <button class="login-button" onClick={() => this.login()}>Login</button>
                </form>
                <button class="register-button"><Link class="link" to="/registration">Register</Link></button>
            </div>
        )
    }
}

export default Login
