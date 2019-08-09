import React from 'react'
import AppBar from "../AppBar/Appbar"
import Footer from "../Footer/Footer"
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../config/firebase";
import "./Bidnow.css"
import Modal from "../Modal/Modal"
import { connect } from "react-redux"
import Swal from "sweetalert2"
class Bidnow extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            loading2: true,
            open: false,
            bidData: ""
        }
    }
    fetchData = () => {
        firebase.database().ref("openTender/").on("value", (value) => {
            let arr = value.val();
            let data = [];
            let today = new Date();
            let dd = String(today.getDate()).padStart(2, '0');
            let mm = String(today.getMonth() + 1).padStart(2, '0');
            let yyyy = today.getFullYear();
            today = yyyy + '-' + mm + '-' + dd;
            for (var key in arr) {
                for (var key2 in arr[key]) {
                    if (today < arr[key][key2].closingDate) {
                        console.log(arr[key][key2].closingDate)
                        data.push(arr[key][key2])
                    }
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
            for (var key in arr) {
                data2.push({ RFQNO: arr[key].RFQNO })
            }
            this.setState({
                data2,
            })
        })
    }
    componentDidMount() {
        this.fetchData()
        this.fetchBids()
        let user = this.props.user
        if (!user) {
            this.props.history.push("/")
        }
    }
    openModal = (open) => {
        this.setState({
            open
        })
    }
    HandleModelData = (para) => {
        let { data2 } = this.state
        var flag;
        data2.map((rfq) => {
            if (rfq.RFQNO === para.RFQNO) {
                flag = rfq.RFQNO;
            }
        })
        if (flag === para.RFQNO) {
            Swal.fire({
                type: 'warning',
                title: 'Bid!',
                text: 'Your Bid is Already Submitted.!',
            })
        } else {
            this.state.open()
            this.setState({
                para
            })
        }
    }
    shouldComponentUpdate() {
        if (this.state.open) {
            return false
        }
        return true
    }
    getDataFromChild = (obj) => {
        let { para } = this.state
        let data = { ...para }
        data.totalAmount = obj.totalAmount;
        data.Currency = obj.Currency;
        // data.Proposal = obj.Proposal;
        let storageRef = firebase.storage().ref().child(`proposal/${obj.Proposal.name}`)
        storageRef.put(obj.Proposal).then((url) => {
            url.ref.getDownloadURL().then((urlref) => {
                data.Proposal = urlref;
                let userId = this.props.user.uid
                data.uid = userId
                firebase.database().ref("bidnow/" + userId).push(data).then((res) => {
                    Swal.fire({
                        type: 'success',
                        title: 'Bid!',
                        text: 'Bid submitted Successfully...',
                    })

                }).catch((err) => {
                    console.error(err.message);
                    console.log(err);
                    Swal.fire({
                        type: 'error',
                        title: 'Oops...',
                        text: err.message,
                    })
                })
            })
        })
        console.log(data)
    }
    render() {
        let { data } = this.state
        return (
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                <div>
                    <AppBar />
                </div>
                <div className="bidNowContainer">
                    <div className="bidNowheading">
                        <h1>Bid Now</h1>
                    </div>
                    {this.state.loading2 ? <img src={require("../../assets/Images/loading2.gif")} height="250" width="270" /> : <div className="tablecontainer">
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell className="tableRowAdjustment" align="right">RFQ No</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Tender Name</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Description</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Building Type</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">State</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Location</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Closing Date</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Attachments</TableCell>
                                        <TableCell className="tableRowAdjustment" align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {data && data.map(row => (
                                        <TableRow key={row.RFQNO}>
                                            <TableCell className="tableRowAdjustment" component="th" scope="row">
                                                {row.RFQNO}
                                            </TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" >{row.tenderName}</TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" >{row.Description}</TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" >{row.buildingType}</TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" >{row.location}</TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" >{row.state}</TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" >{row.closingDate}</TableCell>
                                            <TableCell className="tableRowAdjustment" align="right" ><ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
                                                <li><a href={row.engineeringdrawings} target="blank">Engineering Drawing</a></li>
                                                <li><a href={row.buildingPermit} target="blank">Building Permit</a></li>
                                                <li><a href={row.materialAndSpecification} target="blank">Material&Specification</a></li>
                                                <li><a href={row.siteplan} target="blank">Site Plan</a></li>
                                            </ul></TableCell>
                                            {/* <TableCell align="right">{row}</TableCell> */}
                                            {/* <TableCell align="right">{row.status}</TableCell> */}
                                            <TableCell className="tableRowAdjustment" align="right"><button onClick={() => this.HandleModelData(row)} className="btn-bidnow">Bid Now</button></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>

                        <Modal getData={this.getDataFromChild} open={this.openModal} />
                    </div>}
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
export default connect(mapStateToProps, null)(Bidnow)