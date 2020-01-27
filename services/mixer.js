var pumpDriver = require('./pumpDriver');

var cocktails = require('./cocktails.json');
var pumps = require('./pump.json');
const MAX_DRINK = 300;
const VOLUME_TIME_RATIO = 0.6;

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

function calculateTime(intensity, pumps){
    var pumpTimeArray = [];
    var prozent;
    var totalnoalcohol = 300;
    var totalalcohol = 0;
    var difference = 0;
    pumps.forEach(element => {
        if(element[0].alcohol == true){
            totalnoalcohol -= element[1];
            if(intensity == 1){
                element[1] *= 0.7;
            }
            else if(intensity == 3){
                element[1] *= 1.2;
            }
            totalalcohol += element[1];

            element[1] = element[1] * VOLUME_TIME_RATIO;

            pumpTimeArray.push(element);
        }
    });

    var noalcohol = MAX_DRINK - totalalcohol;
    difference = Math.abs(totalnoalcohol - noalcohol)
    pumps.forEach(element => {
        if(element[0].alcohol == false){
            prozent = element[1] / totalnoalcohol
            if(intensity == 1){
                element[1] = element[1] + (difference * prozent);
            }
            else if(intensity == 3){
                element[1] = element[1] - (difference * prozent);
            }
            element[1] = element[1] * VOLUME_TIME_RATIO;
            pumpTimeArray.push(element);
        }
        
    });
    
    return pumpTimeArray;
}
   
function makeDrink(id, intensity){
    var cocktail = getCocktail(id);
    var pumps = getPumps(cocktail);
    var time = calculateTime(intensity, pumps);
    console.log(time);
   time.forEach(async (element) => {
        pumpDriver.runPump(element[0].pump, element[1]);
    }); 
}

module.exports = {makeDrink, _calculateTime: calculateTime, _getPumps: getPumps, _getCocktail: getCocktail};
