var fs = require('fs');
var mixer = require('../services/mixer');
var data = require("../services/cocktails.json");
var pumps = require('../services/pump.json');
//var pumps = JSON.parse(fs.readFileSync('./services/pump.json', 'utf-8'));
var pumpDriver = require('../services/pumpDriver');



var appRouter = function (app) {


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

  app.post("/cocktail", function (req, res) {
    var cocktail = req.body.cocktail;
    Object.keys(cocktail.ingredients).forEach((key) => {
      if (cocktail.ingredients[key] == 0) { delete cocktail.ingredients[key] }
    })
    cocktail.id = Math.ceil(Math.random() * 100);
    console.log(cocktail);
    data.push(cocktail);
    var jsonContent = JSON.stringify(data);
    console.log(jsonContent);
    fs.writeFile("./services/cocktails.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      delete require.cache[require.resolve('../services/cocktails.json')]
      data = require('../services/cocktails.json');
      console.log("JSON file has been saved.");
  });
    res.status(200).send("New cocktail created.");

  });

  app.get("/cleanPumps", function (req, res) {
    pumpDriver.runPump(0, 60);
    pumpDriver.runPump(1, 60);
    pumpDriver.runPump(2, 60);
    pumpDriver.runPump(3, 60);
    pumpDriver.runPump(4, 60);
    pumpDriver.runPump(5, 60);

    res.status(200).send('Pumps are cleaning');


  });

  app.get("/pumps", function (req, res) {

    res.status(200).json(pumps);

  });

  app.put("/pumps", function (req, res) {
    console.log(req.body);
    var jsonContent = JSON.stringify(req.body.pumps);
    fs.writeFile("./services/pump.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          return console.log(err);
      }
      delete require.cache[require.resolve('../services/pump.json')]
      pumps = require('../services/pump.json');
      console.log("JSON file has been saved.");
  });
    res.status(200).send("Pumps are set.");

  });



}
module.exports = appRouter;