const buttonRegisterUser = document.getElementById('registerUser')
const errorEmailMessage = document.getElementById('error-email')
const errorPasswordMessage = document.getElementById('error-password')
const errorConfirmedPassword = document.getElementById('error-passwordConfirmed')
let passwordElement = document.getElementById('password')

buttonRegisterUser.disabled = true

// código para permitir apenas letras no input do nome
document.getElementById('name').onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if("qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM".indexOf(chr) < 0)
    return false;
}

document.getElementById("confirmedEmail").addEventListener('input', function(event){
    emailVerification();
})

document.getElementById('password').addEventListener('input', function(event){
    passwordValidation()
})

document.getElementById('confirmedPassword').addEventListener('input', function(event){
    passwordVerification()
})

function emailVerification() {
    let email = document.getElementById('email').value;
    let confirmedEmail = document.getElementById('confirmedEmail').value;

    if (email !== confirmedEmail) {
        errorEmailMessage.classList.add('displayOn');
        buttonRegisterUser.disabled = true

        return 
    }
    
    errorMessageExist(errorEmailMessage)
    inputVerification()
}


function passwordValidation() {
    if(passwordElement.value.length < 8) {
        errorPasswordMessage.classList.add('displayOn')
        buttonRegisterUser.disabled = true
        return
    }

    errorMessageExist(errorPasswordMessage)
    inputVerification()
}

function passwordVerification() {
    let confirmedPassword = document.getElementById('confirmedPassword').value;

    if (password.value !== confirmedPassword) {
        errorConfirmedPassword.classList.add('displayOn')
        buttonRegisterUser.disabled = true
        return
    }

    errorMessageExist(errorConfirmedPassword)
    inputVerification()
}

function inputVerification() {
    if(errorEmailMessage.classList.value == 'displayOn') {
        buttonRegisterUser.disabled = true
        return
    } else if(errorPasswordMessage.classList.value == 'displayOn'){
        buttonRegisterUser.disabled = true
        return
    } else if(errorConfirmedPassword.classList.value == 'displayOn'){
        buttonRegisterUser.disabled = true
        return
    } else {
        return buttonRegisterUser.disabled = false
    }
}

function errorMessageExist(message) {
    if(message) {
        message.classList.remove('displayOn')
    }
}