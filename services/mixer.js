import { runPump } from './pumpDriver';
import {appRouter, id, intensity} from '../routes/routes';

const MAX_DRINK = 100;
var value; //value of ingredient
var alcohol;


function calculateTime(intensity){
    var duration;
    var alcohol;

    if(intensity == 1){
        if(alcohol == true){
            duration = value * 0.5;
        }
        duration = value * 1.5;
    }
    else if (intensity == 3){
        if(alcohol == true){
            duration = value * 1.5;
        }
        duration = value * 0.5;
    }
    else{
        duration = value;
    }
}