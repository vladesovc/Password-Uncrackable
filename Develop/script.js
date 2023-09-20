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

function generatePassword(){
  return "password";
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

  // USE THE AI ASSISTANT TO HELP WITH THE ACTUAL CODE / NEW PHRASES