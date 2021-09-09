function getPasswordLength() {
  // set up some variables to hold my constants so they can be altered easily later
  var minLength = 8;
  var maxLength = 128;
  var hintMessage = "Length must be between " + minLength + " and " + maxLength + ".  Please try again.";
  var lengthMessage = "Choose a password length between " + minLength + " and " + maxLength + " characters.";
  // get the initial password length
  var passwordLength = prompt(lengthMessage);
  // if the password length input was invalid, repeat the process until the user enters a valid input
  while (passwordLength < minLength || passwordLength > maxLength || !passwordLength) {
    // since the user has already entered bad data, prepend the hint message as well
    passwordLength = prompt(hintMessage + "\n\n" + lengthMessage);
  }
  // return the password length
  console.log(passwordLength);
  return passwordLength;

}

function getPasswordCriteria() {

}

function generateAvailableCharacterSet() {

}


function generatePassword() {
  var passwordLength = getPasswordLength();
  var passwordCriteria = getPasswordCriteria();
  var availableCharacters = generateAvailableCharacterSet();
  var password = "";
  return password;
}



// --------------------------------------Starter code 
// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
