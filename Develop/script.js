// Assignment Code

const uppercaseChar = Array.from("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
const lowercaseChar = Array.from("abcdefghijklmnopqrstuvwxyz");
const numericChar = Array.from("1234567890");
const specialChar = Array.from("!@#$%^&*()_-+=");

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  let userChosen = []
  let password = ""

  var passwordLengths = parseInt(prompt("How many characters do you want your password to be? min length 8, max length 128"));
  if (passwordLengths < 8 || passwordLengths > 128 || Number.isNaN(passwordLengths)){
    alert("Password must be a number between 8 and 128 characters.");
    return null;
  }
  var hasUppercase = confirm("Click Ok to include Uppercase characters");
  var hasLowercase = confirm("Click Ok to include Lowercase characters");
  var hasNumbers = confirm("Click Ok to include Numerical characters");
  var hasSpecial = confirm("Click Ok to include Special characters");

  if (!hasUppercase && !hasLowercase && !hasNumbers && !hasSpecial) {
    alert("You must pick at least one character to include in your password");
    return null;
  }

  if (hasUppercase) {
    userChosen = userChosen.concat(uppercaseChar);
  }
  if (hasLowercase) {
    userChosen = userChosen.concat(lowercaseChar);
  }
  if (hasNumbers) {
    userChosen = userChosen.concat(numericChar);
  }
  if (hasSpecial) {
    userChosen = userChosen.concat(specialChar);
  }
  for (let i = 0; i < passwordLengths; i++) {
    let index = Math.floor(Math.random() * userChosen.length);
    password += userChosen[index];
  }
  return password;
}


// create a function to take in all the password criteria

// prompt user for length of password and save as variable
// check to make sure length is between 8 and 128 characters
// confirm lowercase, uppercase, numeric and special characters
// validate that one of the 4 options were selected
// create an object to store the user input

// create seperate global array for each of the 4 confirmations

// inside generatePassword function
// create a variable to store user input from the password option function
// create a new array that will take in all possible characters that can be used for new password
// create a conditional statements to push into possible character array....ie if the user selected lowercase then we need to push those elements in the lowercase array into possible character array
// loop through the possible character array and return characters based on the length given by the user
// return the results and pass to be generated on the page

// need to assure that the newly created password has at least 1 character for each of the criteria selected

// USE THE AI ASSISTANT TO HELP WITH QUESTION / NEW PHRASES