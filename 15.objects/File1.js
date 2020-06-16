/**
 * objects help to declare the properties
 * Objects can be written in two forms
 * 1. Literal notation
 * 2. Object notation
 */

// literal notation

var country = {
    name: 'India',
    capital: 'Delhi',
    population: 90909
}

console.log(country.name);
console.log(country.capital);
console.log(country.population);

// we can add a property in the existing oject also
country.language = ['Hindi', 'Tamil', 'Telugu', 'Punjabi']
country.state = [
    { name: 'Haryana', capital: 'Chandigarh' },
    { name: 'Telangana', capital: 'Hyderabad' },
    { name: 'UP', capital: 'Lucknow' },
    { name: 'Punjab', capital: 'Chandigarh' }
]

console.log(country)

//adding more values 
country.language.push('Marathi')

// accessing a value

country.language.forEach(element => {
    console.log(element)
});
// or 


/*console.log(country.language[0])
console.log(country.language[1])
console.log(country.language[2])
console.log(country.language[3])
*/


//checking type
console.log(typeof(country))


//accessing the states

console.log(country.state[1].name)

console.log(country['state'][2]['name'])