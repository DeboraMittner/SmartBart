import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import axios from "axios";


const drinkTypes = [
  {
    value: 'alcohol',
    label: 'alcohol'
  },
  {
    value: 'nonalcohol',
    label: 'nonalcohol'
  },
];


function sendRequest(ratio, id) {
  const params = {
    ratio: ratio,
    id: id
  };
  console.log(params);
  axios
    .get("http://localhost:3000/cocktails/" + params.id, { params })
    .then(response => console.log(response));
}

export default function ChangePumpDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [drinkType, setDrinkType] = React.useState('alcohol');
  const handleChange = (event) => {
    setDrinkType(event.target.value);
  };


  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Change Pump Settings
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Change Pumps</DialogTitle>
        
        <DialogActions>
 
        <form 
       // margin= 'theme.spacing(1)'
        width= '250'
        noValidate 
        autoComplete="off">
         <TextField id="standard-basic" label="Pumpnumber" /> 
         <TextField id="standard-basic" label="Drinktype" />
         <TextField
          select
          value={drinkType}
          onChange={handleChange}
          >
        {drinkTypes.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        </form>

          <Button 
          onClick={handleClose} 
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