$(document).ready(function(){


});

$( ".animal" ).ready(function() {
$("#first").animate({
	marginLeft: "7in",
	opacity: 0,

}, 1000, function() {
    // Animation complete.
 });

$("#second").slideUp("slow", function(){

	});
});

$("section").ready(function(){
	$("h1").animate({
		"font-size":"20px",
		"top": "100",
	}, 1000, function() {
	});
});