$(document).ready(function() {
    "use strict";

    /* ------------------  LOADING SCREEN ------------------ */

    $(window).on("load", function() {
        $(".sec-preloader").fadeOut(800);
        $(".sec-preloader").remove(800);
    });
	
	setTimeout(function(){ 
    $('.preloader').css('display', 'none');
	}, 2000); // it will remove after 5 seconds

}(jQuery));