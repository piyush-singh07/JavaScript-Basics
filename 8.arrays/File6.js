//nested arrays with loop with flat() method

var cities = ['Helsinki', 'London', [1, 2, 3], 'Delhi', 'New York']

console.log(cities.flat()) //["Helsinki", "London", 1, 2, 3, "Delhi", "New York"]


var cities = ['Helsinki', 'London', [1, 2, 3, ['a', 'b', 'c']], 'Delhi', 'New York']

console.log(cities.flat()) // ["Helsinki", "London", 1, 2, 3, Array(3), "Delhi", "New York"]

console.log(cities.flat(2)) //["Helsinki", "London", 1, 2, 3, "a", "b", "c", "Delhi", "New York"]