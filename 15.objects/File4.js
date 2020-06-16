var obj = {
    a: 10,
    b: 20,
    sum: function() {
        return add(this.a, this.b)
    }
}

function add(a, b) {
    return a + b
}


console.log(obj.sum())