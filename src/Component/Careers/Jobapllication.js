import React, { Component } from 'react'
import AppBar from "../AppBar/Appbar"
import Footer from "../Footer/Footer"
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import Uploadicon from 'react-icons/fa/upload';
import Post from "./jobapplicationMethod";
import './Jobapllication.css'

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderColor: "#1F9947",
        },
    },
}))(InputBase);

class ContactUs extends Component {
    state = {
        fullName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        resume:"",
        linkedInProfile:"",
        error: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {
        let { email, fullName, phoneNumber, lastName, resume , linkedInProfile} = this.state
        if (fullName === "") {
            this.setState({
                error: "Enter your Full Name"
            })
            return false
        }
        if (lastName === "") {
            this.setState({
                error: "Enter your Last Name"
            })
            return false
        }
        if (email === "") {
            this.setState({
                error: "Enter your Email"
            })
            return false
        }
        if (phoneNumber === "") {
            this.setState({
                error: "Enter your Phone Number"
            })
            return false
        }
        if (resume === "") {
            this.setState({
                error: "Upload your CV / Resume"
            })
            return false
        }
        if (linkedInProfile === "") {
            this.setState({
                error: "Enter your Linked In Profile URL"
            })
            return false
        }
        this.setState({
            error: ""
        })
        let obj = {
            fullName,
            lastName,
            email,
            resume,
            linkedInProfile,
            jobTitle: this.props.match.params.title
        }
        Post(obj,this.props)

    }
    render() {
        let { email, fullName, lastName, phoneNumber, error , linkedInProfile} = this.state
        return (
            <div>
                <div>
                    <AppBar />
                </div>
                <div className="Job-Application-Container">
                    <div className="Job-Application-main-div">
                        <div>
                            <h1 className="Job-ApplicationHeading">Apply for this Job</h1>
                            <p className="error">{error}</p>
                        </div>
                        <br />
                        <form method="post" action="javascript:void(0)">
                            <div className="input-container">
                                <div>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Full Name <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={fullName} type="text" name="fullName" onChange={this.handleChange} required={true} id="bootstrap-input" />
                                    </FormControl>
                                </div>
                                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Last Name <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={lastName} style={{ width: "210px" }} type="text" name="lastName" onChange={this.handleChange} required={true} id="bootstrap-input" />
                                    </FormControl>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Email <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={email} style={{ width: "210px" }} value={email} type="email" name="email" onChange={this.handleChange} required={true} id="bootstrap-input" />
                                    </FormControl>
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Phone Number <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={phoneNumber} type="number" required={true} id="bootstrap-input" name="phoneNumber" onChange={this.handleChange} />
                                        <p className="country-code-para">Please include country code</p>
                                    </FormControl>
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <input
                                        required
                                        accept="application/pdf"
                                        id="contained-button-file"
                                        multiple
                                        type="file"
                                        style={{ display: "none" }}
                                        name="resume"
                                        onChange={() => {
                                            let img = document.getElementById("contained-button-file").files[0]
                                            this.setState({
                                                resume: img
                                            })
                                        }}
                                    />
                                    <label htmlFor="contained-button-file">
                                        <Button variant="contained" component="span">
                                            Resume/CV &nbsp; <Uploadicon />
                                        </Button>
                                    </label>
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                        LinkedIn Profile <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={linkedInProfile} type="text" required={true} id="bootstrap-input" name="linkedInProfile" onChange={this.handleChange} />
                                    </FormControl>
                                </div>
                                <div style={{ marginTop: "25px" }}>
                                    <Button onClick={this.handleSubmit} type="submit" variant="contained" className="btn-login">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default ContactUs
