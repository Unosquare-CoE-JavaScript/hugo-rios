//WRITE THIS FUNCTION IN ES5
/**
 * const add = function(a, b = 2){
 * console.log(arguments)
 * return a + b}
 */

const add = function(a, b){
    b = b || 2
    console.log(arguments)
    return a + b
}