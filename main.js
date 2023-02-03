const buttonRegisterUser = document.getElementById('registerUser')
let passwordElement = document.getElementById('password')

buttonRegisterUser.addEventListener('click', registerVerification)

document.getElementById('kickNumber').onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if("1234567890".indexOf(chr) < 0)
    return false;
}

function registerVerification() {
    emailVerification();
    passwordValidation();
    passwordVerification();
}

function emailVerification() {
    let email = document.getElementById('email').value;
    let confirmedEmail = document.getElementById('confirmedEmail').value;
    const errorEmailMessage = document.getElementById('error-email');

    if (email !== confirmedEmail & confirmedEmail !== '') {
        errorEmailMessage.classList.add('displayOn');
        return
    }
    
    errorMessageExist(errorEmailMessage)
}


function passwordValidation() {
    const errorPasswordMessage = document.getElementById('error-password')
    if(password.value.length < 8 && password.value !== '') {
        errorPasswordMessage.classList.add('displayOn')
        return
    }

    errorMessageExist(errorPasswordMessage)
}

function passwordVerification() {
    let confirmedPassword = document.getElementById('confirmedPassword').value;
    const errorConfirmedPassword = document.getElementById('error-passwordConfirmed');

    if (password.value !== confirmedPassword && confirmedPassword !== "") {
        errorConfirmedPassword.classList.add('displayOn')
        return
    }

    errorMessageExist(errorConfirmedPassword)
}

function errorMessageExist(message) {
    if(message) {
        message.classList.remove('displayOn')
    }
}