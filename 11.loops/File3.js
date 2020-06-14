//nested arrays with loop with for loop

var cities = ['Helsinki', 'London', [1, 2, 3, ['a', 'b', 'c']], 'Delhi', 'New York']
for (city of cities) {
    if (Array.isArray(city)) {
        for (a of city) {
            if (Array.isArray(a)) {
                for (b of a) {
                    console.log(b)
                }
            } else {
                console.log(a)
            }

        }

    } else {
        console.log(city)
    }
}