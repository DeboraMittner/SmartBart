import React, { Component } from "react";
import CocktailCard from "./CocktailCard";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "../App.css";

class Cocktails extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      cocktails: [],
      visible: false 
    };
  }


  componentDidMount() {
    axios
    .get("http://localhost:4000/cocktails")
    .then(response => {
      this.setState({cocktails: response.data});
    });
  }

  closeDialog() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div className="cocktails">
        <Grid container spacing={6}>
          {this.state.cocktails.map((cocktail, index) => {
            return (
              <Grid item xs={6} key={cocktail.id}>
                <CocktailCard content={cocktail} />
 
                
              </Grid>
              
            );
            
          })}
           
           
        </Grid>

        
        
      </div>

    );
  }
}

export default Cocktails;
