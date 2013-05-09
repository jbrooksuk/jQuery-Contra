# jQuery Contra Code
Easily create customizable Contra Code style Easter-eggs in your web application.

# Usage
Getting up and running is really easy!

    $.contra(config);

# Example
	
	$.contra({
		begin: function() {
			console.log("The user has begun entering the contra code.");
		},
		fail: function() {
			console.log("Fail!");
		},
		success: function() {
			alert("You're a genius!");
		}
	});

# Configuration
jQuery Contra contains a few options which allow you to customize many aspects of it.

- `config.scope` - The scope in which to bind key presses to.
- `config.code`  - Array of keycodes to step through.
- `config.time`  - The amount of time in milliseconds that the user must press the next key in the sequence. Optionally, if there is no timeout, use `false`.

jQuery Contra also supports a few optional callback functions. These are useful in a couple of scenarios:

1. Tracking successful Contra codes.
2. Tracking the fail rate.
3. Performing actions before the contra code is completed/failed.

The callback functions are:

- `config.fail`    - Called when the user has started entering the Contra code, but failed to hit the next key in the sequence correctly.
- `config.success` - After the keycodes have been successfully entered, this will be called.
- `config.begin`   - This is called after the user hits the first key in the sequence.

# License
MIT [http://jbrooksuk.mit-license.org](http://jbrooksuk.mit-license.org)