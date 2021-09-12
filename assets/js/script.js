function getPasswordLength() {
  // set up some variables to hold my constants so they can be altered easily later
  var minLength = 8;
  var maxLength = 128;
  var hintMessage = "Length must be between " + minLength + " and " + maxLength + ".  Please try again.";
  var lengthMessage = "Choose a password length between " + minLength + " and " + maxLength + " characters.";
  // get the initial password length
  var passwordLength = prompt(lengthMessage);
  // if the password length input was invalid, repeat the process until the user enters a valid input
  while (isNaN(passwordLength) || passwordLength < minLength || passwordLength > maxLength || !passwordLength) {
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


function generateAvailableCharacterArray(criteria) {
  // set up arrays holding the possible characters
  // we could also doing this by splitting a string, which is what I would usually do in pracice
  // eg.
  // var lowercase = "abcdefgh".split("");
  // however I have written as an array literal here for clarity.
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercase = lowercase.map(function (char) {
    return char.toUpperCase()
  });
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // set up an empty array, concatenate with selected characters
  var available = [];

  // check each criteria and use Array.concat() to add the corresponding character set
  if (criteria.upper) {
    available = available.concat(uppercase);
  }
  if (criteria.lower) {
    available = available.concat(lowercase);
  }
  if (criteria.number) {
    available = available.concat(number);
  }
  if (criteria.special) {
    available = available.concat(special);
  }
  // return combined character array
  console.log(available);
  return available;
}

function generatePasswordFromArray(length, availableChars) {
  // start with an empty array to hold password
  var password = [];
  // loop once per character required for length desired
  for (var i = 0; i < length; i++) {
    // get a random number between 0 and the length of the available character array
    var index = Math.floor(Math.random() * availableChars.length);
    // use array indexing to get the character from the available array and 
    // push it onto the password array
    password.push(availableChars[index]);
  }
  // return the completed password to the caller, using Array.join() to convert it back to a string
  console.log(password);
  return password.join("");
}

function generatePassword() {
  var passwordLength = getPasswordLength();
  var passwordCriteria = getPasswordCriteria();
  var availableCharacters = generateAvailableCharacterArray(passwordCriteria);
  var password = generatePasswordFromArray(passwordLength, availableCharacters);
  return password;
}



//------------------------------- Starter code --------------------------------//
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
