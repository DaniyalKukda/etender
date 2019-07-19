import React, { Component } from 'react'
import Appbar from "../AppBar/Appbar";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../config/firebase";
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import Swal from "sweetalert2";
import "./Mytenders.css"

class Myopentenders extends Component {
    constructor() {
        super()
        this.state = {
            loading2: true,
            data2: []
        }
    }
    fetchTenders = () => {
        let uid = this.props.user.uid;
        firebase.database().ref("openTender/" + uid).on("value", (value) => {
            let arr = value.val();
            let data = [];
            for (var key in arr) {
                data.push(arr[key])
            }
            this.setState({
                data,
                loading2: false
            })
        })
    }
    fetchBids = () => {
        let uid = this.props.user.uid;
        firebase.database().ref("bidnow/" + uid).on("value", (value) => {
            let arr = value.val();
            let data2 = [];
            for (var key in arr) {
                data2.push(arr[key])
            }
            this.setState({
                data2,
                loading2: false
            })
        })
    }
    handleAssign(e,RFQ){
        let value = e.target.value;
        if(value === "Assigned"){
            this.props.history.push(`/home/myOpenTenderStatus${RFQ}`)
            return true
        }else if(value === "Hold"){
            let uid = this.props.user.uid;
            let getTender = firebase.database().ref("openTender/" + uid);
            getTender.once("value",(vale) => {
                let data = vale.val();
                for(var key in data){
                    if(data[key].RFQNO === RFQ){
                       getTender.child(key).update({"status" : "Hold"}).then((se) => {
                            let getBidnow = firebase.database().ref("bidnow/");
                            getBidnow.once("value",(va) => {
                                let bid = va.val();
                                for(var key in bid){
                                    for(var key2 in bid[key]){
                                        if(bid[key][key2].RFQNO === RFQ){
                                            getBidnow.child(key+"/"+key2).update({"status" : "Hold"}).then((hogya) => {
                                                Swal.fire({
                                                    type: 'success',
                                                    title: 'Hold',
                                                    text: 'Successfully Hold Tender...',
                                                })
                                            })
                                        }
                                    }
                                }
                            })
                        })
                    }
                }
            })

        }else if(value === "Cancel"){
            let uid = this.props.user.uid;
            let getTender = firebase.database().ref("openTender/" + uid);
            getTender.once("value",(vale) => {
                let data = vale.val();
                for(var key in data){
                    if(data[key].RFQNO === RFQ){
                       getTender.child(key).update({"status" : "Cancel"}).then((se) => {
                            let getBidnow = firebase.database().ref("bidnow/");
                            getBidnow.once("value",(va) => {
                                let bid = va.val();
                                for(var key in bid){
                                    for(var key2 in bid[key]){
                                        if(bid[key][key2].RFQNO === RFQ){
                                            getBidnow.child(key+"/"+key2).update({"status" : "Cancel"}).then((hogya) => {
                                                Swal.fire({
                                                    type: 'success',
                                                    title: 'Cancel',
                                                    text: 'Successfully Cancel Tender...',
                                                })
                                            })
                                        }
                                    }
                                }
                            })
                        })
                    }
                }
            })

        }
    }
    componentDidMount() {
        this.fetchTenders()
        this.fetchBids()
    }
    render() {
        let { data, data2 } = this.state
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="MyTendersContainer">
                    <div className="MyTendersheading">
                        <h1>My Tenders</h1>
                    </div>
                    <div className="MyTendersFeilds">
                        <h2>1. My Open Tenders</h2>
                        {this.state.loading2 ? <img src={require("../../assets/Images/loading2.gif")} height="250" width="270" /> : <div className="tablecontainer">
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>RFQ No</TableCell>
                                            <TableCell>Tender Name</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Building Type</TableCell>
                                            <TableCell>State</TableCell>
                                            <TableCell>Closing Date</TableCell>
                                            <TableCell>Attachments</TableCell>
                                            <TableCell>Timeline</TableCell>
                                            <TableCell>Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {data && data.map(row => (
                                            <TableRow key={row.RFQNO}>
                                                <TableCell component="th" scope="row">
                                                    {row.RFQNO}
                                                </TableCell>
                                                <TableCell>{row.tenderName}</TableCell>
                                                <TableCell>{row.Description}</TableCell>
                                                <TableCell>{row.buildingType}</TableCell>
                                                <TableCell>{row.state}</TableCell>
                                                <TableCell>{row.closingDate}</TableCell>
                                                <TableCell><ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
                                                    <li><a href={row.engineeringdrawingsURL} target="blank">Engineering Drawing</a></li>
                                                    <li><a href={row.buildingPermitURL} target="blank">Building Permit</a></li>
                                                    <li><a href={row.materialAndSpecificationURL} target="blank">Material&Specification</a></li>
                                                    <li><a href={row.siteplanURL} target="blank">Site Plan</a></li>
                                                    {row.otherURL !== "" ? <li><a href={row.otherURL} target="blank">Other</a></li> : null}

                                                </ul></TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>
                                                        <select
                                                            name="status"
                                                            onChange={(e) => this.handleAssign(e,row.RFQNO) }
                                                        >
                                                            <option selected value={row.status}>{row.status}</option>
                                                            <option value="Assigned">Assigned</option>
                                                            <option value="Hold">Hold</option>
                                                            <option value="Cancel">Cancel</option>
                                                        </select>
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                        }
                        <h2>2. My Bids</h2>
                        {this.state.loading2 ? <img src={require("../../assets/Images/loading2.gif")} height="250" width="270" /> : <div className="tablecontainer">
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>RFQ No</TableCell>
                                            <TableCell>Tender Name</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Building Type</TableCell>
                                            <TableCell>Amount</TableCell>
                                            <TableCell>Quotations</TableCell>
                                            <TableCell>Timeline</TableCell>
                                            <TableCell>Awarded</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {data2 && data2.map(row => (
                                            <TableRow key={row.RFQNO}>
                                                <TableCell component="th" scope="row">
                                                    {row.RFQNO}
                                                </TableCell>
                                                <TableCell>{row.tenderName}</TableCell>
                                                <TableCell>{row.Description}</TableCell>
                                                <TableCell>{row.buildingType}</TableCell>
                                                <TableCell>{row.totalAmount + `(${row.Currency})`}</TableCell>
                                                <TableCell><a target="blank" href={row.Proposal} >Download</a></TableCell>
                                                <TableCell>0</TableCell>
                                                <TableCell>
                                                    {row.status}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
                        </div>
                        }
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
export default connect(mapStateToProps, null)(Myopentenders)