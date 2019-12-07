var data = require("./cocktails")
var newCocktail

var appRouter = function (app) {
    app.get("/", function(req, res) {
      res.status(200).send("Welcome to our restful API");
    });
  
  
  app.get("/cocktails", function (req, res) {
    
      res.status(200).json(data);
     
    }); 

 app.get("/cocktails/:id", function (req, res) {
    var id = req.params.id;
    var intensity = req.params.ratio;

    //TODO: AUS DEM JSON DEN DRINK MIT DER ID AUSSUCHEN
    //TODO: DEN DRINK DANN AUSGEBEN MIT DER GANZEN RASPI PUMPEN LOGIK
    

     res.status(200).send(id);
       
      }); 

}
  module.exports = appRouter, id, intensity;