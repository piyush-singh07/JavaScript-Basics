let table = {};

table.insert = (table, obj) => {
        return `insert into ${table} VALUES (${obj.name},${obj.age})`
    },

    table.find = (table) => {
        return `select * from ${table}`
    }

export default table;