(function() {
	var Application, EventEmitter, keys, pkg, semver, server, startTime,
		extend = function(child, parent) {
			for (var key in parent) {
				if (hasProp.call(parent, key)) child[key] = parent[key];
			}

			function ctor() { this.constructor = child; }
			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		},
		hasProp = {}.hasOwnProperty;

	startTime = Date.now();

	pkg = require('../package');

	server = require('./server');

	keys = require('object-keys');

	semver = require('semver');

	EventEmitter = require('events').EventEmitter;

	module.exports = Application = (function(superClass) {
		extend(Application, superClass);


		/*
		Section: Properties
		 */

		Application.prototype.logger = null;

		Application.prototype.config = null;


		/*
		Section: Construction
		 */

		function Application() {
			global.Application = this;
			this.config = require('../config');
			this.logger = new(require('./utils/logger'))(Application);
			this.logger.log(this.logger.level.DEBUG, "You are running " + pkg.name + " " + pkg.version);
			this.logger.log(this.logger.level.INFO, "Starting the server in " + this.config.env + " at port " + this.config.port + "...");
			this.handleEvents();
			this.loadPlugins();
			this.bootstrap();
		}


		/*
		Section: Private
		 */

		Application.prototype.bootstrap = function() {
			server = new server(this.config.port);
			return server.bind();
		};

		Application.prototype.handleEvents = function() {
			this.on('application:started', function() {
				return this.logger.log(this.logger.level.INFO, "Server started in " + (Date.now() - startTime) + "ms");
			});
			this.on('application:dispose', this.dispose);
			if (process.platform !== 'win32') {
				return process.on('SIGTERM', function() {
					return process.exit(0);
				});
			}
		};

		Application.prototype.loadPlugins = function() {
			var dep, depEngine, depPkg, error, error1, i, len, plugin, plugins, ref;
			plugins = pkg.packageDependencies;
			ref = keys(plugins);
			for (i = 0, len = ref.length; i < len; i++) {
				plugin = ref[i];
				try {
					depPkg = require(plugin + "/package.json");
					depEngine = depPkg.engines['slither-server'];
					if (typeof depEngine === 'undefined') {
						throw new Error('The plugin does not support this server');
					} else if (!semver.satisfies(pkg.version, depEngine)) {
						throw new Error("Compatibility error (" + depEngine + ")");
					} else {
						dep = require(plugin);
					}
				} catch (error1) {
					error = error1;
					this.logger.log(this.logger.level.ERROR, "Cannot load '" + plugin + "' plugin", error);
				}
			}
		};

		Application.prototype.dispose = function() {
			return process.exit(0);
		};

		return Application;

	})(EventEmitter);

}).call(this);
