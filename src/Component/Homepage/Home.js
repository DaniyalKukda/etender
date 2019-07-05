import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import "./Home.css"
import { Button } from '@material-ui/core';
class Home extends Component {
    renderButton(textbtn, icon) {
        return (
            <Button className="btn-bidnow-tender">{textbtn} &nbsp; {icon}</Button>
        )
    }
    render() {
        return (
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
                        {this.renderButton("Bid Now!", <i class="fas fa-plus-circle"></i>)}
                        {this.renderButton("Open Tender", <i class="fas fa-box-open"></i>)}
                    </div>
                </div>
                <hr className="line" />
                <div className="ourStory-Container">
                    <div className="HeadingDiv">
                        <h1 className="headingOurstory">How its work?</h1>
                        <p className="Ourstory-paragraph">Tendering Made Easy!</p>
                    </div>
                    <div className="btn-div">
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <i class="fas fa-search"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Search" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <i class="fas fa-assistive-listening-systems"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Assess" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <i class="fas fa-plus-circle"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Bid Now!" />
                            </ListItem>
                        </List>
                        {this.renderButton("Bid Now!", <i class="fas fa-plus-circle"></i>)}
                    </div>
                </div>
                <hr className="line" />
                <div className="ourStory-Container">
                    <div className="HeadingDiv">
                        <h1 className="headingOurstory">Tendering Made Easy for Customers!</h1>
                    </div>
                    <div className="btn-div" style={{marginTop:"30px"}}>
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <i class="fas fa-search"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Create" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <i class="fas fa-assistive-listening-systems"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Select" />
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                    <i class="fas fa-plus-circle"></i>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary="Award" />
                            </ListItem>
                        </List>
                        {this.renderButton("Open Tender", <i class="fas fa-box-open"></i>)}
                    </div>
                </div>
            </section>
        )
    }
}
export default Home