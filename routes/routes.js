var mixer = require('../services/mixer');
var data = require("../services/cocktails.json");
var pumps = require('../services/pump.json');
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
    res.status(200).send("Pumps are set.");

  });



}
module.exports = appRouter;