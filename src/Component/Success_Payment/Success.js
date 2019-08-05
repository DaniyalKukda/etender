import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from "../../config/firebase";
import Swal from "sweetalert2"
import { connect } from "react-redux";

class Success extends React.Component {
    awardProject = () => {
        let { data, user } = this.props.alldata
        let fileobj = new File([""],data.letter.name,{
            lastModified : data.letter.lastModified,
            lastModifiedDate : data.letter.lastModifiedDate,
            type : data.letter.type,
            size : data.letter.size
        })
        let obj = {
            LOA: fileobj,
            totalAmount: data.totalAmount,
            PolicyAndTerms: data.PolicyAndTerms,
            Currency: data.Currency
        }
       
        let rfq = data.RFQNO;
        obj.RFQNO = rfq
        obj.userId = data.uid
        let storageRef = firebase.storage().ref().child(`LOA/${obj.LOA.name}`)
        storageRef.put(obj.LOA).then((url) => {
            url.ref.getDownloadURL().then((urlref) => {
                obj.LOA = urlref;
                obj.timeline = "10%";
                obj.createdAt = Date.now();
                let Id = user.uid
                firebase.database().ref("award/" + Id).push(obj).then((res) => {

                    let getBidnow = firebase.database().ref("bidnow/");
                    getBidnow.once("value", (va) => {
                        let bid = va.val();
                        for (var key in bid) {
                            for (var key2 in bid[key]) {
                                if (bid[key][key2].RFQNO === parseInt(rfq) && bid[key][key2].uid === obj.userId) {
                                    getBidnow.child(key + "/" + key2).update({ "status": "Awarded" }).then((hogya) => {
                                        let getTender = firebase.database().ref("openTender/" + Id);
                                        getTender.once("value", (vale) => {
                                            let data = vale.val();
                                            for (var key in data) {
                                                if (data[key].RFQNO === parseInt(rfq)) {
                                                    getTender.child(key).update({ "status": "Awarded" })
                                                }
                                            }
                                        })
                                        this.props.history.push(`/home/timeline${rfq}`)
                                        Swal.fire({
                                            type: 'success',
                                            title: 'Award',
                                            text: 'Tender is Successfully Awarded...',
                                        })
                                    })
                                }
                                else if (bid[key][key2].RFQNO === parseInt(rfq) && bid[key][key2].uid !== obj.userId) {
                                    getBidnow.child(key + "/" + key2).update({ "status": "Missed" })
                                }

                            }
                        }
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
    }
    componentDidMount(){
        let user = this.props.alldata.user
        if (!user) {
            this.props.history.push("/")
        }
    }
    render() {
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
                        <Button onClick={this.awardProject} className="btn-login" size="medium">Award</Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        alldata: state.authReducers
    })
}
export default connect(mapStateToProps)(Success)