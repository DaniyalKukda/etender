import React, { Component } from 'react';
import Navbar from "../AppBar/Appbar";
import Footer from "../Footer/Footer";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Bidicon from 'react-icons/lib/fa/plus-circle';
import Openicon from 'react-icons/lib/fa/dropbox';
import Searchicon from 'react-icons/lib/fa/search';
import Assesicon from 'react-icons/lib/fa/assistive-listening-systems';
import Handicon from 'react-icons/lib/fa/hand-pointer-o';
import Awardicon from 'react-icons/lib/fa/yelp';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import "./Home.css"
import { Button } from '@material-ui/core';
class Home extends Component {
    renderButton(textbtn, icon) {
        return (
            <NavLink className="navlink" to={this.props.user === null ? "/home/login"  : textbtn === "Open Tender" && "/home/open_tender" || "/home/bid_now"}><Button className="btn-bidnow-tender">{textbtn} &nbsp; {icon}</Button></NavLink>
            )
    }
    render() {
        return (
            <div>
                <Navbar />
                <section>
                    <div className="hero-image">
                        <div className="hero-text">
                            <h1 style={{ fontSize: "50px", margin: 0, fontFamily: "'Oswald', sans-serif" }}>Our Mission</h1>
                            <p style={{ fontSize: "20px", fontWeight: "600" }}>Simplify & improve the tender process for engineering.</p>
                        </div>
                    </div>
                    <div className="ourStory-Container">
                        <div className="HeadingDiv">
                            <h1 className="headingOurstory">Our Story</h1>
                            <p className="Ourstory-paragraph">E-Tender is an On-Demand Tender Marketplace for Middle-East & Africa.</p>
                        </div>
                        <div className="btn-div">
                            {this.renderButton("Bid Now!", <Bidicon />)}
                            {this.renderButton("Open Tender", <Openicon />)}
                        </div>
                    </div>
                    <hr className="line" />
                    <div className="ourStory-Container">
                        <div className="HeadingDiv">
                            <h1 className="headingOurstory bidding">Bidding Made Easy!</h1>
                        </div>
                        <div className="btn-div">
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Searchicon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Search" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Assesicon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Assess" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Bidicon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Bid Now!" />
                                </ListItem>
                            </List>
                            <div className="btndiv2">
                                {this.renderButton("Bid Now!", <Bidicon />)}
                            </div>
                        </div>
                    </div>
                    <hr className="line" />
                    <div className="ourStory-Container">
                        <div className="HeadingDiv">
                            <h1 className="headingOurstory">Tendering Made Easy!</h1>
                        </div>
                        <div className="btn-div" style={{ marginTop: "30px" }}>
                            <List>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Bidicon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Create" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Handicon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Select" />
                                </ListItem>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Awardicon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText primary="Award" />
                                </ListItem>
                            </List>
                            <div className="btndiv2">
                                {this.renderButton("Open Tender", <Openicon />)}
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
      user: state.authReducers.user
    })
  }
export default connect(mapStateToProps,null)(Home)