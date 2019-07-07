import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { NavLink } from "react-router-dom"
import "./signup.css"

class Signup extends Component {
    state = {
        allcountryArray: ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica", "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina", "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic", "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo", "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)", "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia", "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of", "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of", "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon", "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic", "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)", "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"],
        expertizeArray: ["Direct Owner", "Developer", "Real State", "Consultant", "Building Contractor", "Electrical Contractor", "MEP Contractor", "Low Voltage (ELV) Contractor", "Fire Fighting Contractor", "HVAC Contractor", "Plumbing Contractor", "Elevators Contractor", "Tiles & Interlock Contractor", "Plaster & Paint Contractor", "Steel Contractor", "Concret & Blocks Contractor", "Gypsum & Decor Contractor", "Furniture", "Fire Rated Doors", "Wooden Doors", "Almunium & glass work", "Central Gas System", "IT", "Automation"]
    }
    render() {
        return (
            <div className="SignupContainer">
                <div className="SignupForm">
                    <div className="dha-div">
                        <p className="headingSignIn">Create Account!</p>
                    </div>
                    <form>
                        <TextField
                            required
                            id="outlined-name-input"
                            label="Full Name"
                            // className={classes.textField}
                            fullWidth={true}
                            type="text"
                            name="fullname"
                            margin="normal"
                            variant="outlined"
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
                        />
                        <TextField
                            required
                            id="outlined-name-input"
                            label="Company Name"
                            // className={classes.textField}
                            fullWidth={true}
                            type="text"
                            name="companyName"
                            margin="normal"
                            variant="outlined"
                        />
                        <TextField
                            required
                            id="outlined-number"
                            label="Mobile Phone"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
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
                            multiple
                        />
                        <TextField
                            required
                            id="outlined-number"
                            label="Trade Licence Number"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                        />
                        <TextField
                            required
                            id="outlined-number"
                            label="TRN No"
                            type="number"
                            InputLabelProps={{
                                shrink: true,
                            }}
                            margin="normal"
                            variant="outlined"
                            fullWidth={true}
                        />

                        <TextField
                            required
                            id="outlined-password-input"
                            label="Password"
                            // className={classes.textField}
                            fullWidth={true}
                            type="password"
                            margin="normal"
                            variant="outlined"
                        />
                        <br />
                        <br />
                        <FormControl variant="filled" fullWidth={true}>
                            <InputLabel htmlFor="filled-age-native-simple">Country</InputLabel>
                            <Select
                                native
                                // value={state.age}
                                // onChange={handleChange('age')}
                                input={<FilledInput name="country" id="filled-age-native-simple" />}
                            >
                                <option value="" />
                                {this.state.allcountryArray.map((e) => <option value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <TextField
                            required
                            id="outlined-state-input"
                            label="State"
                            // className={classes.textField}
                            fullWidth={true}
                            type="text"
                            name="state"
                            margin="normal"
                            variant="outlined"
                        />
                        <FormControl variant="filled" fullWidth={true}>
                            <InputLabel htmlFor="filled-age-native-simple">Expertise</InputLabel>
                            <Select
                                native
                                // value={state.age}
                                // onChange={handleChange('age')}
                                input={<FilledInput name="Expertise" id="filled-age-native-simple" />}
                            >
                                <option value="" />
                                {this.state.expertizeArray.map((e) => <option value={e}>{e}</option>)}
                            </Select>
                        </FormControl>
                        <br />
                        <br />

                        <Button variant="contained" className="btn-login" fullWidth={true}>
                            Create Account
                        </Button>
                    </form>
                    <div className="dha-div">
                        <p>Already Have an Account ?<NavLink className="navlink" to="/home/login"><span style={{ fontWeight: 550, fontSize: 17, cursor: "pointer" }}>Login</span></NavLink></p>
                        <p className="fg-password">forgot password ?</p>
                    </div>
                </div>
            </div>
        )
    }
}
export default Signup
