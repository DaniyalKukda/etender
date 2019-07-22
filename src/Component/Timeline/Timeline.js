import React from 'react'
import Appbar from '../AppBar/Appbar';
import Footer from '../Footer/Footer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../config/firebase"
import "./Timeline.css"

class Timeline extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
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
                <div className="TimeLineContainer">
                    <div className="TimeLineheading">
                        <h1>Timeline</h1>
                    </div>
                    <div className="TimeLineFeilds">
                        <div style={{ width: "600px" }}>
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
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Timeline