import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from "react-router-dom";
import LoginUser from "../../Auth/loginAuth";
import "./Login.css"

class Login extends Component {
    constructor(){
        super();
        this.state = {
            email:"",
            password:"",
            error:""
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
            error:""
        })
    }
    submit = () => {
        let {email , password } = this.state;
        if (email === "") {
            this.setState({
                error: "Please enter email address...."
            })
            return false
        }
        if (password === "") {
            this.setState({
                error: "Please enter password...."
            })
            return false
        }
        let obj ={
            email,
            password
        }
        LoginUser(obj)
    }
    render() {
        return (
            <div className="LoginContainer">
                <div className="loginForm">
                    <div className="dha-div">
                        <p className="headingSignIn">Sign in with E-TENDER</p>
                        <p className="error">{this.state.error}</p>
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
                            onChange={this.handleChange}
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
                            name="password"
                            onChange={this.handleChange}
                            autoComplete="current-password"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <br />
                        <Button variant="contained" onClick={this.submit} className="btn-login" fullWidth={true}>
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
