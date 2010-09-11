(function($) {
	$.contra = function(callback, options) {
		if (typeof callback != 'function') return false;

		function matchKey(e) {
			if (e == options.code[currStep]) {
				currStep++;
				if (currStep >= options.code.length) callback(); // If we reach all of the keys, call the function
			}else{
				currStep = 0;
			}
		};

		var currStep = 0,

		options = options || {};
		options.scope = options.scope || $(document);
		options.code = options.code || [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];

		options.scope.keyup(function(e) {
			matchKey(e.which || e.keyCode); // Good browsers or bad
		});
	};

	$.fn.contra = function(callback, options) {
		var options = options || {};
		options.scope = $(this);

		$.contra(callback, options);
	};

})(jQuery);
