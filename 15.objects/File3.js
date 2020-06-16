// use of a function in property and this keyword

// var sayHi = {
//     firstName: 'Kevin',
//     lastName: 'John',
//     greet: function() {
//         return `Hi ${firstName} ${lastName} Welcome to JS`
//     }
// }

// console.log(sayHi.greet()) // Here error will come as its expecting vars from global scope

var firstName = 'Kevin'
var lastName = 'John'

var sayHi = {
    firstName: 'Kevin',
    lastName: 'John',
    greet: function() {
        return `Hi ${firstName} ${lastName} Welcome to JS`
    }
}


console.log(sayHi.greet()) //Hi Kevin John Welcome to JS ..... But we want the Kevin name 

//so we will use this keyword


var sayHi = {
    firstName: 'Kevin',
    lastName: 'John',
    greet: function() {
        return `Hi ${this.firstName} ${this.lastName} Welcome to JS`
    }
}