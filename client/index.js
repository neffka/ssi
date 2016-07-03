// Imports
var fs = require('fs');

// Init variables
var Travis = false;

// Configs values
var countServers = 1;

// Run PlitherWeb
process.argv.forEach(function(val) {
	if (val == '--travis') {
		Travis = true;
	}
});

var GameClient = require('./src/GameClient');
var gameClient = new GameClient(Travis);
gameClient.start();
