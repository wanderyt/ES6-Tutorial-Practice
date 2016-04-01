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

// ============================================
var target = function () { return 'I am the target'; };
var handler = {
  apply: function (target, ctx, args) {
    console.log(target);
    console.log(ctx);
    console.log(args);
    return 'I am the proxy';
  }
};

var p = new Proxy(target, handler);

p()
// "I am the proxy"

// =============================================
var david = {
  first_name: "David",
  target: function(last_name = "Ren") {
    return `${this.first_name} ${last_name}`;
  }
};
david.target();

var p = new Proxy(david.target, {
  apply (target, ctx, args) {
    console.log(target);
    console.log(ctx);
    console.log(args);
    return `After proxy, ${ctx.first_name} ${args}`;
  }
})

p("Wanderyt");
// function (last_name = "Ren") {
//   return `${this.first_name} ${last_name}`;
// }
// undefined
// ["Wanderyt"]
// Uncaught TypeError: Cannot read property 'first_name' of undefined(…)
// 最后报错主要是因为这里不存在p的调用环境，如果换成call或apply就可以成功看到结果。
p.call(david, "Wanderyt");
// function (last_name = "Ren") {
//   return `${this.first_name} ${last_name}`;
// }
// Object {first_name: "David"}
// ["Wanderyt"]
// "After proxy, David Wanderyt"

// ===============================================
var obj = {
  name: "wanderyt",
  _name: "david"
};
var p = new Proxy(obj, {
  has: function(target, prop) {
    if (prop[0] === "_") {
      return "not found";
    } else {
      return prop in target;
    }
  }
});

"name" in p; // true
"_name" in p; // true

var obj = {
  name: "wanderyt",
  _name: "david"
};
var p = new Proxy(obj, {
  has: function(target, prop) {
    if (prop[0] === "_") {
      return "";
    } else {
      return prop in target;
    }
  }
});

"name" in p; // true
"_name" in p; // false

// ==============================================
var handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key[0] === '_') {
      return
    }
    return {value: 'tar', writable: true, enumerable: true} // 或者更直接 return {};都会报错
  }
}
var target = { _foo: 'bar', baz: 'tar' };
var proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, 'wat')
//Uncaught TypeError: 'getOwnPropertyDescriptor' on proxy: trap reported non-configurability for property 'wat' which is either non-existant or configurable in the proxy target

var handler = {
  getOwnPropertyDescriptor (target, key) {
    if (key[0] === '_') {
      return
    }
    return { value: 'tar', writable: true, enumerable: true, configurable: true }
  }
}
var target = { _foo: 'bar', baz: 'tar' };
var proxy = new Proxy(target, handler);
Object.getOwnPropertyDescriptor(proxy, 'baz')
// { value: 'tar', writable: true, enumerable: true, configurable: true }

// ====================================================
var target = {};

var handler = {
  ownKeys(target) {
    return "david";
  }
};

var proxy = new Proxy(target, handler);

Object.keys(proxy)
// Uncaught TypeError: CreateListFromArrayLike called on non-object

// =================================================
var david = {name: "david"}
var handler = {has: function(target) {return false;}}
var proxy = new Proxy(david, handler)
name in david; // false
name in proxy; // false
Reflect.has(david, "name"); // true
