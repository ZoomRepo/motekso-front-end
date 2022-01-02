import React, { Component } from 'react';
class NavBar extends Component {
    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
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
                        {/* <li class="navBarLink">Home</li> */}
                        {/* Hidden Post Page complete */}
                        <li class="navBarLink">About</li>
                        <li class="navBarLink">Contact</li>
                        {/* <li class="navBarLink">Write</li> */}
                        <li class="navBarLink">Logout</li>
                    </ul>
                </div>
                <div class="topRight">
                    <img class="topImage" src="https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-768x786.jpeg"/>
                    <i class="topSearchIcon fas fa-search"></i>
                </div>
            </div>
        );
    }
}

export default NavBar;