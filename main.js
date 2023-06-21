const buttonRegisterUser = document.getElementById('registerUser')
const errorEmailMessage = document.getElementById('error-email')
const errorPasswordMessage = document.getElementById('error-password')
const errorConfirmedPassword = document.getElementById('error-passwordConfirmed')
buttonRegisterUser.disabled = true

// código para permitir apenas letras no input do nome
document.getElementById('name').onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if("qwertyuiopasdfghjklçzxcvbnmQWERTYUIOPASDFGHJKLÇZXCVBNM ".indexOf(chr) < 0)
    return false;
}

document.getElementById("email").addEventListener('input', function(event){
    if(confirmedEmail.value != "") {
        emailVerification();
    }
})

document.getElementById("confirmedEmail").addEventListener('input', function(event){
    emailVerification();
})

document.getElementById('password').addEventListener('input', function(event){
    passwordValidation()
    if(confirmedPassword.value != "") {
        passwordVerification()
    }
})

document.getElementById('confirmedPassword').addEventListener('input', function(event){
    passwordVerification()
})

function emailVerification() {
    if (email.value !== confirmedEmail.value) {
        errorEmailMessage.classList.add('displayOn');
        return buttonRegisterUser.disabled = true
    }
    
    errorMessageExist(errorEmailMessage)
    inputVerification()
}


function passwordValidation() {
    if(password.value.length < 8) {
        errorPasswordMessage.classList.add('displayOn')
        return buttonRegisterUser.disabled = true
    }

    errorMessageExist(errorPasswordMessage)
    inputVerification()
}

function passwordVerification() {
    let confirmedPassword = document.getElementById('confirmedPassword').value;

    if (password.value !== confirmedPassword) {
        errorConfirmedPassword.classList.add('displayOn')
        return buttonRegisterUser.disabled = true
    }

    errorMessageExist(errorConfirmedPassword)
    inputVerification()
}

function inputVerification() {
    if(errorEmailMessage.classList.value == 'displayOn') {
        return buttonRegisterUser.disabled = true
    } else if(errorPasswordMessage.classList.value == 'displayOn'){
        return buttonRegisterUser.disabled = true
    } else if(errorConfirmedPassword.classList.value == 'displayOn'){
        return buttonRegisterUser.disabled = true
    } else {
        return buttonRegisterUser.disabled = false
    }
}

function errorMessageExist(message) {
    if(message) {
        message.classList.remove('displayOn')
    }
}