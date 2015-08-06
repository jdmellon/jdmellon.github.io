$(document).ready(function(){
	var total = 0;

	//Do this for a10, a20, a30, n10, n20, n30
	
$("#a10").click(function(){
		$("#out")
	 		.html(10);
	 });


 $("#a20").click(function(){
		$("#out")
	 		.html(20);
	 });


$("#a30").click(function(){
		$("#out")
			.html(30);
	});

$("#red").click(function(){
		$("#red")
			.css("background-color","red");
	});

$("#blue").click(function(){
		$("#blue")
			.css("background-color", "blue");
	});

$("#n10").click(function() {
		$("#out")
			.html(-10);
	});

$("#n20").click(function() {
		$("#out")
			.html(-20);
	});

$("#n30").click(function() {
		$("#out")
			.html(-30);
	});



	//add 10 to the total

		//update $("#out") with the new total using the .html() function
	
//Do this for red, out, blue
	//Write three click functions, one for each of the #red #blue and #out divs, updating the background color with the .css("background-color", "whatever color") function
});