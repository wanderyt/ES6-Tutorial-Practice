// Test caller and callee
// Both are meaningful when the method is invoked
// Caller: the invoker
// Callee: the method that is invoked

// caller
var a = function() {
  console.log(a.caller);
}
var b = function() {
  a();
}
b();

// callee
// [functionName.]arguments.callee
var a = function() {
  console.log(arguments.callee);
}
var b = function() {
  a();
}
b();

// use callee.length to test whether enough parameters have been passed
var a = function(x,y) {
  console.log(arguments.length)
  console.log(arguments.callee.length);
}
var b = function() {
  a(1);
}
b();