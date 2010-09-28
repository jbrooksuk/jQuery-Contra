jQuery Contra code
==================

By James Brooks (http://www.jbrooksuk.eu)

The jquery.contra.js allows you to define (built-in) a set of key codes that must be sequentially pressed to activate the callback function.

Options
-------

jquery.contra.js contains a few options which allow you to customize many aspects of it.

* options.scope - which sets where the callback is scoped from
* options.code - an array of keycodes which the user is required to press in sequential order for the callback to be made
* options.time - the time (in milliseconds) the user has ***free*** between each key press, if you don't want to reset the keycode if the user fails to press the next key, set this to false.