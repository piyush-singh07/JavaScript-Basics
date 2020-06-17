/* Take input of array in which save user name;
if user name start with (A,C,E,G,I,K)
Say you come to office on even day 
else if user name start with (B,D,F,H,J,L)
Say you come to office on ODD day
eles you should take leave
at last or any point we can check all the user name in array */

var users = ['Charles', 'Bob', 'Jack', 'Leo', 'Garry', 'Kevin', 'Erick', 'Tom', 'Harry']
for (user of users) {
    var user_temp = user.toLowerCase()
    switch (user_temp[0]) {
        case 'a':
        case 'c':
        case 'e':
        case 'g':
        case 'i':
        case 'k':
            console.log('You can come to office on even day');
            break;
        case 'b':
        case 'd':
        case 'f':
        case 'h':
        case 'j':
        case 'l':
            console.log('You can come to office on odd day');
            break;
        default:
            console.log('You take a leave');
    }

}