// ES5
// new RegExp(pattern, attributes);
// i: 执行对大小写不敏感的匹配。
// g: 执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
// m: 执行多行匹配。
// 如果 pattern 是正则表达式，而不是字符串，则必须省略该参数。
var reg = new RegExp("xyz", "i");   // /xyz/i
var reg = new RegExp(/xyz/);        // /xyz/
var reg = new RegExp(/xyz/, "i");   // Error

// ES6
var reg = new RegExp(/xyz/ig, "i"); // /xyz/i

// 正确返回字符串长度的函数
function codePointLength(text) {
  var result = text.match(/[\s\S]/gu);
  return result ? result.length : 0;
}

var s = "𠮷𠮷";
s.length // 4
codePointLength(s) // 2

// y修饰符
var s = 'aaa_aa_a';
var r1 = /a+/g;
var r2 = /a+/y;

r1.exec(s) // ["aaa"]
r2.exec(s) // ["aaa"]

r1.exec(s) // ["aa"]
r2.exec(s) // null

// y in split
var str = "#x#";
str.split(/#/g); // ["", "x", ""]
str.split(/#/y); // ["", "x#"]

var REGEX = /a/gy;
"aaxa".replace(REGEX, "-") // '--xa'

/abc/ig.source
// "abc"

/abc/ig.flags
// "gi"