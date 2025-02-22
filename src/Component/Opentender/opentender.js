import React, { Component } from 'react'
import Appbar from "../AppBar/Appbar";
import Footer from "../Footer/Footer";
import { connect } from "react-redux"
import Swal from "sweetalert2";
import firebase from '../../config/firebase';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import saveData from "./method"
import "./opentender.css"

class Opentender extends Component {
    constructor(props) {
        super(props);
        let { user } = this.props
        this.state = {
            tenderNameList: ["Consultancy", "Construction", "Civil", "MEP", "Electrical", "Fire Fighting", "HVAC", "Plumbing", "ELV System", "Elevator", "Plumbing Contractor", "Tile & Interlock Contractor", "Plaster & Paint Contractor", "Steel Contractor", "Concret & Block Contractor", "Gypsum & Decor Contractor", "Fire rated Doors", "Wooden Doors", "Aluminum & Glass Work", "Central gas system", "other"],
            buildingTypeList: ["Building", "Mall", "Villa", "Shade", "Hospital", "Leisure", "Airport"],
            RFQNO: Math.floor(Math.random() * 10000),
            companyName: user.companyName,
            expertise: user.expertise,
            error: "",
            tenderName: "",
            Description: "",
            buildingType: "",
            state: "",
            plotno: "",
            location: "",
            selectedDate: "",
            other: 0,
            engineeringdrawings: "",
            siteplan: "",
            buildingPermit: "",
            materialAndSpecification: "",
            loading: false,
            uploading: ""
        }
    }

    // saveData = (obj) => {
    //     firebase.database().ref("openTender/" + this.props.user.uid).push(obj).then((success) => {

    //         Swal.fire({
    //             type: 'success',
    //             title: 'Open Tender',
    //             text: 'Tender is Successfully Posted...',
    //         })

