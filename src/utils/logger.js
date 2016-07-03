(function() {
	var Logger, chalk, fs;

	chalk = require('chalk');

	fs = require('fs');

	module.exports = Logger = (function() {
		Logger.prototype.level = {
			INFO: 'INFO',
			ERROR: 'ERROR',
			DEBUG: 'DEBUG'
		};

		function Logger(caller) {
			this.caller = caller.name;
		}

		Logger.prototype.log = function(level, message) {
			if (typeof level === "undefined") {
				return console.log("[" + this.caller + "] [?] " + message);
			}
			switch (level) {
				case this.level.INFO:
					return console.info(chalk.cyan("[" + this.caller + "]") + chalk.green("[" + level + "] ") + ("" + message));
				case this.level.ERROR:
					console.error(chalk.cyan("[" + this.caller + "]") + chalk.red("[" + level + "] ") + (message + " - "), arguments[2]);
					if (global.Application.config['env'] !== 'dev') {
						return this.write((new Date()) + "\nERROR: " + arguments[2] + "\nMESSAGE: [" + this.caller + "] " + message + "\n\n");
					}
					break;
				case this.level.DEBUG:
					if (global.Application.config['env'] === 'dev') {
						return console.log(chalk.cyan("[" + this.caller + "]") + chalk.gray("[" + level + "] ") + ("" + message));
					}
			}
		};


		/*
		Write exceptions to a log file
		 */

		Logger.prototype.write = function(exception) {
			return fs.appendFile(global.Application.config.logfile, exception);
		};

		return Logger;

	})();

}).call(this);
