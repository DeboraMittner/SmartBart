var fs = require('fs');
var mixer = require('../services/mixer');
var data = require("../services/cocktails.json");
var pumps = require('../services/pump.json');
var pumpDriver = require('../services/pumpDriver');
var exec = require('child_process').exec;



var appRouter = function (app) {
  app.get("/cocktails", function (req, res) {
    res.status(200).json(data);
  });

  app.get("/cocktails/:id", function (req, res) {
    if(!req.params.id || !req.query.ratio) {
      res.status(400).json({ msg: 'No Cocktail or Intensity specified.'});
      return console.log('No Cocktail or Intensity specified.');
    }

    var id = req.params.id;
    var intensity = req.query.ratio;

    mixer.makeDrink(id, intensity);
    console.log('Mixing cocktail: ' + id + ' with intensitiy: ' + intensity);

    res.status(200).send({ msg: 'Mixing cocktail' });
  });

  app.post("/cocktail", function (req, res) {
    if(!req.body.cocktail.name || !req.body.cocktail.ingredients) {
      res.status(400).send({ msg: 'No cocktail specified to add.' });
      return console.log('No cocktail specified.');
    }
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
          res.status(500).send({ msg: 'Could not save cocktail.'})
          return console.log(err);
      }
      delete require.cache[require.resolve('../services/cocktails.json')]
      data = require('../services/cocktails.json');
      console.log("JSON file has been saved.");
      res.status(200).send({ msg: "New cocktail saved." });
  });
  });

  app.get("/cleanPumps", function (req, res) {
    console.log('Cleaning pumps');

    pumpDriver.runPump(0, 60);
    pumpDriver.runPump(1, 60);
    pumpDriver.runPump(2, 60);
    pumpDriver.runPump(3, 60);
    pumpDriver.runPump(4, 60);
    pumpDriver.runPump(5, 60);

    res.status(200).send({ msg: 'Pumps are cleaning' });
  });

  app.get("/pumps", function (req, res) {
    console.log('Requesting pump configuration.');

    res.status(200).json(pumps);
  });

  app.put("/pumps", function (req, res) {
    if(!req.body.pumps) {
      res.status(400).send({ msg: 'No new pump configuration specified.' });
      return console.log("No new pump configuration specified.");
    }
    var jsonContent = JSON.stringify(req.body.pumps);
    fs.writeFile("./services/pump.json", jsonContent, 'utf8', function (err) {
      if (err) {
          console.log("An error occured while writing JSON Object to File.");
          res.status(500).send({ msg: 'Could not save new pump configuration.' });
          return console.log(err);
      }
      delete require.cache[require.resolve('../services/pump.json')]
      pumps = require('../services/pump.json');
      console.log("JSON file has been saved.");
      res.status(200).send({ msg: "Pumps are set." });
  });
  });

  app.get("/shutdown", function(req, res) {
    exec('sudo shutdown now', function (error, stdout, stderr) { 
      console.log(error);
      console.log(stdout);
      console.log(stderr);

      if(error || stderr) {
        res.status(500).send({ msg: 'Could not shut down.' });
        return console.log('Could not shut down.');
      }
      res.status(200).send({ msg: 'Bye!' });
     });
  });



}
module.exports = appRouter;
