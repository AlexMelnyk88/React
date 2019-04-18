import React from 'react';
import {AppBar, Typography} from '@material-ui/core/';

export const NavBar =()=> {
  return (
    <div>
      <AppBar position="static" >
          <Typography  variant="h4" color="inherit" style={{margin: 'auto'}}>
          <span style={{fontFamily:'Georgia'}}>Gallery</span>
          </Typography>
      </AppBar>
    </div>
  );
}
