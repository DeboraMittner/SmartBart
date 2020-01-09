import React from 'react';
import Cocktails from './components/Cocktails';

import './App.css';
import Container from '@material-ui/core/Container';
import ChangePumpDialog from './components/ChangePumpDialog';
import AddCocktail from './components/AddCocktail';
import PumpCleaner from './components/PumpCleaner';

function App() {
  return (
    <div className="App">
 


  
<Container maxWidth='sm'>
      <Cocktails />
      <ChangePumpDialog />
      <AddCocktail />
      <PumpCleaner />
      </Container>

    </div>
  );
}

export default App;
