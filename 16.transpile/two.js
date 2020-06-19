/**
 so this is a concept introduced in ES6 for transpilation
 actually in this approach we use import statements if we want to use data from one file to another file
 we require a package called bable , it actually used for JS transpilation for using the backward compatiblity,
 as our node compiler only understand ES5
*/

import table from './one';

console.log(mytable.insert('Student', { name: 'Jack', age: 20 }))
console.log(mytable.find('Employee'))