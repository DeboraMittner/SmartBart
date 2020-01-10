import React from "react";
import "./App.css";
import Cocktails from "./components/Cocktails";
import Container from "@material-ui/core/Container";
import ChangePumpDialog from "./components/ChangePumpDialog";
import PumpCleaner from "./components/PumpCleaner";
import AddCocktail from "./components/AddCocktail";
import { Button } from "@material-ui/core";
import axios from "axios";


function shutdown() {
  axios
    .get("http://localhost:4000/shutdown")
    .then(response => console.log(response));
}

function App() {
  return (
    <div className="App">
      <Container maxWidth="sm">
        <Cocktails />
        <ChangePumpDialog />
        <AddCocktail/>
        <PumpCleaner />
        <Button variant="contained" color="primary" onClick={() => shutdown}>
          Change Pump Settings
      </Button>
      </Container>
    </div>
  );
}

export default App;
