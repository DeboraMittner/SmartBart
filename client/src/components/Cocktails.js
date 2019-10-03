import React, { Component } from 'react';
import CocktailCard from './CocktailCard';
import Data from '../testfiles/data.json';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


class Cocktails extends Component {

  render() {
    return (
        <div>
         {Data.map((cocktail, index) =>{

             return <CocktailCard content={cocktail} />
         }
         )
        
        }     
      <Fab color="primary" aria-label="add" >
       <AddIcon />
      </Fab>
      </div>
    );
  }
}

export default Cocktails;