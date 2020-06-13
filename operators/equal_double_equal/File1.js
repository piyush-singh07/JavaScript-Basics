/*
== --> compares the content
=== --> compares content as well as type checking
*/
console.log(undefined == undefined)
console.log(undefined === undefined)
console.log(null == null)
console.log(null === null)
console.log(null == undefined)
console.log(null === undefined)

console.log(10 == "10")
console.log(10 == "ten")
console.log(10 === "10")

console.log(10 == 10)
console.log(10 === 10)





// concept:  for arithematic calculation of fractions in JS  takes 64 bit precision

console.log(0.1 + 0.2)
console.log(0.4 - 0.3)

console.log(0.1 + 0.2 == 0.3) //false because 0.30000000004 is not equal to 0.3