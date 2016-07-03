(function() {
	var message, type;

	message = require('../utils/message');

	type = 'e'.charCodeAt(0);

	exports.build = function(id, direction) {
		var arr, b;
		arr = new Uint8Array(8);
		b = 0;
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, type);
		b += message.writeInt16(b, arr, id);

		/*
		Append position values
		@todo Sending this makes conflict with the normal movement 
		of the snake. Probably due to a bad calculation of the direction parameters.
		 */
		b += message.writeInt8(b, arr, direction.angle);
		b += message.writeInt8(b, arr, direction.x);
		b += message.writeInt8(b, arr, direction.y);
		return arr;
	};

}).call(this);
