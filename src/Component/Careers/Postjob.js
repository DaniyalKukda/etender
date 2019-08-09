import React, { Component } from 'react';
import Appbar from "../AppBar/Appbar";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import firebase from '../../config/firebase';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import "./Postjob.css";
import Footer from '../Footer/Footer';

class Postjob extends Component {
    state = {
        jobs: ""
    }
    fetchJobs = () => {
        firebase.database().ref("postjob/").on("value", (jobs) => {
            let data = jobs.val()
            let arr = []
            for (var key in data) {
                arr.push(data[key])
            }
            this.setState({
                jobs: arr
            })
        })
    }
    componentDidMount() {
        this.fetchJobs()
    }
    render() {
        let { jobs } = this.state;
        return (
            <div>
                <div>
                    <Appbar />
                </div>
                <div className="PostJobContainer">
                    <div className="PostJobheading">
                        <h1>Careers</h1>
                        <p style={{ marginTop: "0px" }}>working at E-Tender is more than just a job - it's an opportunity to be a part of some thing bigger.</p>
                    </div>
                    <br />
                    <div className="PostJobCards">
                       {
                           jobs === "" ?
                           <h1 style={{textAlign:"center"}}>There is no Job Posted</h1>
                           :
                           jobs.map((job) => {
                            return <div className='jobsCardContainer'>
                               <Card>
                                   <CardActionArea>
                                       <CardContent>
                                           <Typography align="center" gutterBottom variant="h5" component="h2">
                                               {job.title}
                                            </Typography>
                                           <Typography align="center" variant="body2" color="textSecondary" component="p">
                                               {job.city + "," + job.country}
                                            </Typography>
                                       </CardContent>
                                   </CardActionArea>
                                   <CardActions style={{ display: "flex", justifyContent: "center" }}>
                                       <Button onClick={() => this.props.history.push(`/home/jobs/${job.title}`)} size="small" color="secondary">
                                           Apply Now
                                        </Button>
                                   </CardActions>
                               </Card>
                           </div>
                           })
                       }
                    </div>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}
export default Postjob