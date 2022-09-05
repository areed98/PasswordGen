// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password Values
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var special = "@%+\\/'!#$^?:,(){}[]~-_."

// User input variables
var confirmLength;
var confirmUppercase;
var confirmLowercase;
var confirmNumber;
var confirmSpecial;


// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);

// Set the randomFinal variable to the password ID in the html
function Finalpassword(randomFinal) {
  document.getElementById("password").textContent = randomFinal;
}

// Give confirm conditions a variable
var confirmFinal = "";

function generatePassword() {
  // User input 1
  confirmLength = parseInt(prompt("How long would you like your password? Choose a length between 8 and 128, inclusive."));
  // Check if length is correct, if so, it continues to uppercase
  if (confirmLength >= 8 && confirmLength <= 128) {
    confirmUppercase = prompt("Will this contain uppercase letters?", "Please enter yes or no.");
    confirmLowercase = prompt("Will this contain lowercase letters?", "Please enter yes or no.");
    confirmNumber = prompt("Will this contain numbers?", "Please enter yes or no.");
    confirmSpecial = prompt("Will this contain special characters?", "Please enter yes or no.");
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
  // Check for uppercase, if not, it will continue to lowercase
  if (confirmUppercase == "Yes" || confirmUppercase == "yes") {
    confirmFinal = confirmFinal.concat(uppercase);
    console.log(confirmFinal);
  }
  // Check for lowercase, if not, it will continue to numbers
  if (confirmLowercase == "Yes" || confirmLowercase == "yes") {
    confirmFinal = confirmFinal.concat(lowercase);
    console.log(confirmFinal);
  }
  // Check for numbers, if not, it will continue to Special
  if (confirmNumber == "Yes" || confirmNumber == "yes") {
    confirmFinal = confirmFinal.concat(numbers);
    console.log(confirmFinal);
  }
  // Check for special, not not, if statements are complete
  if (confirmSpecial == "Yes" || confirmSpecial == "yes") {
    confirmFinal = confirmFinal.concat(special);
    console.log(confirmFinal);
  }

  // Sets the Final variable as a placeholder
  var Final = [];

  // Random Selection for the full length password
  for (var i = 0; i < confirmLength; i++) {
    var randomFinal = confirmFinal[Math.floor(Math.random() * confirmFinal.length)];
    Final.push(randomFinal);
  }

  // Converts password array into a string, had to google-fu this.  Credits to: https://github.com/jamierachael/
  var password = Final.join("");
  Finalpassword(password);
  return password;

}