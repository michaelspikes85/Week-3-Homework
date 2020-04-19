// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowerCase = "qwertyuiopasdfghjklzxcvbnm";
var numeric = "1234567890";
var specialChar = "!@#$%^&*()";
var allowed = "";

function shuffleCharacters(allowed) {
  var pass = "";
  for (let i = 0; i < allowed.length; i++) {
    pass += allowed.charAt(Math.floor(Math.random() * allowed.length));
  }
  return pass;
}

// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var temp = [];
  var passCheck = true;
  var pass = "";
  var charSet = 0;
  while (charSet < 8 || charSet > 128) {
    charSet = prompt(
      "How many character do you want? Select between 8 and 128."
    );
    if (+charSet < 8 || +charSet > 128) {
      alert("You must select a number between 8 and 128!");
    }
  }

  var upperAnswer = confirm("Do you want uppercase characters?");
  var lowerAnswer = confirm("Do you want lowercase characters?");
  var numericAnswer = confirm("Do you want numeric characters?");
  var specialAnswer = confirm("Do you want special characters?");

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

  if (!allowed.length) {
    alert("You must select at least 1 character set!");
    generatePassword();
  }

  pass = shuffleCharacters(allowed);

  pass = pass.slice(0, +charSet);

  return pass;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
