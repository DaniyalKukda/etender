import React from 'react'
import Appbar from '../AppBar/Appbar';
import Footer from '../Footer/Footer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../config/firebase";
import { connect } from "react-redux"
import "./Timeline.css"

class Timeline extends React.Component {
    constructor() {
        super();
        this.state = {
            data: [],
            timeline: "10%",
            userId:""
        }
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
    handleProgress = (e) => {
        let rfq = this.props.match.params.rfq
        let value = e.target.value;
        firebase.database().ref("award/").on("value", (data) => {
            let progress = data.val();
            for (var key in progress) {
                for (var key2 in progress[key]) {
                    if (progress[key][key2].RFQNO === parseInt(rfq)) {
                        if (value === "start") {
                            firebase.database().ref("award/").child(key + "/" + key2).update({ "timeline": "10%" })
                        } else if (value === "Material Delivered") {
                            firebase.database().ref("award/").child(key + "/" + key2).update({ "timeline": "38%" })
                        } else if (value === "Installation") {
                            firebase.database().ref("award/").child(key + "/" + key2).update({ "timeline": "70%" })
                        } else if (value === "NOC") {
                            firebase.database().ref("award/").child(key + "/" + key2).update({ "timeline": "100%" })
                        }
                    }
                }
            }
        })
        
    }
    fetchProgress = () => {
        let rfq = this.props.match.params.rfq;
        firebase.database().ref("award/").on("value", (data) => {
            let progress = data.val();
            console.log(parseInt(rfq))
            for (var key in progress) {
                for (var key2 in progress[key]) {
                    if (progress[key][key2].RFQNO === parseInt(rfq)) {
                        this.setState({
                            userId: progress[key][key2].userId,
                            timeline: progress[key][key2].timeline
                        })
                    }
                }
            }
        })
    }
    componentDidMount() {
        this.fetchBid()
        this.fetchProgress()

    }
    render() {
        let { data, timeline, userId } = this.state
        let arr = [...data]
        arr = arr.splice(0, 1)
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="TimeLineContainer">
                    <div className="TimeLineheading">
                        <h1>Timeline</h1>
                    </div>
                    <div className="TimeLineFeilds">
                        <div style={{ width: "600px" }}>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow className="row">
                                            <TableCell className="th">RFQ No</TableCell>
                                            <TableCell className="th">Tender Name</TableCell>
                                            <TableCell className="th">Description</TableCell>
                                            <TableCell className="th">Building Type</TableCell>
                                            <TableCell className="th">State</TableCell>
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
                    </div>
                    <br />
                    <br />
                    <div style={{ width: "38%", display: "flex", justifyContent: "space-between" }}>
                        <h3>Start</h3>
                        <h3>Material Delivered</h3>
                        <h3>Installation</h3>
                        <h3>NOC</h3>
                    </div>
                    <div style={{ width: "40%", display: "flex", justifyContent: "space-between" }}>
                        <div id="myProgress">
                            <div style={{ width: timeline }} id="myBar"></div>
                        </div>

                    </div>
                    {userId !== this.props.user.uid ? <div style={{ alignSelf: "flex-end", marginRight: "20%" }}>
                        <select onChange={this.handleProgress}>
                            <option selected value="Progress">Progress</option>
                            <option value="start">Start</option>
                            <option value="Material Delivered">M & D</option>
                            <option value="Installation">Installation</option>
                            <option value="NOC">NOC</option>
                        </select>
                    </div> : null}
                    <div style={{ width: "38%", display: "flex", justifyContent: "space-between" }}>
                        <h3>10%</h3>
                        <h3>50%</h3>
                        <h3>90%</h3>
                        <h3>100%</h3>
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
export default connect(mapStateToProps, null)(Timeline)