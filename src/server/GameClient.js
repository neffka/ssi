// Imports
var WebApp = require('./app');
var http = require('http');
var monitor = require('node-monitor');

// GameClient implementation
function GameClient(travisCompile) {
	// Test compile
	this.travis = travisCompile;

	// Config
	this.config = require('../../config').server;
}

module.exports = GameClient;

GameClient.prototype.start = function() {
	WebApp.set('port', this.config.serverPort);
	WebApp.setConfigs(this);

	this.webServer = http.createServer(WebApp);
	this.webServer.listen(this.config.serverPort);
	this.webServer.on('error', onError.bind(this));
	this.webServer.on('listening', onListening.bind(this));

	monitor.Monitor(this.webServer, {
		'collect_all': 'yes'
	});

	// functions
	function onError(error) {
		if (error.syscall !== 'listen') {
			throw error;
		}

		// handle specific listen errors with friendly messages
		switch (error.code) {
			case 'EACCES':
				console.log('\u001B[31m[Client]\u001B[0m ' + this.config.webserverPort + ' requires elevated privileges');
				process.exit(1);
				break;
			case 'EADDRINUSE':
				console.log('\u001B[31m[Client]\u001B[0m ' + this.config.webserverPort + ' is already in use');
				process.exit(1);
				break;
			default:
				throw error;
		}
		return false;
	}

	function onListening() {
		if (this.travis) {
			process.exit(0);
			return false;
		}
		var addr = this.webServer.address();
		var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
		console.log('\u001B[31m[Client]\u001B[0m Game Client started at ' + bind);
		return true;
	}
};
