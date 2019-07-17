import React, { Component } from 'react';
import Appbar from "../AppBar/Appbar";
import TextField from '@material-ui/core/TextField';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import firebase from "../../config/firebase"
import { connect } from "react-redux";
import Footer from "../Footer/Footer";
import "./Bids.css";


class Bids extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tenderNameList: ["Consultancy", "Construction", "Civil", "MEP", "Electrical", "Fire Fighting", "HVAC", "Plumbing", "ELV System", "Elevator", "Plumbing Contractor", "Tile & Interlock Contractor", "Plaster & Paint Contractor", "Steel Contractor", "Concret & Block Contractor", "Gypsum & Decor Contractor", "Fire rated Doors", "Wooden Doors", "Aluminum & Glass Work", "Central gas system", "other"],
            search: "",
            Category: "",
            Location: "",
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
        // search && this.setState({Category:"",Location:""}) || Category && this.setState({search:"",Location:""}) || Location && this.setState({search:"",Category:""})
    }
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, '0');
    // var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    // var yyyy = today.getFullYear();

    // today = yyyy + '-' + mm + '-' + dd;

    fetchDate = () => {
        firebase.database().ref("openTender/").on("value", (value) => {
            var arr = []
            let data = value.val();
            for (var key in data) {
                for (var key2 in data[key]) {
                    var today = new Date();
                    var dd = String(today.getDate()).padStart(2, '0');
                    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
                    var yyyy = today.getFullYear();

                    today = yyyy + '-' + mm + '-' + dd;
                    if (today < data[key][key2].closingDate) {
                        arr.push(data[key][key2])
                        // console.log(data[key][key2])
                    }
                }
            }
            this.setState({
                arr
            })
        })
    }


    componentDidMount() {
        this.fetchDate()
    }

    render() {
        let { search, Category, Location, arr } = this.state;
        let flt = search ? search : Category ? Category : Location ? Location : "null"
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="BidsContainer">
                    <div className="Bidsheading">
                        <h1>Bids!</h1>
                    </div>
                    <div className="BidsFeilds">
                        <div>
                            <TextField
                                required
                                style={{ display: "block" }}
                                id="Search"
                                label="Search"
                                type="text"
                                name="search"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                            />
                            <br />
                            <br />
                            <FormControl variant="filled">
                                <InputLabel htmlFor="filled-age-native-simple">Category</InputLabel>
                                <Select
                                    native
                                    name="Category"
                                    onChange={this.handleChange}
                                    input={<FilledInput name="Category" id="filled-age-native-simple" />}
                                >
                                    <option value="" />
                                    {this.state.tenderNameList.map((e) => <option value={e}>{e}</option>)}
                                </Select>
                            </FormControl>
                            <br />
                            <br />
                            <TextField
                                required
                                style={{ display: "block" }}
                                id="outlined-Location-input"
                                label="Location"
                                type="text"
                                name="Location"
                                margin="normal"
                                variant="outlined"
                                onChange={this.handleChange}
                            />
                        </div>
                        <div style={{ overflow: "auto" , marginTop:"15px"}}>
                            <Paper>
                                <Table>
                                    <TableHead>
                                        <TableRow style={{ backgroundColor: "#1F9947" }}>
                                            <TableCell style={{ color: "white" }}>Tender Name</TableCell>
                                            <TableCell style={{ color: "white" }} align="right">Description</TableCell>
                                            <TableCell style={{ color: "white" }} align="right">Building Type</TableCell>
                                            <TableCell style={{ color: "white" }} align="right">State</TableCell>
                                            <TableCell style={{ color: "white" }} align="right">Closing Date</TableCell>
                                            <TableCell style={{ color: "white" }} align="right"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                        flt !== "null" ?    arr && arr.filter((e) => {
                                                return search || Category ? e.tenderName.toLowerCase() === flt.toLowerCase() : e.state.toLowerCase() === flt.toLowerCase() 
                                            }).map(row => (
                                                <TableRow key={row.name}>
                                                    <TableCell component="th" scope="row">
                                                        {row.tenderName}
                                                    </TableCell>
                                                    <TableCell align="right">{row.Description}</TableCell>
                                                    <TableCell align="right">{row.buildingType}</TableCell>
                                                    <TableCell align="right">{row.state}</TableCell>
                                                    <TableCell align="right">{row.closingDate}</TableCell>
                                                    <TableCell align="right"><button onClick={() => this.props.user ? this.props.history.push("/home/bid_now") : this.props.history.push("/home/login")} className="btn-bidnow">Bid Now</button></TableCell>
                                                </TableRow>
                                            ))
                                        :
                                        arr && arr.map(row => (
                                            <TableRow key={row.name}>
                                                <TableCell component="th" scope="row">
                                                    {row.tenderName}
                                                </TableCell>
                                                <TableCell align="right">{row.Description}</TableCell>
                                                <TableCell align="right">{row.buildingType}</TableCell>
                                                <TableCell align="right">{row.state}</TableCell>
                                                <TableCell align="right">{row.closingDate}</TableCell>
                                                <TableCell align="right"><button onClick={() => this.props.user ? this.props.history.push("/home/bid_now") : this.props.history.push("/home/login")} className="btn-bidnow">Bid Now</button></TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Paper>
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
export default connect(mapStateToProps, null)(Bids)


