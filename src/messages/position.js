(function() {
	var message, type;

	message = require('../utils/message');

	type = 'g'.charCodeAt(0);

	exports.build = function(id, x, y) {
		var arr, b;
		arr = new Uint8Array(11);
		b = 0;
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, type);
		b += message.writeInt16(b, arr, id);
		b += message.writeInt24(b, arr, x);
		b += message.writeInt24(b, arr, y);
		return arr;
	};

}).call(this);
