import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from "../history/history";
import Home from './Homepage/Home';
import Login from "./Login/Login";
import Signup from "./Signup/signup";
import Profile from "./Myprofile/Profile";
import Opentender from "./Opentender/opentender";
import Bidnow from "./Bidnow/Bidnow";
import Bids from "./Bids/Bids";

class Routes extends Component {
    render() {
        //all routes created here
        return (
            <div>
        
                <Router history={history}>
                    <Route exact path="/" component={Home} />
                    <Route path="/home/login" component={Login} />
                    <Route path="/home/signup" component={Signup} />
                    <Route path="/home/my_profile" component={Profile} />
                    <Route path="/home/open_tender" component={Opentender} />
                    <Route path="/home/bid_now" component={Bidnow} />
                    <Route path="/home/bids" component={Bids} />
                </Router>
            </div>
        )
    }
}
export default Routes