import React, { Component } from 'react';
import logo from '../../../../../assets/images/Motekso - Blog Logo 2.png'
import backdropImage from '../../../../../assets/images/shutterstock_621455918.jpg'

class Header extends Component {

    render() {
        return (
            <div class="header">
                <div class="logo">
                    <img src={logo} alt="Motekso Simplified Logo"></img>
                    {/* <span class="text">WYou've found the Blog</span> */}
                </div>
                {/* <div class="overlay"> */}
                <img class="backdrop" src={backdropImage} alt="Backdrop Image" />
  
                {/* </div> */}
            </div>
        );
    }
}

export default Header;