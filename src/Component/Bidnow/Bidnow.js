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
import { Button } from '@material-ui/core';

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

class Bidnow extends React.Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }
    fetchData = () => {
        firebase.database().ref("openTender/").on("value",(value) => {
            let arr = value.val();
            let data = [];
            for(var key in arr){
                for(var key2 in arr[key]){
                        data.push(arr[key][key2])
                }
            }
            this.setState({
                data
            })
        })
    }
    componentDidMount(){
        this.fetchData()
    }
    render() {
        let {data} = this.state
        return (
            <div style={{display:"flex" , flexDirection:"column" , justifyContent:"space-between"}}>
                <div>
                    <AppBar />
                </div>
                <div className="bidNowContainer">
                    <div className="bidNowheading">
                        <h1>Bid Now</h1>
                    </div>
                    <div>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>RFQ No</TableCell>
                                        <TableCell>Tender Name</TableCell>
                                        <TableCell>Description</TableCell>
                                        <TableCell>Building Type</TableCell>
                                        <TableCell>State</TableCell>
                                        <TableCell>Location</TableCell>
                                        <TableCell>Closing Date</TableCell>
                                        <TableCell>Attachments</TableCell>
                                        <TableCell>Timeline</TableCell>
                                        <TableCell>Status</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    
                                    {data && data.map(row => (
                                        <TableRow key={row.rf}>
                                            <TableCell component="th" scope="row">
                                                {row.RFQNO}
                                            </TableCell>
                                            <TableCell>{row.tenderName}</TableCell>
                                            <TableCell>{row.Description}</TableCell>
                                            <TableCell>{row.buildingType}</TableCell>
                                            <TableCell>{row.location}</TableCell>
                                            <TableCell>{row.state}</TableCell>
                                            <TableCell>{row.closingDate}</TableCell>
                                            <TableCell><ul style={{ margin: 0, padding: 0, listStyleType: "none" }}>
                                                <li><a href={row.engineeringdrawingsURL} target="blank">Engineering Drawing</a></li>
                                                <li><a href={row.buildingPermitURL} target="blank">Building Permit</a></li>
                                                <li><a href={row.materialAndSpecificationURL} target="blank">Material&Specification</a></li>
                                                <li><a href={row.siteplanURL} target="blank">Site Plan</a></li>
                                                {row.otherURL !== "" ? <li><a href={row.otherURL} target="blank">Other</a></li> : null}

                                            </ul></TableCell>
                                            <TableCell>{row.protein}</TableCell>
                                            <TableCell>{row.status}</TableCell>
                                            <TableCell><a style={{padding:"0px"}}>Bid Now</a></TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Paper>

                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Bidnow