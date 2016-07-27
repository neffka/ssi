module.exports = {
	generateId: function() {
		return Math.random().toString(32) + (new Date()).getTime().toString(32);
	}
}