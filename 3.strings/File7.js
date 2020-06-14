/*
substr(start,length)
Here in substring negative will not ever be considered , its always considered as 0
*/

var test = 'Washington'
console.log(test.substr(0)) //Washington
console.log(test.substr(1)) //Washington
console.log(test.substr(2)) //Washington
console.log(test.substr(3)) //Washington

console.log(test.substr(-1)) //n
console.log(test.substr(-2)) //on
console.log(test.substr(-3)) //ton
console.log(test.substr(-4)) //gton

/*
 *if start and end both are positive 
 * select from start index and give a string of the specifies index
 */

console.log(test.substr(2, 4)) //shin
console.log(test.substr(1, 5)) //ashin

/**
 *if start positive and length negative the no output 
 */
console.log(test.substr(2, -4)) //empty


/**
 *if start negative and length positive the output from last  till specified length
 */
console.log(test.substr(-4, 2)) //gt

/*
 * if both are negative then no output as the length can not be negative
 */

console.log(test.substr(-2, -4)) //empty