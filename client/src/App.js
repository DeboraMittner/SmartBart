import React from 'react';
import Cocktails from './components/Cocktails';
import Settings from './components/Settings';
import './App.css';

import Container from '@material-ui/core/Container';


function App() {
  return (
    <div className="App">
 
      <Settings />
<Container maxWidth='sm'>
      <Cocktails />
      </Container>

    </div>
  );
}

export default App;
