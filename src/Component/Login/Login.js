import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { NavLink } from "react-router-dom";
import { forgotPassword, LoginUser } from "../../Auth/loginAuth";
import { connect } from "react-redux";
import { updateUser } from '../../store/action/action';
import "./Login.css"

class Login extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            error: "",
            loading: false,
            resetPass: false
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
            error: ""
        })
    }
    submit = () => {
        let { email, password, loading } = this.state;
        this.setState({
            loading: true
        })
        try {

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
            let obj = {
                email,
                password
            }
            LoginUser(obj).then((data) => {
                if (data.verification) {
                    this.props.updateUser(data)
                }
                data.verification ?
                    this.props.history.push("/")
                    : this.props.history.push("/home/verification")
            }).catch((err) => {
                console.log(err.message)
            })
        } catch (err) {
            alert(err.message)
        } finally {
            setTimeout(() => {
                this.setState({
                    loading: false
                })
            }, 5000)
        }
    }
    resetPassword = () => {
        this.setState({
            resetPass: true
        })
    }
    resetEmail = () => {
        let { email } = this.state
        if (email === "") {
            this.setState({
                error: "Please enter email address...."
            })
            return false
        }
        forgotPassword(email).then(() => {
            this.setState({
                resetPass: false
            })
        })
    }
    componentDidMount() {
        let user = this.props.user
        if (user) {
            this.props.history.push('/')
        }
    }
    render() {
        let { resetPass } = this.state
        return (
            <div className="LoginContainer">
                <div className="loginForm">
                    <div className="dha-div">
                        {resetPass ? <p className="headingSignIn">Enter Email for Reset Password</p> : <p className="headingSignIn">Sign in with E-TENDER</p>}
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
                        {
                            !resetPass ?
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
                                : null
                        }
                        <br />
                        <br />
                        {
                            !resetPass ? <Button variant="contained" onClick={this.submit} className="btn-login" fullWidth={true}>
                                Login
                        </Button> : <Button variant="contained" onClick={this.resetEmail} className="btn-login" fullWidth={true}>
                                    Send email
                        </Button>
                        }
                    </form>
                    <div className="dha-div">
                        <p>Dont't have an account? <NavLink className="navlink" to="/home/signup"><span style={{ fontWeight: 550, fontSize: 17, cursor: "pointer" }}>Signup</span></NavLink></p>
                        {resetPass ? <p className="fg-password" onClick={() => this.setState({ resetPass: false, error: "" })}>Go Back</p> : <p className="fg-password" onClick={this.resetPassword}>forgot password ?</p>}
                        {this.state.loading && <img src={require("../../assets/Images/loading.gif")} height="70px" width="70px" />}
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        user: state.authReducers.user
    })
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateUser: (user) => dispatch(updateUser(user))
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(Login)