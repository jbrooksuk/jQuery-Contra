/*
* jQuery Conta Code (jquery.contra.js)
* Konami Contra code implemented in jQuery
* (http://en.wikipedia.org/wiki/Konami_Code)
*
* @author James Brooks <jbrooksuk@me.com>
* @website http://james.brooks.so
* @license MIT - http://jbrooksuk.mit-license.org
*/

(function($) {
	$.contra = function(config) {		
		var currStep = 0, pressKey, timerStarted = false, keyTimer;
		
		config         = config || {};
		config.begin   = config.begin || false;
		config.success = config.success || false;
		config.scope   = config.scope || $(document);
		config.code    = config.code || [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13]; // Up, Up, Down, Down, Left, Right, Left, Right, B, A, Enter
		config.time    = config.time || 3000; // Time in ms or false
		config.fail = config.fail || false;

		config.scope.keyup(function(e) {
			pressKey = e.which || e.keyCode;

			if(pressKey === config.code[currStep]) {
				if(!timerStarted && config.time !== false) {
					if(typeof config.begin === "function") config.begin();
					keyTimer = setTimeout(function(time) {
						timerStarted = false;
						clearTimeout(keyTimer);
						currStep = 0;
					}, config.time);
				}
				
				currStep++;
				timerStarted = true;
				
				if(currStep >= config.code.length) {
					console.log("Success");
					if(typeof config.success === "function") config.success();
					timerStarted = false;
					clearTimeout(keyTimer);
					currStep = 0;
				}
			}else{
				// Call the timeout function
				if(typeof config.fail === "function") config.fail();
				currStep     = 0;
				timerStarted = false;
				clearTimeout(keyTimer);
			}
		});
	};

	$.fn.contra = function(config) {
		var config = config || {};
		config.scope = $(this);

		$.contra(config);
	};
})(jQuery);