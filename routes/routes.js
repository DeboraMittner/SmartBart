var mixer = require('../services/mixer');
var data = require("./cocktails.json");
var pumps = require('../services/pump');
//var pumpDriver = require('../services/pumpDriver');


var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
  
  
  app.get("/cocktails", function (req, res) {
    
      res.status(200).send(data);
     
    }); 

 app.get("/cocktails/:id", function (req, res) {
    var id = req.params.id;
    var intensity = req.query.ratio;
    console.log(id);
    console.log(intensity);
    
    mixer.makeDrink(id, intensity);

     res.status(200).send(id);
       
      }); 

      app.get("/cocktails/cleanPumps", function (req, res) {
        
        //pumpDriver.runPump();
        res.status(200).send('Pumps are cleaning');

       
      }); 

}
  module.exports = appRouter;