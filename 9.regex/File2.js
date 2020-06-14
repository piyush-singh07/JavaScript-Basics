// regex for email   ^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$


var email = 'hello123@gmail.com'
console.log(email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$'))

var email = '@gmail.com'
console.log(email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')) //null

var email = 'hello123@.com'
console.log(email.match('^([a-zA-Z0-9]+)@([a-zA-Z0-9]+)\.([a-z]{2,5})$')) //null