import React, {Component} from 'react';
import  {Switch, Route} from "react-router-dom";
import AboutMe from "./aboutMe";
import CoreUi from "./coreUI/CoreUI";
import Login from "./Login";
import Register from "./Register";
import Html from "./html-css/html";


class Routers extends Component {
    render() {
        return (
            <div className="mt-5">
<Switch>
    <Route path="/aboutMe">
        <AboutMe/>
    </Route>
    <Route path="/coreui">
<CoreUi/>
    </Route>
    <Route path="/Login">
<Login/>
    </Route>
    <Route path="/register">
<Register/>
    </Route>
    <Route path="/html">
        <Html/>
    </Route>
</Switch>
            </div>
        );
    }
}

export default Routers;