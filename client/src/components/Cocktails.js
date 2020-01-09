import React, { Component } from 'react';
import CocktailCard from './CocktailCard';
import Data from '../testfiles/data.json';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NewCocktailDialog from './NewCocktailDialog';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

class Cocktails extends Component {

  constructor(props){
    super(props);
   this.getNewCocktailDialog = this.getNewCocktailDialog.bind(this);


    this.state = {visible: false}
    
}
state = {
  ingri: []
}

componentDidMount() {
  axios.get('http://localhost:3000/cocktails')
  .then(response => {
    const ingri = response.data;
    this.setState({ingri});
    console.log(response);
    console.log('Haaaallllooo');
  })
    
 
  
}

getNewCocktailDialog(){
  this.setState({visible: true});
 
}


closeDialog(){
  this.setState({visible: false});
}


  render() {

    const visible = this.state.visible;

    return ( 
        <div> 
          <Grid container spacing={3}>
         {Data.map((cocktail, index) =>{

             return <Grid item xs={6}>
               <CocktailCard content={cocktail} />
               </Grid>
         }
         )
        
        }   
        </Grid>
      <Fab color="primary" aria-label="add" >
       <AddIcon onClick={this.getNewCocktailDialog} />
      </Fab>
      <NewCocktailDialog sichtbar={visible} closeNewCocktailDialog={this.closeDialog} />
      
     
      </div>
    );
  }
}

export default Cocktails;