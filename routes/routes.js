var mixer = require('../services/mixer');
var data = require("./cocktails.json");
var pumps = require('../services/pump');
var pumpDriver = require('../services/pumpDriver');


var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
  
  
  app.get("/cocktails", function (req, res) {

      res.status(200).json(data);
     
    }); 

 app.get("/cocktails/:id", function (req, res) {
    var id = req.params.id;
    var intensity = req.query.ratio;
    console.log(id);
    console.log(intensity);
    
    mixer.makeDrink(id, intensity);

     res.status(200).send(id);
       
      }); 

      app.get("/cleanPumps", function (req, res) {
        console.log('huhu');
        pumpDriver.runPump();
        res.status(200).send('Pumps are cleaning');

       
      }); 

      app.get("/pumps", function (req, res) {
        
        res.status(200).json(pumps);

          }); 

          

}
  module.exports = appRouter;