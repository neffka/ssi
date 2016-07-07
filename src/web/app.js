var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var busboy = require('connect-busboy');
var geoip = require('geoip-lite');
var ipaddr = require('ipaddr.js');
var express = require('express');
var logger = require('morgan');
var path = require('path');
var hbs = require('hbs');
var fs = require('fs');
var morgan = require('morgan');

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var gameClient = null;
var revision = "88enx";

var app = express();
require('../configs/passport')(passport);
    // view engine setup
app.setConfigs = function(configs) {
    gameClient = configs;
};
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
//app.use(logger('dev'));

// uncomment after placing your favicon in /public
app.use(favicon(__dirname + '/public/assets/img/favicon.png'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

// emulating the folder s for graphics (to simplify the work with updates)
app.use('/s', express.static(path.join(__dirname, 'public/assets/img')));

// view static files
app.use(express.static(path.join(__dirname, 'public')));


app.use(morgan('dev'));


var configDB = require('../configs/database.js');

mongoose.connect(configDB.url); // connect to our database

// Web Client
app.get('/', function(req, res, next) {
    console.log(req.user)
    var dateIp = geoip.lookup(ipaddr.process(req.ip).toString());
    res.render('home', {
        coreConfigs: gameClient.config,
        revision: revision,
        showlayout: true,
        geo: (dateIp ? dateIp : { "country": "NONE" }),
        title: '',
        user: req.user ? req.user.facebook.name : null
    });
});

// Social box
app.get('/social-box', function(req, res, next) {
    res.render('social-box');
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
        successRedirect: '/success',
        failureRedirect: '/'
    }));

// =====================================
// PROFILE SECTION =====================
// =====================================
// we will want this protected so you have to be logged in to visit
// we will use route middleware to verify this (the isLoggedIn function)
app.get('/profile', isLoggedIn, function(req, res) {
    res.json({
        user: req.user // get the user out of session and pass to template
    });
});

app.get('/success', isLoggedIn, function(req, res) {
    res.render('success');
});

// route for logging out
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
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
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


//require('./routes.js')(app, passport);

module.exports = app;
