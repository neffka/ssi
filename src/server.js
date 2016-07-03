(function() {
	var Server,
		ws = require('ws'),
		url = require('url'),
		snake = require('./entities/snake'),
		food = require('./entities/food'),
		messages = require('./messages'),
		logger = require('./utils/logger'),
		message = require('./utils/message'),
		math = require('./utils/math');

	module.exports = Server = (function() {

		/*
		Section: Properties
		 */
		Server.prototype.logger = new logger(Server);

		Server.prototype.server = null;

		Server.prototype.counter = 0;

		Server.prototype.clients = [];

		Server.prototype.time = new Date;

		Server.prototype.tick = 0;

		Server.prototype.foods = [];


		/*
		Section: Construction
		 */

		function Server(port) {
			this.port = port;
			global.Server = this;
		}


		/*
		Section: Public
		 */

		Server.prototype.bind = function() {
			this.server = new ws.Server({
				port: this.port,
				path: '/slither'
			}, (function(_this) {
				return function() {
					_this.logger.log(_this.logger.level.INFO, "Listening for connections");
					return _this.generateFood(global.Application.config['start-food']);
				};
			})(this));
			this.server.on('connection', this.handleConnection.bind(this));
			return this.server.on('error', this.handleError.bind(this));
		};


		/*
		Section: Private
		 */

		Server.prototype.handleConnection = function(conn) {
			var close, origin, params;
			conn.binaryType = 'arraybuffer';
			if (this.clients.length >= global.Application.config['max-connections']) {
				conn.close();
				return;
			}
			params = url.parse(conn.upgradeReq.url, true).query;
			origin = conn.upgradeReq.headers.origin;
			if (!(global.Application.config.origins.indexOf(origin) > -1)) {
				conn.close();
				return;
			}
			conn.id = ++this.counter;
			conn.remoteAddress = conn._socket.remoteAddress;
			this.clients[conn.id] = conn;
			close = (function(_this) {
				return function(id) {
					_this.logger.log(_this.logger.level.DEBUG, 'Connection closed.');
					conn.send = function() {};
					return delete _this.clients[id];
				};
			})(this);
			conn.on('message', this.handleMessage.bind(this, conn));
			conn.on('error', close.bind(this, conn.id));
			conn.on('close', close.bind(this, conn.id));
			return this.send(conn.id, messages.initial.buffer);
		};

		Server.prototype.handleMessage = function(conn, data) {
			var degrees, firstByte, name, radians, secondByte, skin, speed, value, x, y;
			if (data.length === 0) {
				return;
			}
			if (data.length === 1) {
				value = message.readInt8(0, data);
				if (value <= 250) {
					console.log('Snake going to', value);
					radians = (value * 1.44) * (Math.PI / 180);
					degrees = 0;
					speed = 1;
					x = Math.cos(radians) + 1 * speed;
					y = Math.sin(radians) + 1 * speed;
					conn.snake.direction.x = x * 125;
					conn.snake.direction.y = y * 125;
					return conn.snake.direction.angle = value * 1.44;
				} else if (value === 253) {
					return console.log('Snake in speed mode -', value);
				} else if (value === 254) {
					return console.log('Snake in normal mode -', value);
				} else if (value === 251) {
					return this.send(conn.id, messages.pong.buffer);
				}
			} else {

				/*
				firstByte:
				  115 - 's'
				 */
				firstByte = message.readInt8(0, data);
				secondByte = message.readInt8(1, data);
				if (firstByte === 115 && secondByte === 5) {
					skin = message.readInt8(2, data);
					name = message.readString(3, data, data.byteLength);
					conn.snake = new snake(conn.id, name, {
						x: 28907.6 * 5,
						y: 21137.4 * 5
					}, skin);
					this.broadcast(messages.snake.build(conn.snake));
					this.logger.log(this.logger.level.DEBUG, "A new snake called " + conn.snake.name + " was connected!");
					this.spawnSnakes(conn.id);
					conn.snake.update = setInterval((function(_this) {
						return function() {
							conn.snake.body.x += Math.cos((Math.PI / 180) * conn.snake.direction.angle) * 170;
							conn.snake.body.y += Math.sin((Math.PI / 180) * conn.snake.direction.angle) * 170;
							return _this.broadcast(messages.movement.build(conn.snake.id, conn.snake.direction.x, conn.snake.direction.y));
						};
					})(this), 120);
					this.send(conn.id, messages.food.build(this.foods));
					this.send(conn.id, messages.leaderboard.build([conn], 1, [conn]));
					this.send(conn.id, messages.highscore.build('iiegor', 'A high score message'));
					return this.send(conn.id, messages.minimap.build(this.foods));
				} else if (firstByte === 109) {
					return console.log('->', secondByte);
				} else {
					return this.logger.log(this.logger.level.ERROR, "Unhandled message " + (String.fromCharCode(firstByte)), null);
				}
			}
		};

		Server.prototype.handleError = function(e) {
			switch (e.code) {
				case 'EADDRINUSE':
					return this.logger.log(this.logger.level.ERROR, 'The address is already in use, change the port number', e);
				default:
					return this.logger.log(this.logger.level.ERROR, e.message, e);
			}
		};

		Server.prototype.generateFood = function(amount) {
			var color, i, id, results, size, x, y;
			i = 0;
			results = [];
			while (i < amount) {
				x = math.randomInt(0, 65535);
				y = math.randomInt(0, 65535);
				id = x * global.Application.config['map-size'] * 3 + y;
				color = math.randomInt(0, global.Application.config['food-colors']);
				size = math.randomInt(global.Application.config['food-size'][0], global.Application.config['food-size'][1]);
				this.foods.push(new food(id, x, y, size, color));
				results.push(i++);
			}
			return results;
		};

		Server.prototype.spawnSnakes = function(id) {
			return this.clients.forEach((function(_this) {
				return function(client) {
					if (client.id !== id) {
						return _this.send(id, messages.snake.build(client.snake));
					}
				};
			})(this));
		};

		Server.prototype.spawnFoodChunks = function(id, amount) {
			var chunk, j, len, ref, results;
			ref = math.chunk(this.foods, amount);
			results = [];
			for (j = 0, len = ref.length; j < len; j++) {
				chunk = ref[j];
				results.push(this.send(id, messages.food.build(chunk)));
			}
			return results;
		};

		Server.prototype.send = function(id, data) {
			return this.clients[id].send(data, {
				binary: true
			});
		};

		Server.prototype.broadcast = function(data) {
			var client, j, len, ref, results;
			ref = this.clients;
			results = [];
			for (j = 0, len = ref.length; j < len; j++) {
				client = ref[j];
				results.push(client != null ? client.send(data, {
					binary: true
				}) : void 0);
			}
			return results;
		};

		Server.prototype.close = function() {
			return this.server.close();
		};

		return Server;

	})();

}).call(this);
