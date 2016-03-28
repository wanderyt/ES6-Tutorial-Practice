// isNaN vs Number.isNaN
isNaN("abc"); // true
Number.isNaN("abc"); // false

isFinite(25) // true
isFinite("25") // true
Number.isFinite(25) // true
Number.isFinite("25") // false

isNaN(NaN) // true
isNaN("NaN") // true
Number.isNaN(NaN) // true
Number.isNaN("NaN") // false

// float
0.1 + 0.2
// 0.30000000000000004
0.1 + 0.2 - 0.3
// 5.551115123125783e-17
5.551115123125783e-17.toFixed(20)
// '0.00000000000000005551'
5.551115123125783e-17 < Number.EPSILON
// true