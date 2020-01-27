import React from "react";
import "./App.css";
import Cocktails from "./components/Cocktails";
import Container from "@material-ui/core/Container";
import ChangePumpDialog from "./components/ChangePumpDialog";
import PumpCleaner from "./components/PumpCleaner";
import AddCocktail from "./components/AddCocktail";
import { Button } from "@material-ui/core";
import { SnackbarProvider } from 'notistack';
import axios from "axios";

var apiURL = 'http://192.168.4.1:4000';

if (process.env.NODE_ENV != 'production') {
  apiURL = 'http://localhost:4000'
}


function shutdown() {
  axios
    .get(apiURL + "/shutdown")
    .then(response => console.log(response.data.msg))
    .catch(error => console.log(error.response.data.msg));
}

function App() {
  return (
    <SnackbarProvider maxSnack={3} anchorOrigin={{
      vertical: 'top',
      horizontal: 'center'
    }}>
      <div className="App">
        <Container maxWidth="sm">
          <Cocktails />
          <ChangePumpDialog />
          <AddCocktail />
          <PumpCleaner />
          <div className="AddButton">
            <Button variant="contained" color="primary" onClick={() => shutdown}>
              Shutdown
        </Button>
          </div>
        </Container>
      </div>
    </SnackbarProvider>
  );
}

export default App;
