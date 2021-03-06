var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var cors = require('cors');
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/processmanager", { useNewUrlParser: true }).then(
          () => {console.log('Database connection is successful') },
          err => { console.log('Error when connecting to the database'+ err)}
);

var app = express();

app.use(express.static('./app/public'));

app.use(bodyParser.json())

app.use(expressValidator());
app.use(cors());


consign()
	.include('app/routes')
	.then('app/models')
	.then('app/controllers')
	.into(app);

module.exports = app;
