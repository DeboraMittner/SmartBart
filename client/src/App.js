import React from "react";
import "./App.css";
import Cocktails from "./components/Cocktails";
import Container from "@material-ui/core/Container";
import ChangePumpDialog from "./components/ChangePumpDialog";
import PumpCleaner from "./components/PumpCleaner";


function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Cocktails />
        <ChangePumpDialog />
       
        <PumpCleaner />
      </Container>
    </div>
  );
}

export default App;
