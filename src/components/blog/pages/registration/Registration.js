import React, { Component } from 'react'

export class Registration extends Component {
    render() {
        return (
            <div class="registration">
                <span class="title">Registration</span>
                <form class="form">
                    <label>Username</label>
                    <input class="login-input" type="text" placeholder="Enter your email..."/>
                    <label>Email</label>
                    <input class="login-input" type="text" placeholder="Enter your email..."/>
                    <label>Password</label>
                    <input class="login-input" type="password" placeholder="Enter your password..."/>
                    <button class="register-button">Sign Up</button>
                </form>
            </div>
        )
    }
}

export default Registration
