(function() {
	var message, type;

	message = require('../utils/message');

	type = 'G'.charCodeAt(0);

	exports.build = function(id, x, y) {
		var b, buffer;
		buffer = new Uint8Array(11);
		b = 0;
		b += message.writeInt8(b, buffer, 0);
		b += message.writeInt8(b, buffer, 0);
		b += message.writeInt8(b, buffer, type);
		b += message.writeInt16(b, buffer, id);
		b += message.writeInt8(b, buffer, x);
		b += message.writeInt8(b, buffer, y);
		return buffer;
	};

}).call(this);
