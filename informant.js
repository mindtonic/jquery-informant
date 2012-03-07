(function( $ ) {
  $.fn.informant = function() {
  	
  	// Variable that contains the Popup Box
  	var infoBox = $(this).next();
  	
  	// Add the close button to the Popup Box
		infoBox.prepend('<a href="javascript:;" class="closeInformant">close</a>');
		
		// Show the Popup Box when the element is clicked
		this.click(function() { infoBox.fadeToggle(); });
		
		// Close the Popup Box if the close button is clicked
		infoBox.find('.closeInformant').click(function() { infoBox.fadeOut(); });

  };
})( jQuery );