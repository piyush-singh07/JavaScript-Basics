/*
Math.floor()
Math.ceil()
Math.round()
*/

console.log(Math.floor(10.3))
console.log(Math.ceil(10.3))
console.log(Math.round(10.3))
console.log(Math.round(10.4))
console.log(Math.round(10.5))


/*
Math.random() examples
generates a floating number greater than equal to 0 and less than 1
*/
console.log(Math.random())

//a two digit random number
//but decimal will come
console.log(Math.random() * 100)


console.log(Math.floor(Math.random() * 100))

/*generate a random number between min and max
    Math.ramdom()*(max-min)+min
*/
//random between 50 and 100
console.log(Math.floor((Math.random() * 50) + 50))