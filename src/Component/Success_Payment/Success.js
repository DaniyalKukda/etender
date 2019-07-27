import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from "react-redux";

class Success extends React.Component {
    // getDataFromChild = () => {
    //     let { data } = this.props
    //     let obj = {
    //         LOA : data.LOA,
    //         totalAmount : data.totalAmount,
    //         PolicyAndTerms : data.PolicyAndTerms
    //     }
    //     let rfq = this.props.match.params.rfq;
    //     obj.RFQNO = rfq
    //     obj.userId = userId
    //     let storageRef = firebase.storage().ref().child(`LOA/${obj.LOA.name}`)
    //     storageRef.put(obj.LOA).then((url) => {
    //         url.ref.getDownloadURL().then((urlref) => {
    //             obj.LOA = urlref;
    //             obj.timeline = "10%";
    //             obj.createdAt = Date.now();
    //             let Id = this.props.user.uid
    //             firebase.database().ref("award/" + Id).push(obj).then((res) => {

    //                 let getBidnow = firebase.database().ref("bidnow/");
    //                 getBidnow.once("value", (va) => {
    //                     let bid = va.val();
    //                     for (var key in bid) {
    //                         for (var key2 in bid[key]) {
    //                             if (bid[key][key2].RFQNO === parseInt(rfq) && bid[key][key2].uid === userId) {
    //                                 getBidnow.child(key + "/" + key2).update({ "status": "Awarded" }).then((hogya) => {
    //                                     let getTender = firebase.database().ref("openTender/" + Id);
    //                                     getTender.once("value", (vale) => {
    //                                         let data = vale.val();
    //                                         for (var key in data) {
    //                                             if (data[key].RFQNO === parseInt(rfq)) {
    //                                                 getTender.child(key).update({ "status": "Awarded" })
    //                                             }
    //                                         }
    //                                     })
    //                                     this.props.history.push(`/home/timeline${rfq}`)
    //                                     Swal.fire({
    //                                         type: 'success',
    //                                         title: 'Award',
    //                                         text: 'Tender is Successfully Awarded...',
    //                                     })
    //                                 })
    //                             }
    //                             else if (bid[key][key2].RFQNO === parseInt(rfq) && bid[key][key2].uid !== userId) {
    //                                 console.log("Dosra if chala")
    //                                 getBidnow.child(key + "/" + key2).update({ "status": "Missed" })
    //                             }

    //                         }
    //                     }
    //                 })


    //             }).catch((err) => {
    //                 console.error(err.message);
    //                 console.log(err);
    //                 Swal.fire({
    //                     type: 'error',
    //                     title: 'Oops...',
    //                     text: err.message,
    //                 })
    //             })
    //         })
    //     })
    // }
    render() {
        console.log(this.props.data)
        return (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <Card>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Success
        </Typography>
                        <Typography variant="h5" component="h2">
                            Your Payment is Successfully received
        </Typography>
                        <Typography variant="body2" component="p">
                            Click Award Button to Award the Project
        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button className="btn-login" size="medium">Award</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        data: state.authReducers.data
    })
}
export default connect(mapStateToProps)(Success)