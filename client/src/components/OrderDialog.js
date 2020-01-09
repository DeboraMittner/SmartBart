import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import axios from 'axios';

function sendRequest(ratio, id){
    const params = {
        ratio: ratio,
        id: id
    }
    console.log(params);
    axios.get('http://localhost:3000/cocktails/' + params.id, { params })
    .then(response => console.log(response))
}

export default function OrderDialog(props) {

  
    return (
    <div>
      <Dialog
        open={props.sichtbar}
        onClose={props.closeDialog}
        
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Customize Your Drink"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
        
            <DialogActions>
          <Button  color="primary" onClick={() => sendRequest(1, props.id),props.closeDialog}>
            Wenig
          </Button>
          <Button  color="primary" onClick={() =>sendRequest(2, props.id),props.closeDialog}>
            Mittel
          </Button>
          <Button  color="primary" onClick={() =>sendRequest(3, props.id),props.closeDialog}>
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
