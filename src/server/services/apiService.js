var math = require('../utils/math');

var apiService = (function() {
	var $ = function(db) {
		this.db = db;
		if (this.db) {
			this.users = this.db.collection('botUsers');
			this.world = this.db.collection('world');
			this.kills = this.db.collection('kills');
		};
		return this;
	};

	$.prototype = {
		checkUser: function(args) {
			var $ = this,
				args = args || {};
			return new Promise(function(resolve, reject) {
				$.users.findOne({
					'facebook.id': args.id || 0
				}, function(err, data) {
					if (err) {
						reject(err);
					} else {
						if (data) {
							resolve(data)
						} else {
							$.users.insert({
								facebook: {
									id: args.id,
									name: args.name,
									email: args.email
								}
							}, function(err, data) {
								if (err) {
									reject(err);
								} else {
									resolve(data);
								}
							});
						}
					}
				});
			});
		},
		startSession: function(args) {
			var $ = this,
				args = args || {},
				id = math.generateId();
			return new Promise(function(resolve, reject) {
				$.users.updateOne({
					'facebook.id': args.userId || 0
				}, {
					$push: {
						sessions: {
							id: id,
							startDate: (new Date()).getTime(),
							games: []
						}
					}
				}).then(function() {
					resolve({
						id: id
					});
				});
			});
		},
		startGame: function(args) {
			var $ = this,
				args = args || {},
				id = math.generateId();
			return new Promise(function(resolve, reject) {
				$.users.updateOne({
					'facebook.id': args.userId || 0,
					'sessions.id': args.sessionId || 0
				}, {
					$push: {
						'sessions.games': {
							id: id,
							startDate: (new Date()).getTime(),
							snake: {
								progress: []
							}
						}
					}
				}).then(function() {
					resolve({
						id: id
					});
				});
			});
		},
		endSession: function(args) {
			var $ = this,
				args = args || {};
			return new Promise(function(resolve, reject) {
				$.users.updateOne({
					'facebook.id': args.userId || 0,
					'sessions.id': args.sessionId || 0
				}, {
					$set: {
						'sessions.$': {
							endDate: (new Date()).getTime()
						}
					}
				}).then(function() {
					resolve();
				});
			});
		},
		endGame: function(args) {
			var $ = this,
				args = args || {};
			return new Promise(function(resolve, reject) {
				$.users.updateOne({
					'facebook.id': args.userId || 0,
					'sessions.id': args.sessionId || 0,
					'sessions.games.id': args.gameId || 0
				}, {
					$set: {
						'sessions.games.$': {
							endDate: (new Date()).getTime()
						}
					}
				}).then(function() {
					resolve();
				});
			});
		},
		updateSnake: function(args) {
			var $ = this,
				args = args || {};
			return new Promise(function(resolve, reject) {
				$.users.updateOne({
					'facebook.id': args.userId || 0,
					'sessions.id': args.sessionId || 0,
					'sessions.games.id': args.gameId || 0
				}, {
					$set: {
						'sessions.games.snake.$': {
							$push: {
								progress: {
									date: (new Date()).getTime(),
									length: args.length
								}
							}
						}
					}
				}).then(function() {
					resolve();
				});
			});
		},
		updateLeaderboard: function(args) {
			var $ = this,
				args = args || {};
			return new Promise(function(resolve, reject) {
				$.world.insertOne({
					date: (new Date()).getTime(),
					leaderboard: args.users,
					playersCount: args.playersCount
				}).then(function() {
					resolve();
				});
			});
		},
		addKill: function(args) {
			console.log(args)
			var $ = this,
				args = args || {};
			return new Promise(function(resolve, reject) {
				$.kills.insertOne({
					date: (new Date()).getTime(),
					killer: args.killer,
					victim: args.victim
				}).then(function() {
					resolve();
				});
			});
		}
	}

	return $;
})();

module.exports = apiService;
