/*Generator Functions ===> used for paginations
  Used in REACT JS mostly

  Syntax: function * func_name()
  {

  }
  we write yield in plce of console.log so that whenever we want we will yield the value

  We can not call this function directly , we need to assign this function to a variable and then call next() method
  on the variable
*/

function* loop() {
    for (var i = 1; i <= 5; i++) {
        yield i
    }
}

var test = loop()

// do {
//     console.log(test.next())
// }
// while (!test.next().done)

console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())
console.log(test.next())