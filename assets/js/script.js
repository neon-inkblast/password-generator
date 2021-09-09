function getPasswordLength() {

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
