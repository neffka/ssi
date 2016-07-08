var User = require('../models/user');

module.exports = {
	setParent: function(params) {
		console.log(params)
		User.update({ 'facebook.id': params.referal }, { parent: params.parent }, {}, function(err, rows) {
			if (err) {
				console.log(err);
			} else {
				console.log(rows)
			}
		});
	}
}
