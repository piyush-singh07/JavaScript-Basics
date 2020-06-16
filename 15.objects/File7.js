var db = {

    insert: (table, obj) => {
        return `insert into ${table} VALUES (${obj.name},${obj.age})`
    },

    find: (table) => {
        return `select * from ${table}`
    }

}


console.log(db.insert('student', { name: 'Jack', age: 20 }))
console.log(db.find('student'))