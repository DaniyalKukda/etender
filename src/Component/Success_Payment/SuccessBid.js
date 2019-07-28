import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from "../../config/firebase";
import { connect } from "react-redux";

class SuccessBid extends React.Component {
    state = {
        LOA: ""
    }
    awardProjectData = () => {
        let rfq = this.props.match.params.rfq;
        let uid = this.props.user.uid;
        firebase.database().ref("award").once("value", (value) => {
            let data = value.val();
            for (var key in data) {
                for (var key2 in data[key]) {
                    if (uid === data[key][key2].userId && data[key][key2].RFQNO === parseInt(rfq)) {
                        this.setState({
                            LOA: data[key][key2].LOA
                        })
                    }
                }
            }
        })
    }
    componentDidMount() {
        this.awardProjectData()
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
                            Click Download to get Letter Of Award(LOA)
        </Typography>
                    </CardContent>
                    <CardActions>
                        <a href={this.state.LOA} style={{textDecoration:"none"}} target="blank" size="medium"><Button className="btn-login">Download</Button></a>
                    </CardActions>
                </Card>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return ({
        user: state.authReducers.user
    })
}
export default connect(mapStateToProps)(SuccessBid)