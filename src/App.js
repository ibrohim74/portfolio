import React, {Component} from 'react';
import Navbar from "./Navbar";
import Routers from "./Routers";
import {BrowserRouter as Router} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Navbar/>
                    {/*<div className="container">*/}
                    {/*    <div className="row">*/}
                    {/*        <div className="col-md-12">*/}
                                <Routers/>

                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </Router>
            </div>
        );
    }
}

export default App;