const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const subject = document.querySelector("#subject");
const email = document.querySelector("#email");
const yourmessage = document.querySelector("#yourmessage");
const message = document.querySelector("#message");
const button = document.querySelector("button");


function checkIfButtonIsDisabled() {
    if (checkLength(name.value, 1) && checkLength(subject.value, 10) && checkLength(yourmessage.value, 25) && validateEmail(email.value)) {
        button.disabled = false;
    } else {
         message.innerHTML = "";
         button.disabled = true;
    }
}

name.addEventListener("keyup", checkIfButtonIsDisabled);
subject.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);
yourmessage.addEventListener("keyup", checkIfButtonIsDisabled);


function submitForm(event) {
    event.preventDefault();
    
    message.innerHTML = '<div class="message">Your message has been sent</div>';
   
    form.reset();
}

form.addEventListener("submit", submitForm);

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const patternMatches = regEx.test(email);
    return patternMatches;
}