function convert(degree) {
// If argument is = to "C"
    if (degree == "C") {

    	// Assigns the variable F = the value of #c * 9 / 5 + 32
        var F = document.getElementById("c").value * 9 / 5 + 32;
        // Retrives element by #f and rounds value
		document.getElementById("f").value = Math.round(F);

    } else {
    	// Assigns the variable C = the value of #f - 32 * 5 / 9
        var C = (document.getElementById("f").value -32) * 5 / 9;
        // Retrives element by #c and rounds value
        document.getElementById("c").value = Math.round(C);

    }

}
// Retrieves element by #c and applies convert function once "on key up" action is performed
document.getElementById('c').onkeyup = function() {
	convert('C');
};

// Applies "areaOfTriangle" function when variable answer = 0.5 * base * height. Use "alert" action to retrieve variable answer.
function areaOfTriangle(base, height) {
	var answer = 0.5 * base * height;
	alert(answer);
}
// Applies "addingNumbers" function when variable answer is a + b. Use "alert" action to retrieve variable answer.
function addingNumbers (a, b) {
	var answer = a + b;
	alert(answer);
}
// Applies "multiplyNumbers" function when variable answer is a * b. Use "alert" action to retrieve variable answer.
function multiplyNumbers (a, b) {
	var answer = a * b;
	alert(answer);
}
// Applies "beerCost" function when variable answer is numBeers * costPerBeer. Applies "$" string to variable answer. Use "alert" action to retrieve "$" + variable answer .
function beerCost(numBeers, costPerBeer) {
	var ans = numBeers * costPerBeer;
	ans = "$" + ans;
	alert(ans);
}
// Applies "volumeOfRectangle" function when variable answer is w * l * h. Console log prints "volumeOfRectangle" function.
function volumeOfRectangle(w, l, h) {
	console.log(w * l * h);
}

