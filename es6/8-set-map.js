// Set
var set = new Set();
var a = NaN;
var b = NaN;
set.add(a);
set.add(b);
set.add(Infinity);
set.add(Infinity);

// Set {NaN, Infinity}

set
// Set {NaN, Infinity}
set.add([1,2,3])
// Set {NaN, Infinity, [1, 2, 3]}
set.add([1,2,3])
// Set {NaN, Infinity, [1, 2, 3], [1, 2, 3]}
set.add({})
// Set {NaN, Infinity, [1, 2, 3], [1, 2, 3], Object {}}
set.add({})
// Set {NaN, Infinity, [1, 2, 3], [1, 2, 3], Object {}, Object {}}

// Basic operation
set.has([1,2,3]);
// false
set.has({});
// false
set.has(NaN);
// true
set.delete([1,2,3]);
// false
set.delete({});
// false

// ================================================================

// Map
var a = null;
var data = {};
data[a] = "David";
data; // Object {null: "David"}

var aa = null;
data[aa] = "Wanderyt";
data[a]; // Wanderyt
data; // Object {null: "Wanderyt"}


var m = new Map();
var o = {p: "Hello World"};

m.set(o, "content")
m.get(o) // "content"
var oo = {p: "Hello World"}
m.get(oo)
// undefined


var map = new Map([["name", "age", "张三"], ["title", "Author"]]);
map
// Map {"name" => "age", "title" => "Author"}
map.set(undefined, "undefined")
// Map {"name" => "age", "title" => "Author", undefined => "undefined"}
map.get(undefined)
// "undefined"