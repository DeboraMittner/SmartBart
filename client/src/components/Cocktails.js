import React, { Component } from 'react';
import CocktailCard from './CocktailCard';
import Data from '../testfiles/data.json';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import NewCocktailDialog from './NewCocktailDialog';



class Cocktails extends Component {

  constructor(props){
    super(props);
   this.getNewCocktailDialog = this.getNewCocktailDialog.bind(this);

    this.state = {visible: false}
    
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
         {Data.map((cocktail, index) =>{

             return <CocktailCard content={cocktail} />
         }
         )
        
        }   
      <Fab color="primary" aria-label="add" >
       <AddIcon onClick={this.getNewCocktailDialog} />
      </Fab>
      <NewCocktailDialog sichtbar={visible} closeNewCocktailDialog={this.closeDialog} />
     
      </div>
    );
  }
}

export default Cocktails;