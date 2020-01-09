import React, { Component } from "react";
import {Button, Checkbox, TextField, Input} from "@material-ui/core";
import {Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { IoMdWine } from "react-icons/io";
import {FormLabel, FormControl, FormGroup, FormControlLabel} from "@material-ui/core";


export default function AddCocktail() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [state, setState] = React.useState({
    cola: false,
    sprite: false,
    wasser: false
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const { cola, sprite, wasser } = state;

  const [value, setValue] = React.useState(30);

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleInputChange = event => {
    setValue(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleBlur = () => {
    if (value < 0) {
      setValue(0);
    } else if (value > 200) {
      setValue(200);
    }
  };

  return (
    <div>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
       Add Cocktail <IoMdWine />
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
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
                <FormGroup>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={cola}
                        onChange={handleChange("cola")}
                        value="cola"
                      />
                    }
                    label="Cola"
                  />

                  <Input
                    width="42"
                    value={value}
                    margin="dense"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 200,
                      type: "number",
                      "aria-labelledby": "input-slider"
                    }}
                  />
                </FormGroup>
              </FormControl>
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
        </DialogContent>
      </Dialog>
    </div>
  );
}
