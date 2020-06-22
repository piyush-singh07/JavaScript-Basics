const checkUserName = () => {
    var uname = document.getElementById('username').value;
    if (uname == '' || uname == ' ') {
        document.getElementById('uout').innerHTML = "username cannot be left empty"
        document.getElementById('uout').style.color = "Red"
    } else {
        document.getElementById('uout').innerHTML = ""
    }
};

const checkPasscode = () => {
    var passcode = document.getElementById('passcode').value;
    if (passcode == '' || passcode == ' ') {
        document.getElementById('pout').innerHTML = "password cannot be left empty"
        document.getElementById('pout').style.color = "Red"
    } else if (passcode.length < 8) {
        document.getElementById('pout').innerHTML = "Password should be more than 8 characters"
        document.getElementById('pout').style.color = "Red"
    } else {
        document.getElementById('pout').innerHTML = ""
    }
};

const checkConfirmPasscode = () => {
    var cpasscode = document.getElementById('cpasscode').value;
    var ppasscode = document.getElementById('passcode').value;
    if (cpasscode == '' || cpasscode == ' ') {
        document.getElementById('cout').innerHTML = "password cannot be left empty"
        document.getElementById('cout').style.color = "Red"
    } else if (cpasscode !== ppasscode) {
        document.getElementById('cout').innerHTML = "Password you entered does not match"
        document.getElementById('pout').style.color = "Red"
    } else {
        document.getElementById('cout').innerHTML = ""
    }
};