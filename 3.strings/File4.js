var a = 'London'

console.log(a.charAt(3)) //d
console.log(a.charAt(9)) // if the specified value itself is not there then returns an empty string 
console.log(typeof(a.charAt(99))) // type will be strin only


console.log(a.indexOf('o')) //1
console.log(a.lastIndexOf('o')) //4
console.log(a.indexOf('z')) // But in this case as the index is not there then it returns -1