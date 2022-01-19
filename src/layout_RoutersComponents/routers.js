import React, {Component} from 'react';
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom";
import Dashboard from "../view/MainMenu/dashboard/dashboards";
import Inbox from "../view/MainMenu/inbox";
import Accounts from "../view/workspace/accounts";
import SchedulePost from "../view/workspace/schedulePost";
import Communities from "../view/workspace/communities";
import Analytics from "../view/workspace/analytics";
import FileFolders from "../view/general/fileFolders";
import Settings from "../view/general/settings";

class Routers extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/dashboard">
                        <Dashboard/>
                    </Route>
                    <Route path="/inbox">
                        <Inbox/>
                    </Route>
                    <Route path="/accounts">
                        <Accounts/>
                    </Route>
                    <Route path="/schPosts">
                        <SchedulePost/>
                    </Route>
                    <Route path="/communities">
                        <Communities/>
                    </Route>
                    <Route path="/analytics">
                        <Analytics/>
                    </Route>
                    <Route path="/fileFolder">
                        <FileFolders/>
                    </Route>
                    <Route path="/settings">
                        <Settings/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Routers;