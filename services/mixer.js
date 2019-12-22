var cocktails = require('../routes/cocktails.json');
var pumps = require('./pump.json');
const MAX_DRINK = 100;
var value; //value of ingredient




function calculateTime(intensity, pumpArray){
    var pumpTimeArray = [];
    for(var i = 0; i < pumpArray.length; i++){

    }

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
    return pumpTimeArray;
}

function getCocktail(id){
    for(let i = 0; i < cocktails.length; i++){
        if(cocktails[i].id == id ){
            return cocktails[i];
        };
    }
}

function getPumps(cocktail){
    var pumpArray = [];
    for(let i = 0; i < pumps.length; i++){
      
            if(Object.keys(cocktail.ingredients).includes(pumps[i].name)){
                var ingredientName = pumps[i].name;
                pumpArray.push([pumps[i], cocktail.ingredients[ingredientName]]);
            }
        
    }
    return pumpArray;
}

function makeDrink(id, intensity){
    var cocktail = getCocktail(id);
    var pumps = getPumps(cocktail);
    console.log(pumps);

    //ingredients holen aus cockteil.json
    //für jede ingredient calculateTime()
    //für jede kalkulrietre Zeit pumpDriver.drive(pumpnumber, time)
}

module.exports = {makeDrink};