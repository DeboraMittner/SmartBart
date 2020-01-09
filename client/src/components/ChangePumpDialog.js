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

  handleClose = () => {
    this.setState({open: false});
  };

  handleChange = (event) => {
    this.setState({drinkTypes: 'nonalcohol'});
  };

componentDidMount(){
    axios
    .get("http://localhost:3000/pumps")
    .then(response => {
      this.setState({pumps: response.data});
      console.log('WooooWi');
      console.log(response);
    });
  }

render(){
  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
        Change Pump Settings
      </Button>
      <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Pumps</DialogTitle>
        
        <DialogActions>
 
      {this.state.pumps.map((pumpen, index) => {
        console.log('pumpen' + pumpen.pump);
        return (

          
          <form 
          width= '250'
          noValidate 
          autoComplete="off">
           <p>{pumpen.pump}</p>
           <TextField id="standard-basic" label="Drink" />
           <TextField
            select
            value={this.drinkTypes}
            onChange={this.handleChange}
            >
        
              <MenuItem key={'alcohol'} value={'alcohol'}>
                alcohol
              </MenuItem>
              <MenuItem key={'noalcohol'} value={'noalcohol'}>
                nonalcohol
              </MenuItem>
           
          </TextField>
  
          </form>

        );
      }
      
      )}
       

          <Button 
          onClick={this.handleClose} 
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