/*Regex 
 * if match then returns output else returns null
 * only works with the string and if any number is there then convert to string like in case of phonenumber
 * 
 */
// pattern to accept only single character lower case  = ^[a-z]$

var test = 's'
var test1 = 'hello'
console.log(test.match('^[a-z]$')) // if match then returns output
console.log(test1.match('^[a-z]$')) // if not matches then return null

// pattern to accept only any number of characters in lower case  =  ^[a-z]+$

var test = 's'
var test1 = 'hello'
console.log(test.match('^[a-z]+$'))
console.log(test1.match('^[a-z]+$'))

// pattern to accept only any number of characters in lower and upper case  =  ^[a-zA-Z]+$

var test = 'sAz'
var test1 = 'HellO'
var test2 = 'hellOyP90'
console.log(test.match('^[a-zA-Z]+$'))
console.log(test1.match('^[a-zA-Z]+$'))
console.log(test2.match('^[a-zA-Z]+$'))


// pattern to accept only any number of characters in lower and upper case with numbers =  ^[a-zA-Z0-9]+$

var test = 'sAz'
var test1 = 'H2ellO'
var test2 = 'hellOyP90'
console.log(test.match('^[a-zA-Z0-9]+$'))
console.log(test1.match('^[a-zA-Z0-9]+$'))
console.log(test2.match('^[a-zA-Z0-9]+$'))

//pattern to check only numbers like phonenumber

var test = 9090
    //console.log(test.match('^[0-9]+$')) //error as its integer so change to string

var test = "9090"
console.log(test.match('^[0-9]+$'))

// to accept a particular length then we can specify like exact 10 digits only

var test = '9876543210'
console.log(test.match('^[0-9]{10}$'))

var test = '987654'
console.log(test.match('^[0-9]{10}$')) //null

// to accept a particular range of length like 2 and 5 ==> '^[0-9]{2,5}$'

var test = '9876543210'
var test1 = '1'
var test2 = '12'
var test3 = '1234'
var test4 = '12345'
var test5 = '12346'
console.log(test.match('^[0-9]{2,5}$'))
console.log(test1.match('^[0-9]{2,5}$'))
console.log(test2.match('^[0-9]{2,5}$'))
console.log(test3.match('^[0-9]{2,5}$'))
console.log(test4.match('^[0-9]{2,5}$'))
console.log(test5.match('^[0-9]{2,5}$'))