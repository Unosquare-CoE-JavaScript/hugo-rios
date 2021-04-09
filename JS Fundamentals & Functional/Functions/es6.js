//CONVERT THE FOLLOWING LINES OF CODE INTO ES6
/**
 * var increment = function(n){ return n +1 }
 * var square = function(n){ return n * n }
 * var doMathSoIdontHaveTo = function(n, func){ return func(n) }
 * doMathSoIdontHaveTo(5, square)
 * doMathSoIdontHaveTo(4, increment)
 */
const increment = n => n + 1
const square = n => n * n
const doMathSoIdontHaveTo = (n, func) => func(n)
doMathSoIdontHaveTo(5, square)
doMathSoIdontHaveTo(4, increment)