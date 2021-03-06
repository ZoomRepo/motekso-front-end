import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { signOut } from '../../../services/authController/authController'

class NavBar extends Component {
    render() {
        const user = this.props.Token;

        return (
            <div class="navbar">
                <div class="topLeft">
                    <a href="https://twitter.com/MoteksoUK">
                        <i class="topIcon fab fa-twitter-square"></i>
                    </a>
                    <a href="https://www.youtube.com/channel/UCgzXxwF_XHaC3F4gbLnTyTA">
                        <i class="topIcon fab fa-youtube"></i>
                    </a>
                    <a href="https://discord.gg/XYGp7rDR">
                        <i class="topIcon fab fa-discord"></i>
                    </a>
                </div>
                <div class="topCenter">
                    <ul class="navBarLinks">
                        <li class="navBarLink"><Link class="link" to="/">Home</Link></li>
                        {/* <li class="navBarLink"><Link class="link" to="/">About</Link></li>
                        <li class="navBarLink"><Link class="link" to="/">Contact</Link></li> */}
                        <li class="navBarLink">{user && <Link class="link" to="/write">Write</Link>}</li>
                        <li class="navBarLink">{user && <Link class="link" to="/logout" onClick={() => signOut()}>Logout</Link>}</li>
                    </ul>
                </div>
                <div class="topRight">
                {/*
                {user ?

                        (<img class="topImage" hidden="true" src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-768x786.jpeg" />
                        ) :
                        (<ul class="navBarLinks">
                            <li class="navBarLink"><Link class="link" to="/login">Login</Link></li>
                        </ul>)
                        < li class="navBarLink"><Link class="link" to="/registration">Register</Link></li>
                }*/}
                {/* TODO: Fix and Unhide Profile <i  class="topSearchIcon fas fa-search"></i> */}
            </div>
            </div >
        );
    }
}

export default NavBar;