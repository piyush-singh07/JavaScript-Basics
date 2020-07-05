/* Create a one luck Game
 take one input form user
 Generate one number between 1 to 20
 if both match user win
 else user loose */

var testNum = parseFloat(prompt('Enter a number'))
var num = Math.floor(Math.random() * (20 - 1)) + 1
console.log(num)
if (testNum === num) {
    alert('You are lucky')
} else {
    alert('You are unlucky')
}