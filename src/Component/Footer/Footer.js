import React, { Component } from 'react'
import "./Footer.css"
import { exportNamedDeclaration } from '@babel/types';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="contact-form">
                        <h4>Contact</h4>
                        <p style={{margin:"0px"}}>+971 50 35 986 37</p>
                        <a style={{padding:"0px" , textDecoration:"underline"}} href="#">admin@yousufgroup.com</a>
                        <p style={{margin:"0px"}}>U.A.E.</p>
                    </div>
                    <div className="footer-section">
                        <div>
                            <p className="listheading">Discover</p>
                            <ul className="list">
                                <li><a href="#">Open Tender!</a></li>
                                <li><a href="#">Bid Now!</a></li>
                                <li><a href="#">How Its Work?</a></li>
                            </ul>
                        </div>
                        <div>
                            <p className="listheading">Understand</p>
                            <ul className="list">
                                <li><a href="#">Carrers</a></li>
                                <li><a href="#">Our Story</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="social">
                        <a href="#" style={{borderRadius:"50px"}}><i class="fab fa-facebook"></i></a>
                        <a href="#" style={{borderRadius:"50px"}}><i class="fab fa-twitter"></i></a>
                        <a href="#" style={{borderRadius:"50px"}}><i class="fab fa-instagram"></i></a>
                        <a href="#" style={{borderRadius:"50px"}}><i class="fab fa-linkedin"></i></a>
                    </div>
                    <div>
                        <a style={{ fontSize: "18px" }} href="#">Terms</a>
                        <a style={{ fontSize: "18px" }} href="#">Privacy</a>
                    </div>
                    <span className="copyright"> &copy; E-Tender 2019. All Rights Reserved </span>
                </div>
            </div>
        )
    }
}
export default Footer