const form = document.querySelector("#personalInformationForm");
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const streetAdress = document.querySelector("#streetAdress");
const postNr = document.querySelector("#postNr");
const city = document.querySelector("#city");
const country = document.querySelector("#country");
const phoneNr = document.querySelector("#phoneNr");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const button = document.querySelector("button");


function checkIfButtonIsDisabled() {
    if (checkLength(firstName.value, 2) && checkLength(lastName.value, 2) && checkLength(streetAdress.value, 3) && checkLength(postNr.value, 4) && checkLength(city.value, 2) && checkLength(country.value, 2) && checkLength(phoneNr.value, 6) && validateEmail(email.value) && validatePhoneNr(phoneNr.value) && validatePostNr(postNr.value)) {
        button.disabled = false;
    } else {
         message.innerHTML = "";
         button.disabled = true;
    }
}

firstName.addEventListener("keyup", checkIfButtonIsDisabled);
lastName.addEventListener("keyup", checkIfButtonIsDisabled);
streetAdress.addEventListener("keyup", checkIfButtonIsDisabled);
postNr.addEventListener("keyup", checkIfButtonIsDisabled);
city.addEventListener("keyup", checkIfButtonIsDisabled);
country.addEventListener("keyup", checkIfButtonIsDisabled);
phoneNr.addEventListener("keyup", checkIfButtonIsDisabled);
email.addEventListener("keyup", checkIfButtonIsDisabled);




firstName.addEventListener("keyup", checkFirstNameField);
lastName.addEventListener("keyup", checkLastNameField);
streetAdress.addEventListener("keyup", checkStreetAdressField);
postNr.addEventListener("keyup", checkPostNrField);
city.addEventListener("keyup", checkCityField);
country.addEventListener("keyup", checkCountryField);
phoneNr.addEventListener("keyup", checkPhoneNrField);
email.addEventListener("keyup", checkEmailField);


function checkFirstNameField() {
  if (checkLength(firstName.value, 2)) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }
}

function checkLastNameField() {
  if (checkLength(lastName.value, 2)) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }
}

function checkStreetAdressField() {
  if (checkLength(streetAdress.value, 3)) {
    StreetAdressError.style.display = "none";
  } else {
    StreetAdressError.style.display = "block";
  }
}


function checkPostNrField() {
    if (checkLength(postNr.value, 4) && validatePostNr(postNr.value)) {
      PostNrError.style.display = "none";
      } else {
        PostNrError.style.display = "block";
      }
    }

function checkCityField() {
      if (checkLength(city.value, 2)) {
        CityError.style.display = "none";
        } else {
          CityError.style.display = "block";
        }
      }

function checkCountryField() {
  if (checkLength(country.value, 3)) {
     CountryError.style.display = "none";
      } else {
         CountryError.style.display = "block";
         }
       }

function checkPhoneNrField() {
  if (validatePhoneNr(phoneNr.value)) {
     PhoneNrError.style.display = "none";
       } else {
        PhoneNrError.style.display = "block";
        }
       }


function checkEmailField() {
      if (validateEmail(email.value)) {
          EmailError.style.display = "none";
      } else {
          EmailError.style.display = "block";
      }
}


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

function validatePhoneNr(phoneNr) {
  const regEx = /^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/;
  const patternMatches = regEx.test(phoneNr);
  return patternMatches;
}

function validatePostNr(postNr) {
  const regEx = /^\d+$/;
  const patternMatches = regEx.test(postNr);
  return patternMatches;
}