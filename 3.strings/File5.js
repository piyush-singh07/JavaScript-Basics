/*
 slice(start,end)
*/

var demo = 'Washington'

/*
In slice(start,end) ---> end-1 works  consider start till end-1
*/

console.log(demo.slice(0)) //Washington
console.log(demo.slice(1)) //ashington
console.log(demo.slice(2)) //shington
console.log(demo.slice(3)) //hington


console.log(demo.slice(0, 0)) //
console.log(demo.slice(0, 1)) //W
console.log(demo.slice(0, 2)) //Wa
console.log(demo.slice(0, 3)) //Was


console.log(demo.slice(1, 2)) //a
console.log(demo.slice(1, 4)) //ash
console.log(demo.slice(1, 6)) //ashin

/*
How slice works with negative indexes 
*/


console.log(demo.slice(-1)) //n
console.log(demo.slice(-2)) //on
console.log(demo.slice(-3)) //ton
console.log(demo.slice(-4)) //gton


/*
if start index is negative and end is positive  then no output means empty string
*/

console.log(demo.slice(-1, 0)) //empty string
console.log(demo.slice(-2, 2)) //empty string
console.log(demo.slice(-3, 5)) //empty string

/*
if start index is positive and end is negative then select from start and removal from last 
*/

console.log(demo.slice(1, -2)) //ashingt
console.log(demo.slice(2, -1)) //shingto


/*
if start index and end both are negative then usual way but from last
*/

console.log(demo.slice(-3, -1)) //to
console.log(demo.slice(-2, -1)) //o