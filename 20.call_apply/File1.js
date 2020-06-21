/* This example shows the difference between call() and apply()
        call(object,arguments)
        apply(object, array of arguments)
*/

var obj1 = {
    num: 2
}

var obj2 = {
    num: 9
}

var addToThis = function(a, b, c) {
    return this.num + a + b + c;
}


/* console.log(addToThis.call(obj1, 3))
console.log(addToThis.call(obj2, 3)) */

console.log(addToThis.call(obj1, 1, 2, 3))
console.log(addToThis.call(obj2, 1, 2, 3))
console.log(addToThis.apply(obj1, [1, 2, 3]))
console.log(addToThis.apply(obj2, [1, 2, 3]))