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
                    <i class="topIcon fab fa-twitter-square"></i>
                    <i class="topIcon fab fa-youtube"></i>
                    <i class="topIcon fab fa-discord"></i>
                </div>
                <div class="topCenter">
                    <ul class="navBarLinks">
                        <li class="navBarLink">Home</li>
                        <li class="navBarLink">About</li>
                        <li class="navBarLink">Contact</li>
                        <li class="navBarLink">Write</li>
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