var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');

//CORS HERRE
var routes = require("./routes/routes.js");
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

if(process.env.NODE_ENV === 'production') {
    //Set static folder
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const port = 4000;

app.listen(port, function () {
    console.log("app running on port." + port);
});