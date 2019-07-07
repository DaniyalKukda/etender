import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import history from "../history/history";
import Home from './Homepage/Home';
import Login from "./Login/Login";
import Signup from "./Signup/signup";

class PostComponent extends Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Route exact path="/" component={Home} />
                    <Route path="/home/login" component={Login} />
                    <Route path="/home/signup" component={Signup} />
                </Router>
            </div>
        )
    }
}
export default PostComponent