// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Values
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var special = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];

// User input variables
var generate;
var confirmLength;
var confirmUppercase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecial;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(); {
  // User input 1
  confirmLength = parseInt(prompt("How long would you like your password? Choose a length between 8 and 128, inclusive."));
  // Start if function
  if (confirmLength >= 8 && confirmLength <= 128) {
    confirmUppercase = confirm("Will this contain uppercase letters?");
    confirmLowerCase = confirm("Will this contain lowercase letters?");
    confirmNumber = confirm("Will this contain numbers?");
    confirmSpecial = confirm("Will this contain special characters?");
  }
  else if (confirmLength < 8 || confirmLength > 128) {
    confirmLength = parseInt(prompt("Your password must be between 8 and 128 characters!"));
  }
  else if (!confirmLength) {
    alert("You must input a value!");
  }
  else {
    alert("I'm unsure how you messed that up!");
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
