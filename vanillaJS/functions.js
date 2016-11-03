var x = function (a, b) {return a * b};

console.log( "output from the function x(3,4) → " + x(3,4) );


var output = "output from the function x(3,4) → " + x(3,4);
console.log( output );

function sayHello(name){
	console.log(name);
	if (typeof name !== 'undefined') {
		return "Hello, " + name + "!";
	}
	return "Hello, World!";
}