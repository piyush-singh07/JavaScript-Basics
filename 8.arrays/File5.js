// using split to convert string to array

var a = 'red,blue,green,yellow,white,purple'
console.log(a.split(','))
var arr = a.split(',')
arr.forEach(element => {
    console.log(element)
});



var str = 'hello'
var arr1 = str.split('')
arr1.forEach(el => {
    console.log(el)
})