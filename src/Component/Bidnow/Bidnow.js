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
            for (var key in arr) {
                for (var key2 in arr[key]) {
                    data.push(arr[key][key2])
                }
            }
            this.setState({
                data,
                loading2: false
            })
        })
    }
    componentDidMount() {
        this.fetchData()
    }
    openModal = (open) => {
        this.setState({
            open
        })
    }
    HandleModelData = (para) => {
        this.state.open()
        this.setState({
            para
        })
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
                                        <TableCell align="right">RFQ No</TableCell>
                                        <TableCell align="right">Tender Name</TableCell>
                                        <TableCell align="right">Description</TableCell>
                                        <TableCell align="right">Building Type</TableCell>
                                        <TableCell align="right">State</TableCell>
                                        <TableCell align="right">Location</TableCell>
                                        <TableCell align="right">Closing Date</TableCell>
                                        <TableCell align="right">Attachments</TableCell>
                                        {/* <TableCell align="right">Timeline</TableCell> */}
                                        {/* <TableCell align="right">Status</TableCell> */}
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {data && data.map(row => (
                                        <TableRow key={row.RFQNO}>
                                            <TableCell component="th" scope="row">
                                                {row.RFQNO}
                                            </TableCell>
                                            <TableCell align="right" >{row.tenderName}</TableCell>
                                            <TableCell align="right" >{row.Description}</TableCell>
                                            <TableCell align="right" >{row.buildingType}</TableCell>
                                            <TableCell align="right" >{row.location}</TableCell>
                                            <TableCell align="right" >{row.state}</TableCell>
                                            <TableCell align="right" >{row.closingDate}</TableCell>
                                            <TableCell align="right" ><ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
                                                <li><a href={row.engineeringdrawingsURL} target="blank">Engineering Drawing</a></li>
                                                <li><a href={row.buildingPermitURL} target="blank">Building Permit</a></li>
                                                <li><a href={row.materialAndSpecificationURL} target="blank">Material&Specification</a></li>
                                                <li><a href={row.siteplanURL} target="blank">Site Plan</a></li>
                                                {row.otherURL !== "" ? <li><a href={row.otherURL} target="blank">Other</a></li> : null}

                                            </ul></TableCell>
                                            {/* <TableCell align="right">{row}</TableCell> */}
                                            {/* <TableCell align="right">{row.status}</TableCell> */}
                                            <TableCell align="right"><button onClick={() => this.HandleModelData(row)} className="btn-bidnow">Bid Now</button></TableCell>
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