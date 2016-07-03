(function() {
	var arr, b, message;

	message = require('../utils/message');

	arr = new Uint8Array(4);

	b = 0;

	b += message.writeInt8(b, arr, 0);

	b += message.writeInt8(b, arr, 0);

	b += message.writeInt8(b, arr, 'v'.charCodeAt(0));

	b += message.writeInt8(b, arr, 0);

	exports.buffer = arr;

}).call(this);
