var David = function() {
    this.name = "David";
    this["a" + "ge"] = 26;
};

var Programmer = function() {
    this.type = "Programmer";
};

David.prototype = new Programmer();

var david = new David();

Object.defineProperty(david, "sex", {
    enumerable: false,
    value: "male"
});

Object.defineProperty(david, "company", {
    enumerable: true,
    value: "SAP"
});

// for...in
for(var i in david) {
    console.log(i);
}

/*
name
age
company
type
*/

// Object.keys
Object.keys(david)
// ["name", "age", "company"]

// Object.getOwnPropertyNames
Object.getOwnPropertyNames(david)
// ["name", "age", "sex", "company"]

// Object.getOwnPropertySymbols
Object.getOwnPropertySymbols(david)
// []

// Reflect.ownKeys
Reflect.ownKeys(david)
// ["name", "age", "sex", "company"]

// Reflect.enumerate
Reflect.enumerate(david);
var [...arr] = Reflect.enumerate(david);
arr;
// ["name", "age", "company", "type"]


// __proto__

Object.getPrototypeOf({})
// Object {}
Object.getPrototypeOf({__proto__: null})
// null
Object.getPrototypeOf({__proto__: {a: "name"}})
// Object {a: "name"}

var a = {
    x: 10
};

var b = {};

Object.setPrototypeOf(a, b);
// 等价于a.__proto__ = b;

b.x = 5;
b.y = 10;
b.z = 20;

a.x; // 10
a.y; // 10
a.z; // 20
