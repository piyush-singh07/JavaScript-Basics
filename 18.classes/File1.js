//classes concept from ES6 

class country {
    constructor(name, capital) {
        this.name = name;
        this.capital = capital;
    }

}


var country1 = new country('India', 'Delhi')
var country2 = new country('USA', 'Washington')
var country3 = new country('England', 'London')

console.log(country1.name)
console.log(country2.name)
console.log(country3.name)