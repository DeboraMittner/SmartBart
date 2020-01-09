import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import CocktailCard from './CocktailCard';

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles(theme => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));

function sendRequest(ratio, id){
  const param = {
      ratio:ratio,
      id:id
  }
  console.log(param);
  axios.get('http://localhost:3000/', param)
  .then(response => console.log(response))
}

export default function NewCocktailDialog(props) {

  const classes = useStyles();

  return (
  <div>
    <Dialog
      open={props.sichtbar}
      
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{"Customize Your Drink"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
        <form className={classes.root} noValidate autoComplete="off">
         <TextField id="standard-basic" label="Cocktailname" />
        </form>
       
        <Button  color="primary">
          Close
        </Button>

        </DialogContentText>
      </DialogContent>
      <DialogActions>
        
      </DialogActions>
    </Dialog>
  </div>
);
}