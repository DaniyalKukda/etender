import React, { Component } from 'react'
import Appbar from "../AppBar/Appbar";
import Footer from "../Footer/Footer";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../config/firebase";
import Modal from './awarModal';
import Swal from "sweetalert2";
import { connect } from "react-redux";
import "./MyOpenTenderStatus.css"

class MyOpenTenderStatus extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            open: false,
        }
    }
    openModal = (open) => {
        this.setState({
            open
        })
    }
    HandleModelData = (para) => {
        this.state.open()
        this.setState({
            userId: para
        })
    }
    shouldComponentUpdate() {
        if (this.state.open) {
            return false
        }
        return true
    }
    fetchBid = () => {
        let rfq = this.props.match.params.rfq;
        rfq = rfq.trim()
        rfq = parseInt(rfq)
        firebase.database().ref("bidnow/").on("value", (val) => {
            let value = val.val()
            let arr = []
            for (var key in value) {
                for (var key2 in value[key])
                    if (rfq === value[key][key2].RFQNO) {
                        arr.push(value[key][key2])
                    }
            }
            this.setState({
                data: arr
            })
        })
    }
    getDataFromChild = (obj) => {
        let { userId } = this.state
        let rfq = this.props.match.params.rfq;
        obj.RFQNO = rfq
        obj.userId = userId
        let storageRef = firebase.storage().ref().child(`LOA/${obj.LOA.name}`)
        storageRef.put(obj.LOA).then((url) => {
            url.ref.getDownloadURL().then((urlref) => {
                obj.LOA = urlref;
                let userId = this.props.user.uid
                firebase.database().ref("award/" + userId).push(obj).then((res) => {
                    Swal.fire({
                        type: 'success',
                        title: 'Award!',
                        text: 'Tender Awarded Successfully...',
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
        console.log(obj)
    }
    componentDidMount() {
        this.fetchBid()
    }
    render() {
        let { data } = this.state
        let arr = [...data]
        arr = arr.splice(0, 1)
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="MyTendersStatusContainer">
                    <div className="MyTendersStatusheading">
                        <h1>My Open Tenders Status</h1>
                    </div>
                    <br />
                    <div className="MyTendersStatusFeilds">
                        <div style={{ width: "500px" }}>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>RFQ No</TableCell>
                                            <TableCell>Tender Name</TableCell>
                                            <TableCell>Description</TableCell>
                                            <TableCell>Building Type</TableCell>
                                            <TableCell>State</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {arr && arr.map((e) => {
                                        return <TableBody>
                                            <TableCell>{e.RFQNO}</TableCell>
                                            <TableCell>{e.tenderName}</TableCell>
                                            <TableCell>{e.Description}</TableCell>
                                            <TableCell>{e.buildingType}</TableCell>
                                            <TableCell>{e.state}</TableCell>
                                        </TableBody>
                                    })

                                    }
                                </Table>
                            </Paper>
                        </div>
                        <br />
                        <br />
                        <div style={{ width: "400px" }}>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>Amount</TableCell>
                                            <TableCell>Proposal Attachment</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    {data && data.map((v, i) => {
                                        return <TableBody>
                                            <TableCell>{i + 1}</TableCell>
                                            <TableCell>{v.totalAmount + `(${v.Currency})`}</TableCell>
                                            <TableCell><a target="blank" href={v.Proposal}>Attachment</a></TableCell>
                                            <TableCell><button onClick={() => this.HandleModelData(v.uid)}>Award</button></TableCell>
                                        </TableBody>
                                    })
                                    }
                                </Table>
                            </Paper>
                        </div>
                    </div>
                    <Modal getData={this.getDataFromChild} open={this.openModal} />
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
export default connect(mapStateToProps, null)(MyOpenTenderStatus)