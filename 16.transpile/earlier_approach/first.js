let table = {};

table.insert = (table, obj) => {
        return `insert into ${table} VALUES (${obj.name},${obj.age})`
    },

    table.find = (table) => {
        return `select * from ${table}`
    }

// console.log(db.insert('student', { name: 'Jack', age: 20 }))
// console.log(db.find('student'))

module.exports = table;