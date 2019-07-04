import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import "./Home.css"
class Home extends Component {

    render() {
        return (
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <div className="hero-image">
                        <div className="hero-text">
                            <h1 style={{fontSize:"50px",margin:0}}>Our Mission</h1>
                            <p style={{fontSize:"20px"}}>Simplify & improve the tender process for engineering.</p>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}
export default Home