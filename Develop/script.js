// Assignment Code
var generateBtn = document.querySelector("#generate");

if (generateBtn) {
  var charSet = prompt(
    "How many character do you want? Select between 8 and 128."
  );
  var upperAnswer = confirm("Do you want uppercase characters?");
  var lowerAnswer = confirm("Do you want lowercase characters?");
  var numericAnswer = confirm("Do you want numeric characters?");
  var specialAnswer = confirm("Do you want special characters?");
}

// Write password to the #password input

var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var numeric = "1234567890";
var specialChar = "!@#$%^&*()";

var allowed = "";

if (upperAnswer) {
  allowed += upperCase;
  console.log(allowed);
}

if (lowerAnswer) {
  allowed += lowerCase;
  console.log(allowed);
}

if (numericAnswer) {
  allowed += numeric;
  console.log(allowed);
}

if (specialAnswer) {
  allowed += specialChar;
  console.log(allowed);
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var userInput = prompt("Enter your password.");

  return userInput;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
