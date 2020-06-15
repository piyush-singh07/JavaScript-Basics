/**
 * local scope 
 * global scope
 * 
 */

var a = 10

//{}--> making a closure
function add() {
    var b = 20
    return a + b
}


for (i = 0; i < 5; i++) {
    var c = 10 //var 's scope restriction was not followed in if and for so let came in picure
    console.log(a + c)
}

console.log(add())
console.log(a)
console.log(c) // var hoisting --> as c is accessible outside
console.log(b)

for (i = 0; i < 5; i++) {
    let c = 10
    console.log(a + c)
}


console.log(add())
console.log(a)
console.log(c) // let restricted
console.log(b) // var restricted