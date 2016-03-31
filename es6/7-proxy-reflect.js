var target = {};
var handler = {
  get: function(target, property) {
    return 35;
  },
  set: function(target, property, value) {
    target[property] = value;
  }};
var proxy = new Proxy(target, handler);

proxy.a; // 35
target.a; // undefined

proxy.a = 5;
proxy.a; // 5
target.a; // 5

// ============================================
var target = {};
var handler = {
  get: function(target, property) {
    return 35;
  },
  set: function(target, property, value) {
    // target[property] = value;
  }};
var proxy = new Proxy(target, handler);

proxy.a; // 35
target.a; // undefined

proxy.a = 5;
proxy.a; // 35
target.a; // undefined