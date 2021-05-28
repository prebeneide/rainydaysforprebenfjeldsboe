const form = document.querySelector("#personalInformationForm");
const nameOnCard = document.querySelector("#nameOnCard");
const cardNr = document.querySelector("#cardNr");
const expiraryMonth = document.querySelector("#expiraryMonth");
const expiraryYear = document.querySelector("#expiraryYear");
const cvc = document.querySelector("#cvc");
const button = document.querySelector("button");


function checkIfButtonIsDisabled() {
    if (checkLength(nameOnCard.value, 3) && checkLength(cardNr.value, 13) && checkLength(expiraryMonth.value, 2) && checkLength(expiraryYear.value, 2) && checkLength(cvc.value, 3) && validateNameOnCard(nameOnCard.value) && validateCardNr(cardNr.value) && validateNumber(expiraryMonth.value) && validateNumber(expiraryYear.value) && validateNumber(cvc.value)) {
        button.disabled = false;
    } else {
         message.innerHTML = "";
         button.disabled = true;
    }
}

nameOnCard.addEventListener("keyup", checkIfButtonIsDisabled);
cardNr.addEventListener("keyup", checkIfButtonIsDisabled);
expiraryMonth.addEventListener("keyup", checkIfButtonIsDisabled);
expiraryYear.addEventListener("keyup", checkIfButtonIsDisabled);
cvc.addEventListener("keyup", checkIfButtonIsDisabled);


nameOnCard.addEventListener("keyup", checkNameOnCardField);
cardNr.addEventListener("keyup", checkCardNrField);
expiraryMonth.addEventListener("keyup", checkExpiraryMonthField);
expiraryYear.addEventListener("keyup", checkExpiraryYearField);
cvc.addEventListener("keyup", checkCvcField);


function checkNameOnCardField() {
  if (checkLength(nameOnCard.value, 3) && validateNameOnCard(nameOnCard.value)) {
    nameOnCardError.style.display = "none";
  } else {
    nameOnCardError.style.display = "block";
  }
}

function checkCardNrField() {
  if (checkLength(cardNr.value, 12) && validateCardNr(cardNr.value)) {
    cardNrError.style.display = "none";
  } else {
    cardNrError.style.display = "block";
  }
}

function checkExpiraryMonthField() {
  if (checkLength(expiraryMonth.value, 2) && validateNumber(expiraryMonth.value)) {
    expiraryMonthError.style.display = "none";
  } else {
    expiraryMonthError.style.display = "block";
  }
}

function checkExpiraryYearField() {
    if (checkLength(expiraryYear.value, 2) && validateNumber(expiraryYear.value)) {
      expiraryYearError.style.display = "none";
    } else {
      expiraryYearError.style.display = "block";
    }
  }


function checkCvcField() {
    if (checkLength(cvc.value, 3) && validateNumber(cvc.value)) {
        cvcError.style.display = "none";
      } else {
        cvcError.style.display = "block";
      }
    }



function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
}

function validateNameOnCard(nameOnCard) {
    const regEx = /^[a-zA-Z ]*$/;
    const patternMatches = regEx.test(nameOnCard);
    return patternMatches;
}

function validateNumber(Nr) {
  const regEx = /^\d+$/;
  const patternMatches = regEx.test(Nr);
  return patternMatches;
}

function validateCardNr(cardNr) {
  const regEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const patternMatches = regEx.test(cardNr);
  return patternMatches;
}