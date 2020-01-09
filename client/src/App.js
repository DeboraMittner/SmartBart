import React from 'react';
import Cocktails from './components/Cocktails';
import Settings from './components/Settings';
import './App.css';
import Container from '@material-ui/core/Container';

import ChangePumpDialog from './components/ChangePumpDialog';

function App() {
  return (
    <div className="App">
 
<ChangePumpDialog />

      <Settings />
<Container maxWidth='sm'>
      <Cocktails />
      </Container>

    </div>
  );
}

export default App;
