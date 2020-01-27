import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import { withSnackbar } from 'notistack';
import axios from "axios";
import '../App.css';

var apiURL = 'http://192.168.4.1:4000';

if (process.env.NODE_ENV != 'production') {
  apiURL = 'http://localhost:4000'
}



class ChangePumpDialog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pumps: [],
      visible: false,
      open: false,
      drinkTypes: 'alcohol'
    }
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  save = () => {
    axios.put(apiURL + '/pumps', {
      pumps: this.state.pumps
    })
      .then(response => this.props.enqueueSnackbar(response.data.msg, { variant: 'success' }))
      .catch(error => this.props.enqueueSnackbar(error.response.data.msg, { variant: 'error' }));
    this.setState({ open: false });
  };

  handlePumpNameChange = (pumpId, event) => {
    var tempPumps = this.state.pumps;

    tempPumps.forEach((pump) => {
      if (pump.pump === pumpId) {
        pump.name = event.target.value.toLowerCase();
      }
    });
    this.setState({ pump: tempPumps });

  }

  handleAlcoholChange = (pumpId, event) => {
    var tempPumps = this.state.pumps;

    tempPumps.forEach((pump) => {
      if (pump.pump === pumpId) {
        pump.alcohol = !pump.alcohol
      }
    });
    this.setState({ pump: tempPumps });
  };

  componentDidMount() {
    axios
      .get(apiURL + "/pumps")
      .then(response => {
        this.setState({ pumps: response.data });
        console.log(response);
      });
  }

  render() {
    return (
      <div className='AddButton'>
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
          Change Pump Settings
      </Button>
        <Dialog 
        maxWidth='xl' 
        open={this.state.open} 
        onClose={this.handleClose} 
        aria-labelledby="form-dialog-title"
        padding='200px'
        >
          <DialogTitle>Change Pumps</DialogTitle>

          <DialogActions className='ChangePump'>

            {this.state.pumps.map((pump, index) => {
              return (
                <form
                  width='250'
                  noValidate
                  autoComplete="off"
                  key={pump.pump}>
                  <p>{pump.pump + 1}</p>
                  <TextField
                    id="standard-basic"
                    label="Ingredient"
                    defaultValue={pump.name}
                    onChange={(event) => this.handlePumpNameChange(pump.pump, event)}
                  />
                  <TextField
                    select
                    value={pump.alcohol ? "Alcohol" : "No-Alcohol"}
                    onChange={(event) => this.handleAlcoholChange(pump.pump, event)}
                  >

                    <MenuItem key={'alcohol'} value={'Alcohol'}>
                      Alcohol
              </MenuItem>
                    <MenuItem key={'noalcohol'} value={'No-Alcohol'}>
                      No-Alcohol
              </MenuItem>

                  </TextField>

                </form>

              );
            }

            )}


            <Button
              onClick={this.save}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}
            >
              
          </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
export default withSnackbar(ChangePumpDialog);