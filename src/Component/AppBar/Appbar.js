import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Bidicon from 'react-icons/lib/fa/plus-circle';
import Loginicon from 'react-icons/lib/md/person';
import Logouticon from 'react-icons/lib/fa/sign-out';
import User from 'react-icons/lib/fa/user';
import { NavLink } from "react-router-dom";
import firebase from "../../config/firebase";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import { removeUser } from "../../store/action/action";
import Swal from "sweetalert2"
import "./Appbar.css";


class ButtonAppBar extends React.Component {

  logout = () => {
    firebase.auth().signOut().then(() => {
      this.props.history.push("/")
      Swal.fire({
        type: 'success',
        title: 'Logout',
        text: "Logout successfully....!",
      })
      this.props.removeUser()
    }).catch((error) => {
      // An error happened.
      console.log(error)
    });
  }

  render() {
    return (
      <div style={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography onClick={() => this.props.history.push("/")} className="Logo" variant="h6" style={{ flexGrow: 1 , cursor:"pointer" }}>
              E-TENDER
            </Typography>
            <NavLink className="navlink" to="/home/bids" ><Button color="inherit">Bids&nbsp;<Bidicon /></Button></NavLink>
            {this.props.user !== null && <NavLink className="navlink" to="/home/my_tenders" ><Button color="inherit">My Profile&nbsp;<User /></Button></NavLink>}
            {this.props.user === null ? <NavLink className="navlink" to="/home/login"><Button color="inherit">Login &nbsp;<Loginicon /></Button></NavLink>
              : <NavLink className="navlink" ><Button onClick={this.logout} color="inherit">Logout &nbsp;<Logouticon /></Button></NavLink>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return ({
    user: state.authReducers.user
  })
}
const mapDispatchToProps = (dispatch) => {
  return {
    removeUser: () => dispatch(removeUser())
  }

}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ButtonAppBar))