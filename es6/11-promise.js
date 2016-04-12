var someAsyncThing = function() {
  return new Promise(function(resolve, reject) {
    // 下面一行会报错，因为x没有声明
    resolve(x + 2); // or var y = x + 2;
  });
};

var p = someAsyncThing();
p.then(function() {
  console.log('everything is great');
})
.catch(function(err) {
  console.log(err);
});
// Chrome报错，Firefox不报错

// =================================================
var promise = new Promise(function(resolve, reject) {
  resolve("ok");
  setTimeout(function() { throw new Error('test') }, 0)
});
promise.then(function(value) { console.log(value) });

// =================================================
var promise = new Promise(function(resolve, reject) {
  resolve("Ok");
  reject("Error");
  resolve("Ok again");
});
promise.then(function(value) {
  console.log(value);
  throw new Error("Error");
})
.catch(function(err) {
  console.log(err);
})
.then(function() {
  console.log("continue...");
});
// Ok
// Error: Error(…)
// continue..
promise; // Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: "Ok"}
promise.then(function(value) {
  console.log(value);
});
promise;
// Ok
// Promise {[[PromiseStatus]]: "resolved", [[PromiseValue]]: "Ok"}

// ====================================================
var p = Promise.resolve(function() {
  console.log("Hello");
});

p.then(function (s){
  console.log(s)
});
// ====================================================
var p = Promise.reject('出错了');
// 等同于
var p = new Promise((resolve, reject) => reject('出错了'))

p.then(null, function (s){
  console.log(s)
});










