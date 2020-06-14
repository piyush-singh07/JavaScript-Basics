/*
 * slice() ---> does not change the original array and just takes out the elements  
 
   splice() ---> modifies the original array based on the specified values
 */

var cities = ['Helsinki', 'London', 'Delhi', 'New York']

//console.log(cities.slice(2, 4))
//console.log(cities.slice(1, 4))
console.log(cities)
cities.splice(1, 0, 'Mumbai')
console.log(cities)

cities.splice(3, 0, 'Hyderabad', 'Innsburg')
console.log(cities)

cities.splice(2, 1, 'HongKong')
console.log(cities)


//just removing
cities.splice(3, 2)
console.log(cities)

console.log(cities.indexOf('HongKong'))
console.log(cities.indexOf('Haryana'))