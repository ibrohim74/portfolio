import React, {Component} from 'react';
import {Image, Progress} from "antd";

class AboutMe extends Component {
    render() {
        return <div>
            <div className="container">


                <div className="test1">HELLO</div>
                <div className="test2">SALOM</div>

                <div className="about-content">
                    <div className="about-text text-dark">
                        <h1>About Me</h1>
                        <div className="line-box-section"/>
                    </div>
                    <div className="about-box mt-4">
                        <div className="a_left ">
                            <div className="row">
                                <div className="img-about"> <Image  src="photo_2021-04-15_23-00-19.jpg"/></div>

                                <div className="a_info text-dark">
                                    <p><b>Name: </b>Ibroxim</p>
                                    <p><b>Surname: </b>Xasanov</p>
                                    <p><b>Email: </b>xibroxim11@gmail.com</p>
                                    <p><b>phone: </b>+998993045475</p>

                                </div>
                            </div>
                            <div className="skill text-dark">
                                <p className="text-dark font-weight-bold skills">Skill</p>
<>
                                <Progress type="dashboard" percent={90}/> <span>html</span>
                                <Progress type="dashboard" percent={80}/> <span>Css+bootstrap</span>
</>
                                <div>
                                    <Progress type="dashboard" percent={65}/> <span>java script + jquery</span>
                                    <Progress type="dashboard" percent={75}/> <span>React.js,Redux,API,Ajax</span>

</div>
                                <div >
                                 <Progress type="dashboard" percent={75}/> <span>Ant design UI + CoreUI</span>
                                </div>


                            </div>

                        </div>
                        <div className="row">
                            <div className="a_right text-dark p-1">
                                <h3>biography</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam
                                    aperiam,
                                    aspernatur beatae culpa eaque id in magnam maiores neque perferendis quod quos
                                    reiciendis
                                    vel vero voluptates voluptatibus. Consequuntur cum deleniti excepturi quas
                                    saepe, temporibus
                                    vero? Amet at beatae distinctio eum in inventore modi pariatur perferendis quo
                                    rem. Commodi
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default AboutMe;