function* helloWorldGenerator() {
  yield 'hello';
  return 'world';
  return 'ending';
}

var hw = helloWorldGenerator();
hw.next()
// Object {value: "hello", done: false}
hw.next()
// Object {value: "world", done: true}
hw.next()
// Object {value: undefined, done: true}

// =================================================
var generator = function* () {
    var input = (yield 123) + (yield 234);
    return input;
}

var g = generator();
g.next()
// Object {value: 123, done: false}
g.next()
// Object {value: 234, done: false}
g.next()
// Object {value: NaN, done: true} (undefined + undefined = NaN)

// ==================================================
var generator = function* () {
  for(let i = 0; i < 10; i++) {
    try {
      var value = yield i;
      console.log(i);
    } catch(e) {
      console.log("catch exception...");
    }
  }
};

var g = generator();
g.throw();

// ------------- Comparison -------------//

var generator = function* () {
  for(let i = 0; i < 10; i++) {
    try {
      var value = yield i;
      console.log(i);
    } catch(e) {
      console.log("catch exception...");
    }
  }
};

var g = generator();
g.next();
g.throw();
g.next();
// ==================================================
