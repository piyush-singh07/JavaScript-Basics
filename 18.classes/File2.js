//Classes with inheritace concept

class Geo {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }
}
class Country extends Geo {

    constructor(name, capital, lat, long) {
        super(lat, long);
        this.name = name;
        this.capital = capital;

    }
}

var country1 = new Country('India', 'Delhi', 10.99, 145.89)

console.log(country1.name)
console.log(country1.capital)
console.log(country1.lat)
console.log(country1.long)