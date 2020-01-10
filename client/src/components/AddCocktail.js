import React, { Component } from "react";
import {Button, Checkbox, TextField, Input} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { IoMdWine } from "react-icons/io";
import {FormLabel, FormControl, FormGroup, FormControlLabel} from "@material-ui/core";
import axios from "axios";


class AddCocktail extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      pumps: [],
      visible: false, 
      open: false,
      value: 30
    };
  }
  

handleClickOpen = () => {
    this.setState({open: true});
  };

handleClose = () => {
  this.setState({open: false});
  };

handleChange = name => event => {
    this.setState({[name]: event.target.checked });
  };


handleInputChange = event => {
    this.setState({value: event.target.value === "" ? "" : Number(event.target.value)});
  };

handleBlur = () => {
    if (this.value < 0) {
      this.setState({value: 0});
    } else if (this.value > 200) {
      this.setState({value: 200});
    }
  };

  componentDidMount(){
    axios
    .get("http://localhost:3000/pumps")
    .then(response => {
      this.setState({pumps: response.data});
      console.log(response);
    });
  }

  render(){

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
       Add Cocktail <IoMdWine />
      </Button>

      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Cocktail</DialogTitle>
        <DialogContent>
          <DialogActions>
            <form
              width="250"
              noValidate
              autoComplete="off"
            >
              <TextField id="standard-basic" label="Cocktailname" />

              <FormControl component="fieldset" >
                <FormLabel component="legend">Ingredients</FormLabel>
               
                {this.state.pumps.map((pumpen, index) => {
                  return (
                <FormGroup key={index}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        //checked={cola}
                        onChange={this.handleChange(pumpen.name)}
                        value={pumpen.name}
                      />
                    }
                    label={pumpen.name}
                  />

                  <Input
                    width="42"
                    value={this.value}
                    margin="dense"
                    onChange={this.handleInputChange}
                    onBlur={this.handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 200,
                      type: "number",
                      "aria-labelledby": "input-slider"
                    }}
                  />
                </FormGroup>
                );
                })}
              </FormControl>
            </form>


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
        </DialogContent>
      </Dialog>
    </div>
  );
}
}

export default AddCocktail;