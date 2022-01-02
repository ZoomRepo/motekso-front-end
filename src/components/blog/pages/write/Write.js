import React, { Component } from 'react'
import tempPostImage from '../../../../assets/images/who-are-we.jpg'

export class Write extends Component {
    render() {
        return (
            <div class="write">
                <img class="story-image" src={tempPostImage} alt=""/>
                <form class="form">
                    <div class="form-collection">
                        <label htmlFor="fileUpload">
                            <i class="upload-icon fas fa-plus"></i>
                        </label>
                       <input type="file" id="fileUpload" hidden="true"/>
                       <input class="title-text" type="text" placeholder='Title' autoFocus="true"/>
                    </div>
                    <div class="form-collection">
                        <textarea class="story-text" placeholder="Tell you story..." type="text"></textarea>
                        <button class="submit">Publish</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Write
