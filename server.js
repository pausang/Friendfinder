var express = require("express");

var bodyParser = require("body-parser");
var path = require("path");

var app = express();

// app.get('/', function(req, res){
//     res.send('Hello World');
// })

var PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())


// app.use(express.static(_dirname + "/app/css"));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json"}));


require('./app/routing/apiRoutes.js') (app);
require('./app/routing/htmlRoutes.js') (app);

app.listen(PORT, function() {
    console.log("App Listening on PORT: " + PORT);
});