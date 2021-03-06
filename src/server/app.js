var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var busboy = require('connect-busboy');
var geoip = require('geoip-lite');
var ipaddr = require('ipaddr.js');
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

var gameClient = null;
var revision = "88enx";

var app = express();

require('./passport')(passport);

app.setConfigs = function(configs) {
	gameClient = configs;
};

app.use(favicon(__dirname + '/../../public/assets/img/favicon.png'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// emulating the folder s for graphics (to simplify the work with updates)
app.use('/s', express.static(path.join(__dirname, '../../public/assets/img')));

// view static files
app.use(express.static(path.join(__dirname, '../../public')));


//app.use(morgan('dev'));

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

app.get('/', function(req, res, next) {
	if (req.query.ref) {
		res.cookie('refId', req.query.ref, { maxAge: 900000, httpOnly: true });
	};
	res.sendFile(path.resolve(__dirname, '../client/views/index.htm'));
});

app.get('/currentUser', function(req, res, next) {
	var dateIp = geoip.lookup(ipaddr.process(req.ip).toString());
	res.send({
		user: req.user ? req.user.facebook.name : null,
		userId: req.user ? req.user.facebook.id : null,
		parent: req.user ? req.user.parent : null,
		geo: dateIp ? dateIp : { "country": "NONE" }
	});
});

// Ajax
app.get('/getservers', function(req, res, next) {
	res.send(JSON.stringify(gameClient.config.gameservers));
});

// =====================================
// FACEBOOK ROUTES =====================
// =====================================
// route for facebook authentication and login
app.get('/auth/facebook', passport.authenticate('facebook'));

// handle the callback after facebook has authenticated the user
app.get('/auth/facebook/callback',
	passport.authenticate('facebook', {
		successRedirect: '/callback',
		failureRedirect: '/'
	}));

app.get('/callback', isLoggedIn, function(req, res) {
	try {
		if (req.user) {
			logger.info(`${req.user.facebook.id} log in with ip ${ipaddr.process(req.ip).toString()}`);
			if (!req.user.parent && req.cookies.refId) {
				referalService.setParent({
					parent: req.cookies.refId,
					referal: req.user.facebook.id
				});
			}
		} else {
			logger.warn(`${req.user.facebook.id} log in error with ip ${ipaddr.process(req.ip).toString()}`);
		}
		res.redirect('/');
	} catch (e) {
		console.log('error: ' + e.stack);
	}
});

// route for logging out
app.get('/logout', function(req, res) {
	logger.info(`${req.user.facebook.id} log out with ip ${ipaddr.process(req.ip).toString()}`);
	req.logout();
	res.redirect('/');
});


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

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next();

	// if they aren't redirect them to the home page
	res.redirect('/');
}

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	var err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
	app.use(function(err, req, res, next) {
		res.status(err.status || 500);
		console.log(err)
		res.end();
	});
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
	res.status(err.status || 500);
	res.end();
});

//require('./routes.js')(app, passport);

module.exports = app;
