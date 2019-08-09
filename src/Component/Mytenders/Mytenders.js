import React, { Component } from 'react'
import Appbar from "../AppBar/Appbar";
import Table from '@material-ui/core/Table';
import Button from '@material-ui/core/Button';
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
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            for (var key in arr) {
                if (today < arr[key].closingDate) {
                    data.push(arr[key])
                }
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
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            for (var key in arr) {
                if (today < arr[key].closingDate) {
                    data2.push(arr[key])
                }
            }
            this.setState({
                data2,
                loading2: false
            })
        })
    }
    handleAssign(e, RFQ) {
        let value = e.target.value;
        if (value === "Assigned") {
            this.props.history.push(`/home/myOpenTenderStatus${RFQ}`)
            return true
        } else if (value === "Hold") {
            let uid = this.props.user.uid;
            let getTender = firebase.database().ref("openTender/" + uid);
            getTender.once("value", (vale) => {
                let data = vale.val();
                for (var key in data) {
                    if (data[key].RFQNO === RFQ) {
                        getTender.child(key).update({ "status": "Hold" }).then((se) => {
                            let getBidnow = firebase.database().ref("bidnow/");
                            getBidnow.once("value", (va) => {
                                let bid = va.val();
                                for (var key in bid) {
                                    for (var key2 in bid[key]) {
                                        if (bid[key][key2].RFQNO === RFQ) {
                                            getBidnow.child(key + "/" + key2).update({ "status": "Hold" }).then((hogya) => {
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

        } else if (value === "Cancel") {
            let uid = this.props.user.uid;
            let getTender = firebase.database().ref("openTender/" + uid);
            getTender.once("value", (vale) => {
                let data = vale.val();
                for (var key in data) {
                    if (data[key].RFQNO === RFQ) {
                        getTender.child(key).update({ "status": "Cancel" }).then((se) => {
                            let getBidnow = firebase.database().ref("bidnow/");
                            getBidnow.once("value", (va) => {
                                let bid = va.val();
                                for (var key in bid) {
                                    for (var key2 in bid[key]) {
                                        if (bid[key][key2].RFQNO === RFQ) {
                                            getBidnow.child(key + "/" + key2).update({ "status": "Cancel" }).then((hogya) => {
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
    awardProjectData = (rfq) => {
        let uid = this.props.user.uid;
        firebase.database().ref("award").once("value", (value) => {
            let data = value.val();
            for (var key in data) {
                for (var key2 in data[key]) {
                    if (uid === data[key][key2].userId && data[key][key2].RFQNO === parseInt(rfq)) {
                        window.open(data[key][key2].LOA)
                    }
                }
            }
        })
    }
    componentDidMount() {
        this.fetchTenders()
        this.fetchBids()
    }
    render() {
        let { data, data2 } = this.state
        let { user } = this.props
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
                                            <TableCell className="tableRowAdjustment">RFQ No</TableCell>
                                            <TableCell className="tableRowAdjustment">Tender Name</TableCell>
                                            <TableCell className="tableRowAdjustment">Description</TableCell>
                                            <TableCell className="tableRowAdjustment">Building Type</TableCell>
                                            <TableCell className="tableRowAdjustment">State</TableCell>
                                            <TableCell className="tableRowAdjustment">Closing Date</TableCell>
                                            <TableCell className="tableRowAdjustment">Attachments</TableCell>
                                            <TableCell className="tableRowAdjustment">Timeline</TableCell>
                                            <TableCell className="tableRowAdjustment">Status</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>

                                        {data && data.map(row => (
                                            <TableRow key={row.RFQNO}>
                                                <TableCell className="tableRowAdjustment" component="th" scope="row">
                                                    {row.RFQNO}
                                                </TableCell>
                                                <TableCell className="tableRowAdjustment">{row.tenderName}</TableCell>
                                                <TableCell className="tableRowAdjustment">{row.Description}</TableCell>
                                                <TableCell className="tableRowAdjustment">{row.buildingType}</TableCell>
                                                <TableCell className="tableRowAdjustment">{row.state}</TableCell>
                                                <TableCell className="tableRowAdjustment">{row.closingDate}</TableCell>
                                                <TableCell className="tableRowAdjustment"><ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
                                                    <li><a href={row.engineeringdrawings} target="blank">Engineering Drawing</a></li>
                                                    <li><a href={row.buildingPermit} target="blank">Building Permit</a></li>
                                                    <li><a href={row.materialAndSpecification} target="blank">Material&Specification</a></li>
                                                    <li><a href={row.siteplan} target="blank">Site Plan</a></li>
                                                </ul></TableCell>
                                                <TableCell className="tableRowAdjustment">{row.status == "Awarded" ? <button className="btn-bidnow" onClick={() => this.props.history.push(`/home/timeline${row.RFQNO}`)}>Timeline</button> : 0}</TableCell>
                                                <TableCell className="tableRowAdjustment">
                                                    <select
                                                        name="status"
                                                        onChange={(e) => this.handleAssign(e, row.RFQNO)}
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
                                            <TableCell>Status</TableCell>
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
                                                <TableCell><TableCell>{row.status == "Awarded" ? <button className="btn-bidnow" onClick={() => this.props.history.push(`/home/timeline${row.RFQNO}`)}>Timeline</button> : 0}</TableCell>
                                                </TableCell>
                                                <TableCell>
                                                    {
                                                        user.paymentFlag ?
                                                            row.status == "Awarded" ?
                                                                <form method="POST" action="https://mywallet.bring.ae/sci/form" target="_blank">
                                                                    <input type="hidden" name="merchant" value="IJ629962" />
                                                                    <input type="hidden" name="order" value={row.RFQNO + ".2"} />
                                                                    <input type="hidden" name="item_name" value="Here is the Total Amount After Deduction Of percentage and card charges" />
                                                                    <input type="hidden" name="item_number" value="123" />
                                                                    <input type="hidden" name="amount" value={parseInt(row.totalAmount) * 0.05 < 500 ? parseInt(row.totalAmount) + 500 + 50 : (parseInt(row.totalAmount) * 0.05) + 50} />
                                                                    <input type="hidden" name="quantity" value="1" />
                                                                    <input type="hidden" name="currency" value={row.Currency} />
                                                                    <input type="hidden" name="first_name" value={user.fullName} />
                                                                    <input type="hidden" name="last_name" value={user.fullName} />
                                                                    <input type="hidden" name="email" value={user.email} />
                                                                    <input type="hidden" name="phone" value={user.mobileNumber} />
                                                                    <input type="hidden" name="address" value={user.country} />
                                                                    <input type="hidden" name="city" value={user.state} />
                                                                    <input type="hidden" name="state" value={user.state} />
                                                                    <input type="hidden" name="country" value={user.country} />
                                                                    <input type="hidden" name="postalcode" value="13809" />
                                                                    <input type="hidden" name="custom" value="comment" />
                                                                    <input type="hidden" name="notify_url" value="CALLBACKIPNURL" />
                                                                    <input type="hidden" name="success_url" value={`http://localhost:3000/home/bid_payment_success${row.RFQNO}`} />
                                                                    <input type="hidden" name="fail_link" value="http://localhost:3000/home/payment_fail" />
                                                                    <Button className="btn-login" type="submit">Awarded</Button>
                                                                </form>
                                                                : row.status
                                                            :
                                                            row.status == "Awarded" ?
                                                                <Button target="blank" onClick={() => this.awardProjectData(row.RFQNO)} className="btn-login">Download</Button>
                                                                : row.status
                                                    }
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