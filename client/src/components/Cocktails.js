import React, { Component } from "react";
import CocktailCard from "./CocktailCard";
import Data from "../testfiles/data.json";
import Grid from "@material-ui/core/Grid";
//import axios from "axios";

class Cocktails extends Component {
  constructor(props) {
    super(props);

    this.state = { visible: false };
  }

  /*
  state = {
    ingri: []
  };

  componentDidMount() {
    axios.get("http://localhost:3000/cocktails").then(response => {
      const ingri = response.data;
      this.setState({ ingri });
      console.log(response);
      console.log("Haaaallllooo");
    });
  }
*/
  closeDialog() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Grid container spacing={6}>
          {Data.map((cocktail, index) => {
            return (
              <Grid item xs={6}>
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
