import React, { Component } from 'react'
import Appbar from "../AppBar/Appbar";
import { connect } from "react-redux"
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
                            </div>
                            <div style={{marginTop:"50px"}}>
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

                            </div>
                        </div>
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
export default connect(mapStateToProps, null)(Opentender)