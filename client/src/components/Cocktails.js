import React, { Component } from "react";
import CocktailCard from "./CocktailCard";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import "../App.css";

var apiURL = 'http://192.168.4.1:4000';

if (process.env.NODE_ENV != 'production') {
  apiURL = 'http://localhost:4000'
}

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
    .get(apiURL + "/cocktails")
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
