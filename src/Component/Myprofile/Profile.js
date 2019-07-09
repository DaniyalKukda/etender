import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { updateUserData } from "../../Auth/signupAuth";
import { connect } from "react-redux"
import "./Profile.css"


class Profile extends Component {
    constructor(props) {
        super(props);
        let { user } = this.props
        this.state = {
            allcountryArray: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"],
            expertizeArray: ["Direct Owner", "Developer", "Real State", "Consultant", "Building Contractor", "Electrical Contractor", "MEP Contractor", "Low Voltage (ELV) Contractor", "Fire Fighting Contractor", "HVAC Contractor", "Plumbing Contractor", "Elevators Contractor", "Tiles & Interlock Contractor", "Plaster & Paint Contractor", "Steel Contractor", "Concret & Blocks Contractor", "Gypsum & Decor Contractor", "Furniture", "Fire Rated Doors", "Wooden Doors", "Almunium & glass work", "Central Gas System", "IT", "Automation"],
            fullName: user.fullName,
            email: user.email,
            companyName: user.companyName,
            mobileNumber: user.mobileNumber,
            trnNo: user.trnNo,
            file:"",
            tradeLN: user.tradeLN,
            country: user.country,
            state: user.state,
            expertise: user.expertise,
            error: "",
            Bankerror: "",
            bankName: "",
            bankBranch: "",
            accountName: "",
            accountNumber: "",
            bankLetter: "",
            toggle: true,
            loading: false,

        }
        this.handleChange = this.handleChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    //this method is used to set form data in state
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            error: "",
            Bankerror: "",
            [e.target.name]: e.target.value
        })
    }
    //this method is used to disable and un disable input feilds
    onToggle = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }
    //this method in used to create a user and validate feilds
    onSubmit = () => {
        let { fullName, email, companyName, mobileNumber, trnNo, file, tradeLN, country, state, expertise, bankBranch, bankLetter, bankName, accountName, accountNumber } = this.state;
        let obj = {
            fullName,
            email,
            companyName,
            mobileNumber,
            trnNo,
            file,
            tradeLN,
            country,
            state,
            expertise,
            bankName,
            bankBranch,
            bankLetter,
            accountName,
            accountNumber
        }
        this.setState({ loading: true })
        try {
            if (fullName === "") {
                this.setState({
                    error: "Please enter your Full Name...."
                })
                return false
            }
            if (fullName.length <= 2 || fullName.length > 20) {
                this.setState({
                    error: "Enter valid name...."
                })
                return false
            }
            if (!isNaN(fullName)) {
                this.setState({
                    error: "Name containe only Alphabets...."
                })
                return false
            }
            if (email === "") {
                this.setState({
                    error: "Please enter email address...."
                })
                return false
            }
            var reg = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
            if (reg.test(email) === false) {
                this.setState({
                    error: "Please enter your valid email...."
                })
                return false
            }
            if (companyName === "") {
                this.setState({
                    error: "Please enter your Company Name...."
                })
                return false
            }

            if (mobileNumber === "") {
                this.setState({
                    error: "Enter your Mobile Number"
                })
                return false
            }
            if (mobileNumber.length !== 11) {
                this.setState({
                    error: "Enter Valid Mobile Number"
                })
                return false
            }
            if (tradeLN === "") {
                this.setState({
                    error: "Please enter your Trade licence number...."
                })
                return false
            }
            if (trnNo === "") {
                this.setState({
                    error: "Please enter your TRN Number...."
                })
                return false
            }
            if (country === "") {
                this.setState({
                    error: "Please Select your Country Name...."
                })
                return false
            }
            if (state === "") {
                this.setState({
                    error: "Please enter your state...."
                })
                return false
            }
            if (expertise === "") {
                this.setState({
                    error: "Please Select your Expertise...."
                })
                return false
            }
            if (bankName === "") {
                this.setState({
                    Bankerror: "Enter your bank name...."
                })
                return false
            }
            if (bankBranch === "") {
                this.setState({
                    Bankerror: "Enter your bank branch name...."
                })
                return false
            }
            if (accountName === "") {
                this.setState({
                    Bankerror: "Enter your bank account name...."
                })
                return false
            }
            if (accountNumber === "") {
                this.setState({
                    Bankerror: "Enter your bank account number...."
                })
                return false
            }
            if (bankLetter === "") {
                this.setState({
                    Bankerror: "Upload your bank Letter...."
                })
                return false
            }
            updateUserData(obj, this.props)
        } catch (err) {
            console.log(err.message)
        } finally {
            setTimeout(() => {
                this.setState({ loading: false })
            }, 5000)
        }
    }
    render() {
        let { fullName, file, email, companyName, mobileNumber, trnNo, tradeLN, country, state, expertise, toggle } = this.state;
        return (
            <div className="SignupContainer">
                <div className="MyprofileForm">
                    <div className="Header-div">
                        <p className="headingSignIn">My Profile</p>
                        <Button variant="contained" onClick={this.onToggle} className="btn-login">
                            Update Profile
                    </Button>
                    </div>
                    <p className="error">{this.state.error}</p>
                    <form>
                        <TextField
                            required
                            id="outlined-name-input"
                            label="Full Name"
                            // className={classes.textField}
                            fullWidth={true}
                            type="text"
                            name="fullName"
                            margin="normal"
                            variant="outlined"
                            // error={true}
                            value={fullName}
                            disabled={toggle}
                            onChange={this.handleChange}
                        />
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
                            disabled={toggle}
                            value={email}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            id="outlined-name-input"
                            label="Company Name"
                            // className={classes.textField}
                            value={companyName}
                            fullWidth={true}
                            type="text"
                            name="companyName"
                            margin="normal"
                            variant="outlined"
                            disabled={toggle}
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            id="outlined-number"
                            value={mobileNumber}
                            label="Mobile Phone"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            disabled={toggle}
                            onChange={this.handleChange}
                            name="mobileNumber"
                        />
                        <TextField
                            required
                            id="outlined-file"
                            label="Trade Licence Copy"
                            type="file"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            disabled={toggle}
                            multiple
                            onChange={() => {
                                var img = document.getElementById("outlined-file").files[0]
                                this.setState({
                                    file: img
                                })
                                // console.log(img)
                            }}
                            name="file"
                        />
                        <TextField
                            required
                            value={tradeLN}
                            id="outlined-number"
                            label="Trade Licence Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            disabled={toggle}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            onChange={this.handleChange}
                            name="tradeLN"
                        />
                        <TextField
                            required
                            value={trnNo}
                            id="outlined-number"
                            label="TRN No"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            disabled={toggle}
                            fullWidth={true}
                            name="trnNo"
                            onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <FormControl variant="filled" fullWidth={true}>
                            <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
                            <Select
                                value={country}
                                native
                                name="country"
                                disabled={toggle}
                                onChange={this.handleChange}
                                input={<FilledInput name="country" id="filled-age-native-simple" />}
                            >
                                <option value="" />
                                {this.state.allcountryArray.map((e) => <option value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <TextField
                            required
                            id="outlined-state-input"
                            value={state}
                            label="State"
                            // className={classes.textField}
                            fullWidth={true}
                            type="text"
                            name="state"
                            margin="normal"
                            disabled={toggle}
                            name="state"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <FormControl variant="filled" fullWidth={true}>
                            <InputLabel htmlFor="filled-age-native-simple">Expertise</InputLabel>
                            <Select
                                native
                                name="expertise"
                                onChange={this.handleChange}
                                disabled={toggle}
                                value={expertise}
                                input={<FilledInput name="Expertise" id="filled-age-native-simple" />}
                            >
                                <option value="" />
                                {this.state.expertizeArray.map((e) => <option value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <p className="headingSignIn">Bank Details</p>
                        <p className="error">{this.state.Bankerror}</p>
                        <TextField
                            required
                            id="outlined-bank-name-input"
                            label="Name of the Bank"
                            fullWidth={true}
                            type="text"
                            name="bankName"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            id="outlined-bank-name-input"
                            label="Branch"
                            fullWidth={true}
                            type="text"
                            name="bankBranch"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />

                        <TextField
                            required
                            id="outlined-bank-name-input"
                            label="Account Name"
                            fullWidth={true}
                            type="text"
                            name="accountName"
                            margin="normal"
                            variant="outlined"
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            id="outlined-number"
                            label="Account Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            name="accountNumber"
                            onChange={this.handleChange}
                        />
                        <TextField
                            required
                            id="outlined-file-letter"
                            label="Bank Letter"
                            type="file"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                            multiple
                            onChange={() => {
                                var img2 = document.getElementById("outlined-file-letter").files[0]
                                this.setState({
                                    bankLetter: img2
                                })
                                // console.log(img)
                            }}
                            name="bankLetter"
                        />
                        <br />
                        <br />
                        <Button variant="contained" onClick={this.onSubmit} className="btn-login" fullWidth={true}>
                            Send For Approval
                        </Button>
                    </form>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        {this.state.loading && <img style={{ textAlign: "center" }} src={require("../../assets/Images/loading.gif")} height="70px" width="70px" />}
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
export default connect(mapStateToProps, null)(Profile)
