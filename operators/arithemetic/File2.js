/* Concept : How + operator works with string and numbers 
string + string = string (concat)
string + number = string (concat)
number + string = string (concat)
number + number = number (addition of numeric) */

var a = 'hello'
var b = 10
var c = a + b // string + number = string

console.log(c) // hello10

var d = ' How are you?'
var e = a + d // string +string = string

console.log(e) //hello how are you?

var f = b + a // number +string = string

console.log(f) //10hello

var g = 100
var h = b + g // number + number = number 

console.log(h) //110