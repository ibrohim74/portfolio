import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import Register from "./Register";

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md bg-dark navbar-dark">
                    <a className="navbar-brand" href="#">Xasanov Ibroxim</a>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"/>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/aboutMe" >AboutMe</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/coreui" >coreui</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/html" >Html-Css</NavLink>
                            </li>








                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Login" >Login</NavLink>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;