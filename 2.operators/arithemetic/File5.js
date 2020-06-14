/* concept : if a string which is not numeric with an operator except for + will return us NaN */

var test = "99" - 1 //string that is numeric with operator will give us numeric output
console.log(test)

var test1 = "99" * 9 //string that is numeric with operator will give us numeric output
console.log(test1)

var test2 = "99" / 9 //string that is numeric with operator will give us numeric output

console.log(test2)

var test3 = "99" % 3 //string that is numeric with operator will give us numeric output

console.log(test3)


var demo = "999" + "a" - 10 //999a - 10 = NaN
console.log(demo)

var demo1 = "999a" * 10
var demo2 = "999a" / 10
var demo3 = "999a" % 10

console.log(demo1)
console.log(demo2)
console.log(demo3)