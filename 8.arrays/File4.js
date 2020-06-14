/*
concating of arrays
if using + then output will be string
*/

var a = ['a', 'b', 'c', 'd']
var b = [1, 2, 3, 4]
var c = ['aa', 'bb', 'cc']
console.log(a + b) // a,b,c,d1,2,3,4

// so get in the array form we will use concat method

console.log(a.concat(b))

console.log(a.concat(b, c))

console.log(c.concat(b, a))