import React from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios';

var apiURL = 'http://192.168.4.1:4000';

if (process.env.NODE_ENV != 'production') {
  apiURL = 'http://localhost:4000'
}

function cleanPumps(){
    axios
    .get(apiURL + '/cleanPumps')
    .then(response => console.log(response));

}

export default function PumpCleaner() {

    return(
        <div className='AddButton'>
 <Button variant="contained" color="primary" onClick={cleanPumps}>
 Clean Pumps
</Button>
</div>
);
}