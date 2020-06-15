//Map and Filter

//Map gives the same length as the original array

//Filter returns all the values which is true for the given condition

var cities = ['Helsinki', 'London', 'Delhi', 'New York']

cities.map((city) => { console.log(city) })

console.log(cities.map(city => { return city }))

console.log(cities.filter(city => { return city.length > 5 }))