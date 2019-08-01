import React, { Component } from 'react'
import AppBar from "../AppBar/Appbar"
import Footer from "../Footer/Footer"
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import firebase from "../../config/firebase";

import "./Contactus.css"

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
        allcountryArray: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"],
        email: "",
        phoneNumber: "",
        HelpYou: "",
        Description: "",
        Country: "",
        error: ""
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = () => {
        let { email, Country, phoneNumber, Description, HelpYou } = this.state
        if (email === "") {
            this.setState({
                error: "Enter your email"
            })
            return false
        }
        if (phoneNumber === "") {
            this.setState({
                error: "Enter your Phone Number"
            })
            return false
        }
        if (HelpYou === "") {
            this.setState({
                error: "Select What Can we Help you?"
            })
            return false
        }
        if (Description === "") {
            this.setState({
                error: "Enter your Description"
            })
            return false
        }
        if (Country === "") {
            this.setState({
                error: "Select your Country"
            })
            return false
        }
        this.setState({
            error: ""
        })
        let obj = {
            email,
            Country,
            phoneNumber,
            Description,
            HelpYou
        }
        firebase.database().ref("contact/").set(obj).then(() => {
            firebase.database().ref("contact/").on("value", (value) => {
                const data = value.val()
                console.log(data)
            })
        })

    }
    render() {
        let { email, Country, allcountryArray, phoneNumber, Description, HelpYou, error } = this.state
        return (
            <div>
                <div>
                    <AppBar />
                </div>
                <div className="Contact-us-Container">
                    <div className="Contact-us-main-div">
                        <div>
                            <h1 className="ContactHeading">Contact Us</h1>
                            <p className="error">{error}</p>
                        </div>
                        <form method="post" action="javascript:void(0)">
                            <div className="input-container">
                                <div>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Your email address <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={email} type="email" name="email" onChange={this.handleChange} required={true} id="bootstrap-input" />
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
                                    <FormControl>
                                        <InputLabel shrink htmlFor="customized-native-simple">What Can we Help you with? <span style={{ color: "red" }}>*</span></InputLabel>
                                        <NativeSelect
                                            name="HelpYou"
                                            value={HelpYou}
                                            onChange={this.handleChange}
                                            input={<BootstrapInput name="HelpYou" id="customized-native-simple" />}
                                        >
                                            < option selected value="" >
                                            </option >
                                            <option value="App Feedback">App Feedback</option>
                                            <option value="Feedback on Project">Feedback on Project</option>
                                            <option value="Feedback on Supplier/Bidder/User">Feedback on Supplier/Bidder/User</option>
                                            <option value="Myaccount">Myaccount</option>
                                            <option value="Referral and Promotions">Referral and Promotions</option>
                                            <option value="Others">Others</option>
                                        </NativeSelect>
                                    </FormControl>
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="bootstrap-input">
                                            Description <span style={{ color: "red" }}>*</span>
                                        </InputLabel>
                                        <BootstrapInput value={Description} name="Description" onChange={this.handleChange} multiline={true} rows={5} type="text" required={true} id="bootstrap-input" />
                                        <p className="country-code-para">Please enter the details of your request. A member of our support staff will respond ASAP.</p>
                                    </FormControl>
                                </div>
                                <div style={{ marginTop: "15px" }}>
                                    <FormControl>
                                        <InputLabel shrink htmlFor="customized-native-simple">Country <span style={{ color: "red" }}>*</span></InputLabel>
                                        <NativeSelect
                                            name="Country"
                                            value={Country}
                                            onChange={this.handleChange}
                                            input={<BootstrapInput name="Country" id="customized-native-simple" />}
                                        >
                                            < option selected value="" >
                                            </option >
                                            {allcountryArray.map((country) => {
                                                return <option value={country}>{country}</option>
                                            })}
                                        </NativeSelect>
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
