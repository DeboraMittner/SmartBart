import React, { Component } from "react";
import { Button, TextField } from "@material-ui/core";
import { Dialog, DialogActions, DialogTitle, DialogContent } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { IoMdWine } from "react-icons/io";
import { FormLabel, FormControl } from "@material-ui/core";
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import axios from "axios";
import '../App.css';


class AddCocktail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pumps: [],
      open: false,
      value: 30,
      ingredients: {},
      cocktailName: ""
    };
  }


  handleClickOpen = () => {
    this.setState({ open: true });
    axios
      .get("http://localhost:4000/pumps")
      .then(response => {
        var ingredients = {};
        response.data.forEach((pump) => {
          ingredients[pump.name] = 0;
        })
        this.setState({ ingredients: ingredients }, function () {
          Object.keys(this.state.ingredients).forEach(key => {
            console.log(key);
          })
        });

      });
  };

  save = () => {
    var cocktail = {
      "name": this.state.cocktailName,
      "ingredients": this.state.ingredients
    }
    axios.post('http://localhost:4000/cocktail', {
      cocktail: cocktail
    })
    .then(response => {
      console.log(response);
    });
    this.setState({ open: false });
  };

  handleNameChange = (event) => {
    this.setState({ cocktailName: event.target.value });
  }


  handleInputChange = (ingredient, event) => {
    var tempIngredients = this.state.ingredients;

    Object.keys(tempIngredients).forEach(ing => {
      if (ing == ingredient) {
        tempIngredients[ingredient] = event.target.value;
      }
    });
    console.log(tempIngredients);
    this.setState({ingredients: tempIngredients});

  };

  createAmountOptions = () => {
    let amounts = []
    for (let i = 0; i <= 30; i++) {
      amounts.push(<MenuItem value={i * 10}>{i * 10}</MenuItem>)
    }
    return amounts
}

  render() {

    return (
      <div className='AddButton' >
        <Button variant="contained" color="primary" onClick={this.handleClickOpen}>
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
              <form>
              <TextField id="standard-basic" label="Cocktailname" value={this.state.cocktailName} onChange={this.handleNameChange} />



              {Object.keys(this.state.ingredients).map(ingredient => {
                return (
                  <div>
                    <FormControl component="fieldset" >
                      <FormLabel component="legend">Ingredients</FormLabel>
                      <InputLabel id="demo-simple-select-label">{ingredient}</InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={this.state.ingredients[ingredient]}
                        onChange={(event) => this.handleInputChange(ingredient, event)}
                      >
                        {this.createAmountOptions()}
                      </Select>
                    </FormControl>
                  </div>

                );
              })}




              <Button
                onClick={this.save}
                variant="contained"
                color="primary"
                size="large"
                startIcon={<SaveIcon />}
              >
                Save
            </Button>
            </form>
            </DialogActions>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default AddCocktail;