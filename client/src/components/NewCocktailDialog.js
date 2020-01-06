import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

function sendRequest(ratio, id){
    const param = {
        ratio:ratio,
        id:id
    }
    console.log(param);
    //axios.get('http://localhost:3000/', param)
    //.then(response => console.log(response))
}

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

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
         
          <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Cocktailname</InputLabel>
        <BootstrapInput id="demo-customized-textbox" />
      </FormControl>

            <DialogActions>
       
          <Button  color="primary" onClick={props.closeDialog}>
            Close
          </Button>
        </DialogActions>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
