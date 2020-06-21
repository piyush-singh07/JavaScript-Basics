function changeColor() {
    document.getElementById('myHead').style.color = "Red"

}


function revertColor() {
    document.getElementById('myHead').style.color = "Black"

}

const display = (action) => {
    if (action == 'show') {
        document.getElementById('myHead').style.visibility = "visible"
    } else if (action == 'hide') {
        document.getElementById('myHead').style.visibility = "hidden"
    }
};