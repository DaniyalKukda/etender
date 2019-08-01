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
import MyOpenTenders from "./Mytenders/Mytenders";
import MyOpenTenderStaus from "./MyOpenTendersStatus/MyOpenTenderStatus";
import Timeline from "./Timeline/Timeline";
import Success from "./Success_Payment/Success";
import SuccessBid from "./Success_Payment/SuccessBid";
import Fail from "./Fail_payment/Fail";
import PrivacyPolicy from "./Privacy_Policy/PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";
import Contact from "./ContactUs/Contactus";


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
                    <Route path="/home/my_tenders" component={MyOpenTenders} />
                    <Route path="/home/myOpenTenderStatus:rfq" component={MyOpenTenderStaus} />
                    <Route path="/home/timeline:rfq" component={Timeline} />
                    <Route path="/home/payment_success" component={Success} />
                    <Route path="/home/payment_fail" component={Fail} />
                    <Route path="/home/bid_payment_success:rfq" component={SuccessBid} />
                    <Route path="/home/PrivacyPolicy" component={PrivacyPolicy} />
                    <Route path="/home/TermsAndConditions" component={TermsAndConditions} />
                    <Route path="/home/ContactUs" component={Contact} />
                </Router>
            </div>
        )
    }
}
export default Routes