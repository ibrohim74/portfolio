import React, {Component} from 'react';
import HomeLayout from "./layout_RoutersComponents/HomeLayout";
import {BrowserRouter as Router, HashRouter, Route, Switch,} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <HomeLayout/>
                </div>
            </Router>
        );
    }
}

export default App;