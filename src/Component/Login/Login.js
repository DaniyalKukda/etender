import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from "react-router-dom";

import "./Login.css"

class Login extends Component {
    render() {
        return (
            <div className="LoginContainer">
                <div className="loginForm">
                    <div className="dha-div">
                        <p className="headingSignIn">Sign in with E-TENDER</p>
                    </div>
                    <form>
                        <TextField
                        required
                            id="outlined-email-input"
                            label="Email"
                            // className={classes.textField}
                            fullWidth={true}
                            type="email"
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                        required
                            id="outlined-password-input"
                            label="Password"
                            // className={classes.textField}
                            fullWidth={true}
                            type="password"
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <br />
                        <Button variant="contained" className="btn-login" fullWidth={true}>
                            Login
                        </Button>
                    </form>
                    <div className="dha-div">
                        <p>Dont't have an account? <NavLink className="navlink" to="/home/signup"><span style={{ fontWeight: 550, fontSize: 17, cursor: "pointer" }}>Signup</span></NavLink></p>
                        <p className="fg-password">forgot password ?</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Login
