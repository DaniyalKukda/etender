import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Bidicon from 'react-icons/lib/fa/plus-circle';
import Loginicon from 'react-icons/lib/md/person';
import { NavLink } from "react-router-dom";

import "./Appbar.css"
export default function ButtonAppBar() {
  return (
    <div style={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography className="Logo" variant="h6" style={{ flexGrow: 1 }}>
            E-TENDER
          </Typography>
          <Button color="inherit">Bids&nbsp;<Bidicon /></Button>
          <NavLink className="navlink" to="/home/login"><Button color="inherit">Login &nbsp;<Loginicon /></Button></NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}