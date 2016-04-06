var arrayLike = {
    0: "david",
    1: "wanderyt",
    2: "yutao",
    length: 3
};

for(let i of arrayLike) {
    console.log(i);
}
// Uncaught TypeError: arrayLike[Symbol.iterator] is not a function

arrayLike[Symbol.iterator] = Array.prototype[Symbol.iterator];
for(let i of arrayLike) {
    console.log(i);
}
// david
// wanderyt
// yutao

// ===========================================================
var str = new String("hello world");

[...str] // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]

var index = -1;
str[Symbol.iterator] = function() {
  return {
    next: function() {
      if (index < str.length) {
        index++;
        return { value: str[index], done: false };
      } else {
        return { done: true };
      }
    },
    return: function() {
        console.log("returned....")
    }
  };
};

for(let i of str) {
    if(i === "w") {
        console.log("new word!!!");
        break;
    } else {
        console.log(i);
    }
}

// ==============================================================
var arr = [3, 5, 7];
arr.foo = 'hello';
arr[7] = "david";

for (let i in arr) {
  console.log(i); // 0, 1, 2, 7, "foo"
}

for (let i of arr) {
  console.log(i); // 3, 5, 7, undefined x 4, "david"
}

// =============================================================
var es6 = {
  edition: 6,
  committee: "TC39",
  standard: "ECMA-262"
};

es6[Symbol.iterator] = Array.prototype[Symbol.iterator];
for(let i of es6) {
    console.log(i);
}