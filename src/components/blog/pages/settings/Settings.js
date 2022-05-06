import React, { Component } from 'react'
import Sidebar from '../../social-sidebar/SocialSidebar'
import tempCover from '../../../../assets/images/who-are-we.jpg'

export class Settings extends Component {
    render() {
        return (
            <div class="settings">
                <div class="user-wrapper">
                    <div class="user-header">
                        <span class="update-text">
                            Update Account
                        </span>
                        <span class="delete-text">
                            Delete Account
                        </span>
                        </div>
                        <form class="form">
                            <label htmlFor="">Profile Picture</label>
                            <div class="profile-picture">
                                <img src='https://bestcellphonespyapps.com/wp-content/uploads/2017/09/pexels-photo-220453-1-768x786.jpeg' alt=""/>
                                <label htmlFor="fileUpload">
                                    <i class="profile-icon far fa-user-circle"/>
                                </label>
                                <input type="file" hidden="true" id="fileUpload"/>
                            </div>
                                <label>Username</label>
                                <input type="text" placeholder='Ollie'/>
                                <label>Email</label>
                                <input type="text" placeholder='olliemotekso.co.uk'/>
                                <label>Password</label>
                                <input type="password" placeholder=''/>
                                <label>Mobile</label>
                                <input type="text" placeholder='07506595309'/>
                                <button class="submit">Save Settings</button>
                        </form>
                    </div>
                <Sidebar/>
            </div>
        )
    }
}

export default Settings
