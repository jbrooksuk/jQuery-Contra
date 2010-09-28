/*
 *
 *      jQuery Conta Code (jquery.contra.js)
 *      Konami Contra code implemented into jQuery
 *      (http://en.wikipedia.org/wiki/Konami_Code)
 *
 *      Copyright (c) 2010 James Brooks (http://www.jbrooksuk.eu)
 *
 *      Uses jQuery JavaScript library (http://www.jquery.com)
 *  
*/

( function( $ ) {

	$.contra = function( callback, options ) {
		if ( typeof callback != 'function' ) return false;
        
        var currStep = 0, pressKey;
        var timerStarted = false, keyTimer;
        
		options = options || {};
		options.scope = options.scope || $( document );
		options.code = options.code || [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
        options.time = options.time || 2500; // Milliseconds or false

		options.scope.keyup( function( e ) {
            pressKey = e.which || e.keyCode;

            if ( pressKey === options.code[currStep] ) {            
                if ( !timerStarted && options.time != false ) {
                    keyTimer = setTimeout(function( time ) {
                        timerStarted = false;
                        clearTimeout( keyTimer );
                        currStep = 0;
                    }, options.time );
                }
                
                currStep++;
                timerStarted = true;
                
                if ( currStep >= options.code.length ) {
                    callback( );
                    timerStarted = false;
                    clearTimeout( keyTimer );
                    currStep = 0;
                }
            }else{
                currStep = 0;
                timerStarted = false;
                clearTimeout( keyTimer );
            }
		});
	};

	$.fn.contra = function( callback, options ) {
		var options = options || {};
		options.scope = $( this );

		$.contra( callback, options );
	};

} )( jQuery );
