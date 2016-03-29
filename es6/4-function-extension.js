var fn1 = function(x = 1, y) {
	return [x, y];
};

var fn2 = function(x, y = 2) {
	return [x, y];
};

console.log("fn1.length: " + fn1.length);
console.log("fn2.length: " + fn2.length);

// Context
var a = [1, 2, 3, 4];
var test1 = function() {
	return this.a;
};

test1(); // [1, 2, 3, 4]

test1.prototype.call([1,2,3]); // [1, 2, 3]

var test2 = () => this.a;

test2(); // [1, 2, 3, 4]

fn2.call({a: [1,2,3]}); // [1, 2, 3, 4]