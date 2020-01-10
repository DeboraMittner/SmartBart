import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import axios from "axios";

var apiURL = 'http://192.168.4.1:4000';

if (process.env.NODE_ENV != 'production') {
  apiURL = 'http://localhost:4000'
}

function sendRequest(ratio, id, closeDialog) {
  console.log("asasas");
  const params = {
    ratio: ratio
  };
  console.log(params);
  axios
    .get(apiURL + "/cocktails/" + id, { params })
    .then(response => console.log(response));
  closeDialog();
    
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
        <DialogTitle id="alert-dialog-title">
          {"Customize Your Drink"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <DialogActions>
              <Button
                color="primary"
                onClick={() => sendRequest(1, props.id, props.closeDialog)}
              >
                Wenig
              </Button>
              <Button
                color="primary"
                onClick={() => sendRequest(2, props.id, props.closeDialog)}
              >
                Mittel
              </Button>
              <Button
                color="primary"
                onClick={() => sendRequest(3, props.id, props.closeDialog)}
              >
                Viel
              </Button>
              <Button color="primary" onClick={props.closeDialog}>
                Close
              </Button>
            </DialogActions>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
