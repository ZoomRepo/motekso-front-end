import React, { Component } from 'react'
import whoAreWe from '../../../assets/images/who-are-we.jpg'

export class Sidebar extends Component {
    render() {
        return (
            <div class="social-sidebar">
                <div class="section">
                    <span class="title">WHAT DO WE DO</span>
                    <img src={whoAreWe} alt="who-are-we" />
                    <p>We research and utilise Modern Tech Solutions (Motekso).<br/>
                    The prmary goal is to carry out research in many areas pull it together and generate more ideas and money to carry on investing into new projects. <br/>
                    The aim is to share this research and build out the community so that others can learn and benefit from the process as well. </p> 
                </div>
                <div class="section">
                    <span class="title">CATEGORIES</span>
                    <ul class="list">
                        <li class="list-item">Technology</li>
                        <li class="list-item">Science</li>
                        <li class="list-item">Investing</li>
                        <li class="list-item">Sales</li>
                        <li class="list-item">Research</li>
                        <li class="list-item">Crypto</li>
                        <li class="list-item">Development</li>
                        <li class="list-item">Business</li>
                    </ul>
                </div>
                <div class="section">
                        <span class="title">FOLLOW US</span>
                        <div class="social-icons">
                            <a href="https://twitter.com/MoteksoUK">
                                <i class="icon fab fa-twitter-square"></i>
                            </a>
                            <a href="https://www.youtube.com/channel/UCgzXxwF_XHaC3F4gbLnTyTA">
                                <i class="icon fab fa-youtube"></i>
                            </a>
                            <a href="https://discord.gg/XYGp7rDR">
                                <i class="icon fab fa-discord"></i>
                            </a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Sidebar
