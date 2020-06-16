// Hoisting in JS is a concept which say that we can ideally call or use a function even before writing it
var max
max = 10
console.log(max)

a = 10

console.log(add(a))

function add(a) {
    return a + a;
}
var a