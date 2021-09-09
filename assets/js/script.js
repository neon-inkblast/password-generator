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
  // set up criteria as an object so that I can pass it back easily to the calling function
  var criteria = {
    upper: false,
    lower: false,
    number: false,
    special: false,
  };
  // wrapper function to display the confirm with a prebuilt message  
  function displayCriteriaMessage(criteriaType) {
    return confirm("Would you like to use [" + criteriaType + "] characters?");
  }
  // helper function to ask for all criteria
  function getUserCriteria() {
    criteria.upper = displayCriteriaMessage("uppercase");
    criteria.lower = displayCriteriaMessage("lowercase");
    criteria.number = displayCriteriaMessage("number");
    criteria.special = displayCriteriaMessage("special");
  }

  // get user input
  getUserCriteria();

  // while user input is invalid, ask user again
  while (criteria.upper === false && criteria.lower === false && criteria.number === false && criteria.special === false) {
    alert("You must select at least ONE of the four password criteria. \n-uppercase \n-lowercase \n-numbers \n-special characters");
    getUserCriteria();
  }
  // return the user's password criteria  
  console.log(criteria);
  return criteria;
}

function generateAvailableCharacterSet(criteria) {
  // set up strings holding the possible characters
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var uppercase = lowercase.toUpperCase();
  var special = "!@#$%^&*()";
  var number = "0123456789";
  // set up an empty string append with selected characters
  var available = "";

  // check each criteria and append the corresponding character set
  if (criteria.upper) {
    available += uppercase;
  }
  if (criteria.lower) {
    available += lowercase;
  }
  if (criteria.number) {
    available += number;
  }
  if (criteria.special) {
    available += special;
  }
  // return combined character set as a string
  console.log(available);
  return available;
}


function generatePassword() {
  var passwordLength = getPasswordLength();
  var passwordCriteria = getPasswordCriteria();
  var availableCharacters = generateAvailableCharacterSet(passwordCriteria);

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
