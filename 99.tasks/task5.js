// sort an array in reverse order
var arr = [9, 2, 5, 8, 4, 1]

console.log(arr.sort((a, b) => { return a > b ? -1 : +1 }))