import React from 'react'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Fail extends React.Component{
    render(){
        return(
            <div>
                   <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          Fail
        </Typography>
        <Typography variant="h5" component="h2">
        Your Payment is Fail
        </Typography>
        <Typography variant="body2" component="p">
          Go Back and Try Again
          <br /> 
          {"Failed"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={() => this.props.history.push("/home/my_tenders")} size="medium">Back</Button>
      </CardActions>
    </Card>
            </div>
        )
    }
}
export default Fail