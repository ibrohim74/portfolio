import React, {Component} from 'react';
import './main.css'

class Html extends Component {

    render() {
        return (
            <div className="heades_www">
                <div className="container_header">
                    <div className="header_box">
                        <div className="header_left">
                            <a href="">
                                <div>Home</div>
                            </a>
                            <a href="">
                                <div>About</div>
                            </a>
                            <a href="">
                                <div>Team</div>
                            </a>
                            <a href="">
                                <div>booking</div>
                            </a>
                        </div>
                        <div className="header_logo"></div>

                        <div className="header_right">
                            <a href="">
                                <div>Menu</div>
                            </a>
                            <a href="">
                                <div>Galeria</div>
                            </a>
                            <a href="">
                                <div>Events</div>
                            </a>
                            <a href="">
                                <div>Contact</div>
                            </a>
                        </div>
                        <div className="title_head">RESTAURANT</div>
                        <div className="title_head_bg">hungry people</div>
                        <div className="line"></div>
                        <a className="button_head_left">BOOK TABLE</a>
                        <a className="button_head_right">EXPLORE</a>
                        <div className="rotate_head">Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</div>

                        <div className="rotate_social">
                            <a href="https://www.facebook.com/" target="_blank">
                                <div></div>
                            </a>
                            <a href="https://www.instagram.com/khasanov_ibroxim/" target="_blank">
                                <div></div>
                            </a>
                            <a href="https://twitter.com/?lang=ru" target="_blank">
                                <div></div>
                            </a>
                        </div>
                    </div>
                    <div className="about_text_content">
                        <p className="about_us">About Us</p>
                        <div className="line_about"></div>
                        <p className="about_lorem">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at velit maximus, molestie est
                            a, tempor magna.<br/>
<br/>
                            Integer ullamcorper neque eu purus euismod, ac faucibus mauris posuere. Morbi non ultrices
                            ligula. Sed dictum, enim sed ullamcorper feugiat, dui odio vehicula eros, a sollicitudin
                            lorem quam nec sem. Mauris tincidunt feugiat diam convallis pharetra. Nulla facilisis semper
                            laoreet.</p>
                    </div>
                    <div className="about_img">
                        <img src="img/about-img.png"/>
                        <div> </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Html;