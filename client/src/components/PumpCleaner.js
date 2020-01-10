import React from 'react';
import Button from "@material-ui/core/Button";
import axios from 'axios';

function cleanPumps(){
    axios
    .get('http://localhost:3000/cleanPumps')
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