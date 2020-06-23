import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {Link} from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';

import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
 
  },
}));

export default function Nav() {
  const classes = useStyles();
  


  return (
 
<div className={classes.root}>
 <AppBar postion="static">

  <Link to='/regular'><Button >Regular</Button></Link>
  <Link to='/hot'><Button>Hot</Button></Link>
  <Link to='/generator'><Button>Generator</Button></Link>
      
</AppBar>
</div>

  )
  }
