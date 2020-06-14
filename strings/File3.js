var message = 'I am learning JavaScript'
console.log(message.replace('JavaScript', 'JS'))

var a = 'JAvAScript'

//replacing all A with a 

console.log(a.replace('A', 'a')) //JavAScript

console.log(a.replace(/A/, 'a'))

/*To replace all A's
  //g --> here g means global , i.e., for all
*/
console.log(a.replace(/A/g, 'a'))

var test = '     J a va S c    r i     pt      '

console.log(test.trim()) //J a va S c    r i     pt

console.log(test.trim().replace(/ /, '')) //Ja va S c    r i     pt

//but the spaces between the characters are not replaced so use //g 


console.log(test.trim().replace(/ /g, '')) //JavaScript