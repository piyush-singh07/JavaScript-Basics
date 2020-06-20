// inheritance concept using prototype used till ES5

function Geo(lat) {
    this.lat = lat;
    this.long = long;
}


function Country(name, capital, planet) {
    this.name = name;
    this.capital = capital;
    this.planet = 'Earth';
}

Country.prototype = new Geo()
Country.prototype.lat = 9999
Country.prototype.long = 8080
let country1 = new Country('India', 'Delhi')

console.log('-----------')
console.log(country1.name)
console.log(country1.capital)
console.log(country1.planet)
console.log(country1.lat)
console.log(country1.long)