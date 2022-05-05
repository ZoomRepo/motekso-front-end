import React, { Component } from 'react';

class Sidebar extends Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    render() {
        return (
            <div class="sidebar">
                <img src="Motekso - Transparent.png"/>
                <ul>
                    {/* <li>Home</li>
                    <li>About</li>
                    <li>Contact</li> */}
                    <li class="active">Blog</li>
                </ul>
            </div>
            );
        }
    }
export default Sidebar;