# ES6-Tutorial-Practice

根据[ruanyf的ES6教程](http://es6.ruanyifeng.com/#README)来做练习

学习了几章之后感觉还是有必要记录一下写过的练习代码。

另外还写了一些学习感想。

[wanderyt.github.io](wanderyt.github.io)

## install babel

    $ npm install babel babel-core --save-dev

## eslint for es6

添加`.eslintrc`文件到项目根目录下，并编辑eslint的设置。

```json
{
  "globals": {
    "jQuery": true,
    "$": true
  },
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "rules": {
    "quotes": [1, "double"]
  }
}
```

environment中设置es6为true，就会看到对es6的支持，比如反引号（`）的出现就不会报错了。