var city = ["Amsterdam", "Dubai", [1, 2, 3, ['a', 'b'], 5, 6, ['c', [true]]], "Nice", "London", "Innsburg", "NewYork", "Delhi", "Helsinki", "Paris"]

for (cities of city) {
    if (Array.isArray(cities)) {
        for (num of cities) {
            if (Array.isArray(num)) {
                for (nums of num) {
                    if (Array.isArray(nums)) {
                        for (num1 of nums) {
                            console.log(num1)
                        }
                    } else {
                        console.log(nums)
                    }



                }
            } else {
                console.log(num)
            }
        }
    } else {
        console.log(cities)
    }
}