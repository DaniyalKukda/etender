import React, { Component } from 'react';
import Fbicon from 'react-icons/lib/fa/facebook';
import Twicon from 'react-icons/lib/fa/twitter';
import Inicon from 'react-icons/lib/fa/instagram';
import Linicon from 'react-icons/lib/fa/linkedin';
import { NavLink } from "react-router-dom"

import "./Footer.css"

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="contact-form">
                        <h4>Contact</h4>
                        <p style={{ margin: "0px" }}>+971 50 35 986 37</p>
                        <a style={{ padding: "0px", textDecoration: "underline", color: "#d3d3d3" }} href="#">admin@yousufgroup.com</a>
                        <p style={{ margin: "0px" }}>U.A.E.</p>
                    </div>
                    <div className="footer-section">
                        <div>
                            <p className="listheading">Discover</p>
                            <ul className="list">
                                <li><a className="links" href="#">Open Tender!</a></li>
                                <li><a className="links" href="#">Bid Now!</a></li>
                                <li><a className="links" href="#">How Its Work?</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="listheading">Understand</p>
                            <ul className="list">
                                <li><a className="links" href="#">Carrers</a></li>
                                <li><a className="links" href="#">Our Story</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social">
                        <a className="links" href="#" style={{ borderRadius: "50px" }}><Fbicon /></a>
                        <a className="links" href="#" style={{ borderRadius: "50px" }}><Twicon /> </a>
                        <a className="links" href="#" style={{ borderRadius: "50px" }}><Inicon /></a>
                        <a className="links" href="#" style={{ borderRadius: "50px" }}><Linicon /> </a>
                    </div>
                    <div className="tp">
                        <div className="tplinks">
                           <NavLink to="/home/TermsAndConditions" className="links" style={{ fontSize: "18px" }} href="#">Terms</NavLink>
                            <NavLink to="/home/PrivacyPolicy" className="links" style={{ fontSize: "18px" }} href="#">Privacy</NavLink>
                        </div>
                    </div>
                    <span className="copyright"> &copy; E-Tender 2019. All Rights Reserved </span>
                </div>
            </div>
        )
    }
}
export default Footer