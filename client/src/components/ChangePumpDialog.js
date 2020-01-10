import React,{ Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";



class ChangePumpDialog extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      pumps: [],
      visible: false,
      open: false,
      drinkTypes: 'alcohol'
    }
  }
  

  handleClickOpen = () => {
    this.setState({open: true});
  };

  save = () => {
    axios.put('http://localhost:4000/pumps', {
      pumps: this.state.pumps
    })
    .then(response => {
      console.log(response);
    });
    this.setState({open: false});
  };

  handlePumpNameChange = (pumpId, event) => {
    var tempPumps = this.state.pumps;

    tempPumps.forEach((pump) => {
      if(pump.pump === pumpId) {
        pump.name = event.target.value.toLowerCase();
      }
    });
    this.setState({pump: tempPumps});

  }

  handleAlcoholChange = (pumpId, event) => {
    var tempPumps = this.state.pumps;

    tempPumps.forEach((pump) => {
      if(pump.pump === pumpId) {
        pump.alcohol = !pump.alcohol
      }
    });
    this.setState({pump: tempPumps});
  };

componentDidMount(){
    axios
    .get("http://localhost:4000/pumps")
    .then(response => {
      this.setState({pumps: response.data});
      console.log('WooooWi');
      console.log(response);
    });
  }

render(){
  return (
    <div>
      <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
        Change Pump Settings
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Pumps</DialogTitle>
        
        <DialogActions>
 
      {this.state.pumps.map((pump, index) => {
        return (
          <form 
          width= '250'
          noValidate 
          autoComplete="off"
          key={pump.pump}>
           <p>{pump.pump + 1}</p>
           <TextField 
            id="standard-basic" 
            label="Drink" 
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
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
}
export default ChangePumpDialog;