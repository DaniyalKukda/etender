import React, { Component } from 'react'
import Appbar from "../AppBar/Appbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux"
import Swal from "sweetalert2";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import "./opentender.css"
class Opentender extends Component {
    constructor() {
        super();
        this.state = {
            tenderNameList: ["Consultancy", "Construction", "Civil", "MEP", "Electrical", "Fire Fighting", "HVAC", "Plumbing", "ELV System", "Elevator", "Plumbing Contractor", "Tile & Interlock Contractor", "Plaster & Paint Contractor", "Steel Contractor", "Concret & Block Contractor", "Gypsum & Decor Contractor", "Fire rated Doors", "Wooden Doors", "Aluminum & Glass Work", "Central gas system", "other"],
            buildingType: ["Building", "Mall", "Villa", "Shade", "Hospital", "Leisure", "Airport"]
        }
    }
    render() {
        let { user } = this.props
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="openTenderContainer">
                    <div className="opentenderheading">
                        <h1>Open Tender</h1>
                    </div>
                    <div className="openTenderFeilds">
                        <div className="formDiv">
                            <div>
                                <p className="headingSignIn" style={{ fontSize: "24px", marginTop: "0px" }}>Create Tender</p>
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-rfqno-input"
                                    label="RFQ No"
                                    value={Math.floor(Math.random() * 10000)}
                                    type="number"
                                    name="RFQNO"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={true}
                                // onChange={this.handleChange}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Company Name"
                                    // className={classes.textField}
                                    value={user.companyName}
                                    type="text"
                                    name="companyName"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={true}
                                // onChange={this.handleChange}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Expertise"
                                    // className={classes.textField}
                                    value={user.expertise}
                                    type="text"
                                    name="expertise"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={true}
                                // onChange={this.handleChange}
                                />
                                <FormControl variant="filled">
                                    <InputLabel htmlFor="filled-age-native-simple">Tender Name</InputLabel>
                                    <Select
                                        // value={country}
                                        native
                                        name="tenderName"
                                        // disabled={toggle}
                                        // onChange={this.handleChange}
                                        input={<FilledInput name="tenderName" id="filled-age-native-simple" />}
                                    >
                                        <option value="" />
                                        {this.state.tenderNameList.map((e) => <option value={e}>{e}</option>)}
                                    </Select>
                                </FormControl>
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Description"
                                    // className={classes.textField}
                                    type="text"
                                    name="Description"
                                    margin="normal"
                                    variant="outlined"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                    placeholder="Enter Tender Description"
                                // onChange={this.handleChange}
                                />
                                <FormControl variant="filled">
                                    <InputLabel htmlFor="filled-age-native-simple">Building Type</InputLabel>
                                    <Select
                                        // value={country}
                                        native
                                        name="buildingType"
                                        // disabled={toggle}
                                        // onChange={this.handleChange}
                                        input={<FilledInput name="buildingType" id="filled-age-native-simple" />}
                                    >
                                        <option value="" />
                                        {this.state.buildingType.map((e) => <option value={e}>{e}</option>)}
                                    </Select>
                                </FormControl>
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="State"
                                    // className={classes.textField}
                                    type="text"
                                    name="state"
                                    margin="normal"
                                    variant="outlined"
                                // onChange={this.handleChange}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Plot No"
                                    // className={classes.textField}
                                    type="text"
                                    name="plotno"
                                    margin="normal"
                                    variant="outlined"
                                // onChange={this.handleChange}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Location"
                                    // className={classes.textField}
                                    type="text"
                                    name="location"
                                    margin="normal"
                                    variant="outlined"
                                // onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="date"
                                    label="Closing Date"
                                    type="date"
                                    // defaultValue="2017-05-24"
                                    // className={classes.textField}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ marginTop: "39px" }}
                                />
                                <p className="headingSignIn" style={{ fontSize: "18px", marginTop: "8px" }}>Attachments</p>
                                <div className="attach">
                                    <label className="labelfile">Engineering Drawings in PDF</label><br />
                                    <input
                                        required
                                        id="outlined-file"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            var img = document.getElementById("outlined-file").files[0]
                                            this.setState({
                                                file: img
                                            })
                                        }}
                                        name="engineeringdrawings"
                                    />
                                    <br />
                                    <label className="labelfile">Site Plan in PDF</label><br />
                                    <input
                                        required
                                        id="outlined-file"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            var img = document.getElementById("outlined-file").files[0]
                                            this.setState({
                                                file: img
                                            })
                                        }}
                                        name="siteplan"
                                    />
                                    <br />
                                    <label className="labelfile">Building Permit in PDF</label><br />
                                    <input
                                        required
                                        id="outlined-file"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            var img = document.getElementById("outlined-file").files[0]
                                            this.setState({
                                                file: img
                                            })
                                        }}
                                        name="buildingpermit"
                                    />
                                    <br />
                                    <label className="labelfile">Material and Specification in PDF</label><br />
                                    <input
                                        required
                                        id="outlined-file"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            var img = document.getElementById("outlined-file").files[0]
                                            this.setState({
                                                file: img
                                            })
                                        }}
                                        name="materialandspecification"
                                    />
                                    <br />
                                    <label className="labelfile">Other <span>(Optional)</span></label><br />
                                    <input
                                        required
                                        id="outlined-file"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            var img = document.getElementById("outlined-file").files[0]
                                            this.setState({
                                                file: img
                                            })
                                        }}
                                        name="other"
                                    />
                                    <br />
                                    <br />
                                    <Button variant="contained" onClick={() => Swal.fire({
                                        type: 'success',
                                        title: 'Open Tender',
                                        text: 'Tender Posted Successfully',
                                    })}
                                     className="btn-login" fullWidth={true}>
                                        Open Tender
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Footer />
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
export default connect(mapStateToProps, null)(Opentender)