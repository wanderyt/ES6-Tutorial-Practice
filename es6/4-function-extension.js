var fn1 = function(x = 1, y) {
	return [x, y];
};

var fn2 = function(x, y = 2) {
	return [x, y];
};

console.log("fn1.length: " + fn1.length);
console.log("fn2.length: " + fn2.length);