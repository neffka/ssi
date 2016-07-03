(function() {
	var Food;

	module.exports = Food = (function() {

		/*
		Section: Construction
		 */
		function Food(id, x, y, size, color) {
			this.id = id;
			this.x = x;
			this.y = y;
			this.size = size;
			this.color = color;
		}

		return Food;

	})();

}).call(this);
