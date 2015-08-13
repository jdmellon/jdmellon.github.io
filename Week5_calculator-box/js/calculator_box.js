$(document).ready(function(){
	var total = 0;

	


// Add 10	
$("#a10").click(function(){

	total = total+10
		$("#out")
	 		.html(total);
	 });

// Add 20
 $("#a20").click(function(){
 	total = total+20
		$("#out")
	 		.html(total);
	 });

// Add 30
$("#a30").click(function(){
	total = total+30
		$("#out")
			.html(total);
	});

// Change Background Color to Red
$("#red").click(function(){

		$("#out")
			.css("background-color","red");
	});

// Change Background Color to Blue
$("#blue").click(function(){
		$("#out")
			.css("background-color", "blue");
	});

// Subtract 10
$("#n10").click(function() {
	total = total-10
		$("#out")
			.html(total);
	});

// Subtract 20
$("#n20").click(function() {
	total = total-20
		$("#out")
			.html(total);
	});

// Subtract 30
$("#n30").click(function() {
		total = total-30
		$("#out")
			.html(total);
	});

// Reset Calculator
$("#out").click(function() {
		total = 0
		$("#out")
			.html(total)
			.css("background-color", "white");
	});


// Original Directions
// ----------------------------------------------------------------------

//Do this for a10, a20, a30, n10, n20, n30

//add 10 to the total

//update $("#out") with the new total using the .html() function
	
//Do this for red, out, blue

//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with the .css("background-color", "whatever color") function
});