    //     }).catch((err) => {
    //         console.error(err.message);
    //         console.log(err);
    //         Swal.fire({
    //             type: 'error',
    //             title: 'Oops...',
    //             text: err.message,
    //         })
    //     })
    // }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleDate = (e) => {
        this.setState({
            selectedDate: e.target.value
        })
    }
    handleSubmit = async () => {
        let { engineeringdrawings, siteplan, buildingPermit, materialAndSpecification, RFQNO, companyName, expertise, tenderName, Description, plotno, state, location, buildingType, selectedDate } = this.state;
        
        if (tenderName === "") {
            this.setState({
                error: "Please Select Tender Name"
            })
            return false
        }
        if (Description === "") {
            this.setState({
                error: "Please Enter Description"
            })
            return false
        }
        if (buildingType === "") {
            this.setState({
                error: "Please Select Building Type"
            })
            return false
        }
        if (state === "") {
            this.setState({
                error: "Please Enter State"
            })
            return false
        }
        if (plotno === "") {
            this.setState({
                error: "Please Enter Plot Number"
            })
            return false
        }
        if (location === "") {
            this.setState({
                error: "Please Enter Location"
            })
            return false
        }
        if (selectedDate === "") {
            this.setState({
                error: "Please Select Closing date"
            })
            return false
        }

        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;
        if (today > selectedDate) {
            this.setState({
                error: "invalid date selected"
            })
            return false
        }
        if (engineeringdrawings === "") {
            this.setState({
                error: "select Engineering Drawing in PDF"
            })
            return false
        }
        if (siteplan === "") {
            this.setState({
                error: "select Site Plan in PDF"
            })
            return false
        }
        if (buildingPermit === "") {
            this.setState({
                error: "select Building Permit Drawing in PDF"
            })
            return false
        }
        if (materialAndSpecification === "") {
            this.setState({
                error: "select Material and Specification Drawing in PDF"
            })
            return false
        }
        this.setState({
            loading:true
        })
        let obj = {
            RFQNO,
            companyName,
            expertise,
            tenderName,
            Description,
            plotno,
            state,
            location,
            buildingType,
            closingDate: selectedDate,
            engineeringdrawings,
            siteplan,
            buildingPermit,
            materialAndSpecification,
            uid: this.props.user.uid,
            status: "unassigned"
        }
        saveData(obj).then((data)=>{
            console.log(data)
            this.setState({
                loading: false,
                engineeringdrawings:"",
                siteplan:"",
                buildingPermit:"",
                materialAndSpecification:"",
                materialAndSpecification:"",
                tenderName:"",
                Description:"",
                plotno:"",
                location:"",
                state:"",
                buildingType:"",
                selectedDate:""
            })
        })
    }
    render() {
        let { engineeringdrawings, siteplan, buildingPermit, materialAndSpecification, RFQNO, companyName, expertise, tenderName, Description, plotno, state, location, buildingType, selectedDate, engineeringdrawingsURL, siteplanURL, buildingPermitURL, otherURL, materialAndSpecificationURL, error } = this.state
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
                                <p className="headingSignIn" style={{ fontSize: "24px", marginBottom: "0px", marginTop: "0px" }}>Create Tender</p>
                                <p className="error" style={{ fontSize: "18px", marginTop: "1px" }}>{error}</p>
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-rfqno-input"
                                    label="RFQ No"
                                    value={RFQNO}
                                    type="number"
                                    name="RFQNO"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={true}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Company Name"
                                    value={companyName}
                                    type="text"
                                    name="companyName"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={true}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Expertise"
                                    // className={classes.textField}
                                    value={expertise}
                                    type="text"
                                    name="expertise"
                                    margin="normal"
                                    variant="outlined"
                                    disabled={true}
                                />
                                <FormControl variant="filled">
                                    <InputLabel htmlFor="filled-age-native-simple">Tender Name</InputLabel>
                                    <Select
                                        native
                                        name="tenderName"
                                        value={tenderName}
                                        onChange={this.handleChange}
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
                                    value={Description}
                                    type="text"
                                    name="Description"
                                    margin="normal"
                                    variant="outlined"
                                    multiline={true}
                                    rows={2}
                                    rowsMax={4}
                                    placeholder="Enter Tender Description"
                                    onChange={this.handleChange}
                                />
                                <FormControl variant="filled">
                                    <InputLabel htmlFor="filled-age-native-simple">Building Type</InputLabel>
                                    <Select
                                        native
                                        name="buildingType"
                                        value={buildingType}
                                        onChange={this.handleChange}
                                        input={<FilledInput name="buildingType" id="filled-age-native-simple" />}
                                    >
                                        <option value="" />
                                        {this.state.buildingTypeList.map((e) => <option value={e}>{e}</option>)}
                                    </Select>
                                </FormControl>
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    value={state}
                                    label="State"
                                    type="text"
                                    name="state"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Plot No"
                                    type="number"
                                    value={plotno}
                                    name="plotno"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                />
                                <TextField
                                    required
                                    style={{ display: "block" }}
                                    id="outlined-name-input"
                                    label="Location"
                                    value={location}
                                    type="text"
                                    name="location"
                                    margin="normal"
                                    variant="outlined"
                                    onChange={this.handleChange}
                                />
                            </div>
                            <div>
                                <TextField
                                    id="date"
                                    label="Closing Date"
                                    type="date"
                                    value={selectedDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    style={{ marginTop: "39px" }}
                                    onChange={this.handleDate}
                                />
                                <p className="headingSignIn" style={{ fontSize: "18px", marginTop: "8px" }}>Attachments</p>
                                <div className="attach">
                                    <label className="labelfile">Engineering Drawings in PDF</label><br />
                                    <input
                                        required
                                        id="engineeringdrawings"
                                        type="file"
                                        accept="application/pdf"
                                        name="engineeringdrawings"
                                        onChange={() => {
                                            let img = document.getElementById("engineeringdrawings").files[0]
                                            this.setState({
                                                engineeringdrawings: img
                                            })
                                        }}
                                    />
                                    <br />
                                    <label className="labelfile">Site Plan in PDF</label><br />
                                    <input
                                        required
                                        id="siteplan"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            let img = document.getElementById("siteplan").files[0]
                                            this.setState({
                                                siteplan: img,
                                            })
                                        }}
                                        name="siteplanURL"
                                    />
                                    <br />
                                    <label className="labelfile">Building Permit in PDF</label><br />
                                    <input
                                        required
                                        id="buildingPermit"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            let img = document.getElementById("buildingPermit").files[0]
                                            this.setState({
                                                buildingPermit: img,
                                            })
                                        }}
                                        name="builfingPermitURL"
                                    />
                                    <br />
                                    <label className="labelfile">Material and Specification in PDF</label><br />
                                    <input
                                        required
                                        id="materialAndSpecification"
                                        type="file"
                                        accept="application/pdf"
                                        onChange={() => {
                                            let img = document.getElementById("materialAndSpecification").files[0]
                                            this.setState({
                                                materialAndSpecification: img,
                                            })
                                        }}
                                        name="materialAndSpecificationURL"
                                    />
                                    <br />
                                    <br />
                                    <Button variant="contained" onClick={this.handleSubmit}
                                        className="btn-login" fullWidth={true}>
                                        Open Tender
                                    </Button>
                                    {/* <p className="error" id="upl">"please wait"</p> */}
                                    {this.state.loading && <img style={{ alignSelf: "center" }} src={require("../../assets/Images/loading.gif")} height="70px" width="70px" />}

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