import React, { Component } from 'react'
import tempPostImage from '../../../../../assets/images/who-are-we.jpg'

export class PostContent extends Component {
    render() {
        return (
            <div class="post-content">
                <div class="post-content-wrapper">
                    <img class="post-image" src={tempPostImage} alt="Post Image" />
                    <h1 class="post-title">Loerm Ipsum
                        <div class="post-edit">
                            <i class="post-icon far fa-edit" />
                            <i class="post-icon far fa-trash-alt" />
                        </div>
                    </h1>
                    <div class="post-info">
                        <span class="post-author">Author: <b>Ollie</b></span>
                        <span class="post-date">1 hour ago</span>
                    </div>
                    <p class="post-description">
                        Tempor minim id ea duis dolore eiusmod commodo fugiat et pariatur adipisicing mollit pariatur occaecat. Do qui nostrud officia mollit qui fugiat nulla magna nostrud aute in qui. Culpa dolore elit deserunt nulla. Nisi nisi in cupidatat occaecat culpa culpa dolor sit non esse enim non ad. Ut minim sit aliqua tempor sunt eiusmod eiusmod.

                        Dolore tempor consequat eu tempor irure consequat proident enim culpa irure. Aliqua quis voluptate occaecat irure cillum non aute nisi ullamco fugiat est ipsum. Dolor ex mollit id nulla excepteur ex voluptate reprehenderit pariatur. Minim proident sunt Lorem est irure aliqua incididunt minim culpa aliquip ullamco consequat ut. Nulla sint proident eu adipisicing elit et nisi duis nisi consectetur nostrud anim ea.

                        Consequat officia Lorem duis occaecat laboris in adipisicing proident ullamco ex amet occaecat ullamco. Sint eiusmod elit enim deserunt veniam. Sit occaecat non culpa reprehenderit fugiat duis elit eu elit ea commodo consequat. Id ex sit elit amet commodo elit. Sunt aliqua nulla amet aliqua ullamco minim minim ut consectetur enim ad irure sunt. Ipsum in officia et minim amet sunt do est dolor id nisi deserunt.

                        Do dolore ex in non deserunt elit qui ullamco dolore deserunt incididunt fugiat duis aliquip. Nisi ullamco magna velit et id elit ut Lorem dolore et adipisicing. Dolor ut est ad mollit fugiat irure. Exercitation laborum veniam amet culpa labore. Sit ea nisi id eiusmod.

                        Labore quis laboris sunt qui laborum. Sunt dolor aliqua incididunt occaecat commodo incididunt est. Dolor pariatur Lorem dolor officia qui minim.

                        Irure ipsum fugiat ullamco occaecat anim. Aliquip duis magna commodo nisi ea amet ipsum sit nisi mollit. Duis sit nisi tempor quis pariatur ipsum commodo sit id incididunt aute incididunt duis duis. Velit cupidatat id voluptate proident commodo fugiat mollit tempor. Lorem esse exercitation Lorem consequat qui aliqua non. Quis ullamco dolore ipsum aliqua. Commodo eu mollit excepteur tempor aute ea qui laborum aliquip.
                    </p>
                </div>
            </div>
        )
    }
}

export default PostContent
