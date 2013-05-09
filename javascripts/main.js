var startedContra = false;
$(function() {
	var $docChildren = $(document).children();
	$.contra({ 
		begin: function() {
			if($docChildren.is(":visible") === false) $docChildren.show(); // Reset if hidden.
			
			startedContra = !startedContra;

			if(startedContra) console.log("Begun Contra code.");
		},
		fail: function() {
			if(startedContra) {
				console.log("Unlucky!");
				startedContra = false;
			}
		},
		success: function() {
			$docChildren.fadeOut();
			startedContra = false;
		}
	});
}); 