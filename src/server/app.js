var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var busboy = require('connect-busboy');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var fs = require('fs');
var morgan = require('morgan');
var cors = require('cors');

var mongoose = require('mongoose');
var mongodb = require('mongodb').MongoClient;
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var logger = require('./utils/logger.js').getLogger('users');

var referalService = require('./services/referalService');
var apiService;

var app = express();

app.setConfigs = function(configs) {
	gameClient = configs;
};

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', '*');
	res.header('Access-Control-Allow-Headers', '*');
	next();
});

app.use(cors());
var configDB = require('../../config').db;

//mongoose.connect(configDB.url); // connect to our database

mongodb.connect(configDB.url, function(err, db) {
	if (err) {
		console.log(err);
		setTimeout(connect, 1000);
	} else {
		apiService = new(require('./services/apiService'))(db);
	};
})


app.post('/api/db/auth', function(req, res) {
	console.log(req.body)
	apiService.checkUser(req.body).then(function(data) {
		console.log(data)
		res.send(data);
	}).catch(function(err) {
		console.log(err);
		res.end(err);
	});
});

app.post('/api/db/start/session', function(req, res) {
	apiService.startSession(req.body).then(function(data) {
		console.log(data)
		res.send(data);
	}).catch(function(err) {
		console.log(err);
		res.end(err);
	});
});

app.post('/api/db/start/game', function(req, res) {
	apiService.startGame(req.body).then(function(data) {
		res.send(data);
	});
});

app.post('/api/db/end/session', function(req, res) {
	apiService.endSession(req.body).then(function() {
		res.send();
	});
});

app.post('/api/db/end/game', function(req, res) {
	apiService.endGame(req.body).then(function() {
		res.send();
	});
});

app.post('/api/db/update/snake', function(req, res) {
	apiService.updateSnake(req.body).then(function() {
		res.send();
	});
});

app.post('/api/db/update/leaderboard', function(req, res) {
	apiService.updateLeaderboard(req.body).then(function() {
		res.send();
	});
});

app.post('/api/db/insert/kill', function(req, res) {
	apiService.addKill(req.body).then(function() {
		res.send();
	}).catch(function(err) {
		res.send(err);
	});
});


module.exports = app;
