import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function sendRequest(ratio, id){
    const param = {
        ratio:ratio,
        id:id
    }
    axios.get('http://localhost:3000/', param)
    .then(response => console.log(response))
}

export default function OrderDialog(props) {

  
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
        
            <DialogActions>
          <Button  color="primary" onClick={() => sendRequest(1, props.id)}>
            Wenig
          </Button>
          <Button  color="primary" onClick={() =>sendRequest(2, props.id)}>
            Mittel
          </Button>
          <Button  color="primary" onClick={() =>sendRequest(3, props.id)}>
            Viel
          </Button>        
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
