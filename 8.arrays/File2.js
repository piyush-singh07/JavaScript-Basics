/*
push()  ---> add in last
pop()   ---> remove from last
shift() ---> remove from start
unshift() ---> add in start

These all modifies the original array
*/
var cities = ['Helsinki', 'London', 'Delhi', 'New York']
cities.push('Nairobi')
console.log(cities)
var popped = cities.pop()
console.log(popped)
console.log(cities)
cities.unshift('Bogota')
console.log(cities)
var shiftted = cities.shift()
console.log(shiftted)
console.log(cities)

/*
we can not remove from middle using these methods
like pop(3) or shift(4) will not work rather will remove fro last and start only
for this case we should go for splice method
*/