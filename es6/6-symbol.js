var log = {};

log.levels = {
  DEBUG: Symbol("debug"),
  INFO: Symbol("info"),
  WARN: Symbol("warn"),
};

var notification = {
    [log.levels.DEBUG]: "Debug",
    [log.levels.INFO]: "Info",
    [log.levels.WARN]: "Warn"
};

notification[log.levels.DEBUG];

var davidLevel = Symbol("debug");
notification[davidLevel]; // undefined

// Applied

var size = Symbol('size');

class Collection {
  constructor() {
    this[size] = 0;
  }

  add(item) {
    this[this[size]] = item;
    this[size]++;
  }

  static sizeOf(instance) {
    return instance[size];
  }
}

var x = new Collection();
Collection.sizeOf(x); // 0
x.add("foo");
Collection.sizeOf(x); // 1

var y = new Collection();
Collection.sizeOf(y); // 0

// Symbol.isConcatSpreadable

var obj = {name: "david", age: 16};
obj[Symbol.isConcatSpreadable] = true;

["a", "b"].concat(obj, "e");
// ["a", "b", "e"]

// Symbol.toPrimitive

var obj = {
  [Symbol.toPrimitive](hint) {
    switch (hint) {
      case "number":
        return 123;
      case "string":
        return "str";
      case "default":
        return "default";
      default:
        throw new Error();
     }
   }
};

2 * obj // 246
3 + obj // '3default'
obj === "default" // false
"" + obj === "default" // true
String(obj) // 'str'

// Symbol.toPrimitive不是一个function，直接调用会报错
Symbol.toPrimitive(obj, 'default'); // Error
// 如果想直接调用
obj[Symbol.toPrimitive]("default"); // "default"
obj[Symbol.toPrimitive]("string");  // "str"
obj[Symbol.toPrimitive]("defaul");  // Uncaught Error...