import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import "./Appbar.css"
export default function ButtonAppBar() {
  return (
    <div style={{flexGrow:1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography className="Logo" variant="h6" style={{flexGrow:1}}>
            E-TENDER
          </Typography>
          <Button color="inherit">Bids&nbsp;<i class="fas fa-plus-circle"></i></Button>
          <Button color="inherit">Login&nbsp;<i class="fas fa-sign-in-alt"></i></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}