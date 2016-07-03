(function() {
	var message, type;

	message = require('../utils/message');

	type = 'F'.charCodeAt(0);

	exports.build = function(foods) {
		var arr, b, food, i;
		arr = new Uint8Array(3 + (6 * foods.length));
		b = 0;
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, 0);
		b += message.writeInt8(b, arr, type);
		i = 0;
		while (i < foods.length) {
			food = foods[i];
			b += message.writeInt8(b, arr, food.color);
			b += message.writeInt16(b, arr, food.x);
			b += message.writeInt16(b, arr, food.y);
			b += message.writeInt8(b, arr, food.color);
			i++;
		}
		return arr;
	};

}).call(this);
