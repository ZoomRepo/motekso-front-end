import React, { Component } from 'react'
import { Link } from "react-router-dom"

export class Login extends Component {
    render() {
        return (
            <div class="login">
                <span class="title">Login</span>
                <form class="form">
                    <label>Email</label>
                    <input class="login-input" type="text" placeholder="Enter your email..."/>
                    <label>Password</label>
                    <input class="login-input" type="password" placeholder="Enter your password..."/>
                    <button class="login-button">Login</button>
                </form>
                <button class="register-button"><Link class="link" to="/registration">Register</Link></button>
            </div>
        )
    }
}

export default Login
