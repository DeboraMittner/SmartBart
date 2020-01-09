import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';



class AddCocktail extends Component {

   
    render() {
        const visible = this.state.visible;
    
        return (
            <div>
<Fab color="primary" aria-label="add" className={classes.fab}>
  <AddIcon />
</Fab>
          </div>
        );
      }
     
   }
   
   export default AddCocktail;