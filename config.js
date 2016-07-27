module.exports = {
	server: {
		serverPort: process.env.PORT || 8000,
		serverName: "MegaSlither",
		serverUrl: "megaslither.io",
		"gameservers": [{
			"ip": "127.0.0.1",
			"po": 8080
		}]
	},
	auth: {
		facebook: {
			'clientID': '867585170013996',
			'clientSecret': 'd3168b7596739868dcc6f93c79e33f9d',
			'callbackURL': 'http://megaslither.io/auth/facebook/callback'
		}
	},
	db: {
		url: 'mongodb://46.101.143.28:27017/slither'
	}
};
