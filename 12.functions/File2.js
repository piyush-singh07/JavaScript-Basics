// Method ==>  When a function is assigned to a variable then it becomes a method


var add = function(a, b) {
    return a + b;
}

console.log(add(8, 6))


// to find out whether odd or even

var isEven = function(a) {
    return a % 2 == 0 ? 'yes' : 'no';
}

console.log(isEven(4))
console.log(isEven(7))