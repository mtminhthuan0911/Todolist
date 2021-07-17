import React, { Component } from 'react'
export default class Header extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <a href="https://mtminhthuan0911.github.io/"><img className="logoPage" src="/Z.svg" alt="" />
                    <p className="txtHeading">Have A Good Day !</p></a>
                    {/* <div class="avatar-center avatar-status">
                         <span class="_status"></span>
                         <img src="/avatar.png" alt="" class="image-cover avatar-image"></img>
                    </div> */}
                    
                </div>
            </div>
        )
    }
}
