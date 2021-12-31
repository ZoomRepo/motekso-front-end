import React, { Component } from 'react';
import logo from '../../../../../assets/images/Motekso - Transparent.png'

class Header extends Component {
   
    render() {
        return (
            <div class="header">
                <div class="headerWrapper">
                    <img src={logo}></img>
                    {/* <span class="text">WYou've found the Blog</span> */}
                </div>
            </div>
        );
    }
}

export default Header;