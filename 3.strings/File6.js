/*
substring(start,end)
Here in substring negative will not ever be considered , its always considered as 0
*/

var test = 'Washington'
console.log(test.substring(0)) //Washington
console.log(test.substring(1)) //ashington
console.log(test.substring(2)) //shington
console.log(test.substring(3)) //hington


console.log(test.substring(-1)) //Washington
console.log(test.substring(-2)) //Washington
console.log(test.substring(-3)) //Washington
console.log(test.substring(-4)) //Washington


/**
 * if start and end both are positives
 * then behaves same as slice method
 */
console.log(test.substring(1, 3)) //as
console.log(test.substring(2, 5)) //shi


/**
 * if among start and end is negative then 
 * selects a string equal to length of specified positive index value
 */
console.log(test.substring(3, -5)) //Was
console.log(test.substring(-5, 3)) //Was

/**
 * if both start and end is negative then empty string 
 */

console.log(test.substring(-1, -2))
console.log(test.substring(-4, -6))