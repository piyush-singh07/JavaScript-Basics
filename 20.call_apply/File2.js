var person = {
    fullname: function(city, country) {
        return `${this.firstname}_${this.lastname}_${city}_${country}`
    }
}


var john = {
    firstname: 'John',
    lastname: 'Eva'
}

console.log(person.fullname.call(john, 'Delhi', 'India')) //John_Eva_Delhi_India

console.log(person.fullname.call(john, ['Delhi', 'India'])) //John_Eva_Delhi,India_undefined

console.log(person.fullname.apply(john, 'Delhi', 'India')) //error

console.log(person.fullname.apply(john, ['Delhi', 'India']))