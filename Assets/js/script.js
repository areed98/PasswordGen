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
  // Sets our added string values back to zero, once we have input the password into the field, so that it does not break the generator.
  confirmFinal = "";
}

// Give confirm conditions a variable
var confirmFinal = "";

// Fuction to generate password using the different cases
function generatePassword() {
  confirmLength = parseInt(prompt("How long would you like your password? Choose a length between 8 and 128, inclusive."));

  // Check if length is outside of correct parameters
  if (confirmLength < 8 || confirmLength > 128) {
    alert("Your password must be between 8 and 128 characters!");
    generatePassword();
  }
  // If no value is input, it prompts to input a value.
  else if (!confirmLength) {
    alert("You must input a value!");
    generatePassword();
  }
  // If length is correct, then prompt for our types of values
  else {
    confirmUppercase = prompt("Will this contain uppercase letters?", "Please enter yes or no.");
    console.log(confirmUppercase);
    if (confirmUppercase != "Yes" && confirmUppercase != "yes" && confirmUppercase != "No" && confirmUppercase != "no") {
      confirmUppercase = prompt("Please enter either yes or no", "yes/no");
    }
    confirmLowercase = prompt("Will this contain lowercase letters?", "Please enter yes or no.");
    if (confirmLowercase != "Yes" && confirmLowercase != "yes" && confirmLowercase != "No" && confirmLowercase != "no") {
      confirmLowercase = prompt("Please enter either yes or no", "yes/no");
    }
    confirmNumber = prompt("Will this contain numbers?", "Please enter yes or no.");
    if (confirmNumber != "Yes" && confirmNumber != "yes" && confirmNumber != "No" && confirmNumber != "no") {
      confirmNumber = prompt("Please enter either yes or no", "yes/no");
    }
    confirmSpecial = prompt("Will this contain special characters?", "Please enter yes or no.");
    if (confirmSpecial != "Yes" && confirmSpecial != "yes" && confirmSpecial != "No" && confirmSpecial != "no") {
      confirmSpecial = prompt("Please enter either yes or no", "yes/no");
    }
  }
  // Check for uppercase, if not, it will continue to lowercase
  if (confirmUppercase == "Yes" || confirmUppercase == "yes") {
    confirmFinal = confirmFinal.concat(uppercase);
    console.log(confirmFinal);
  }
  else {
    confirmFinal = confirmFinal.concat();
  }
  // Check for lowercase, if not, it will continue to numbers
  if (confirmLowercase == "Yes" || confirmLowercase == "yes") {
    confirmFinal = confirmFinal.concat(lowercase);
    console.log(confirmFinal);
  }
  else {
    confirmFinal = confirmFinal.concat();
  }
  // Check for numbers, if not, it will continue to Special
  if (confirmNumber == "Yes" || confirmNumber == "yes") {
    confirmFinal = confirmFinal.concat(numbers);
    console.log(confirmFinal);
  }
  else {
    confirmFinal = confirmFinal.concat();
  }
  // Check for special, not not, if statements are complete
  if (confirmSpecial == "Yes" || confirmSpecial == "yes") {
    confirmFinal = confirmFinal.concat(special);
    console.log(confirmFinal);
  }
  else {
    confirmFinal = confirmFinal.concat();
  }
  // If our final value is empty, it resets the function.
  if (confirmFinal == "") {
    alert("Please make sure you select one or more options, sending you back to the beginning!");
    generatePassword();
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

