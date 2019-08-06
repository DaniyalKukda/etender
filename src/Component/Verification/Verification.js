import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function Verification() {

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card>
                <CardContent>
                    <Typography color="textSecondary" gutterBottom>
                        Verification
        </Typography>
                    <Typography variant="h5" component="h2">
                        Please wait for your account verification.
        </Typography>
                    <Typography variant="body2" component="p">
                        We will send you an email shortly
        </Typography>
                </CardContent>
            </Card>
        </div>
    )

}

export default Verification