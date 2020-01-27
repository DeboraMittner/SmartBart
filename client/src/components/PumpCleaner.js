import React from 'react';
import Button from "@material-ui/core/Button";
import { useSnackbar } from 'notistack';
import axios from 'axios';

var apiURL = 'http://192.168.4.1:4000';

if (process.env.NODE_ENV != 'production') {
  apiURL = 'http://localhost:4000'
}

function cleanPumps(enqueueSnackbar){
    axios
    .get(apiURL + '/cleanPumps')
    .then(response => enqueueSnackbar(response.data.msg, { variant: 'success' }));

}

export default function PumpCleaner() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    return(
        <div className='AddButton'>
 <Button variant="contained" color="primary" onClick={() => cleanPumps(enqueueSnackbar)}>
 Clean Pumps
</Button>
</div>
);
}