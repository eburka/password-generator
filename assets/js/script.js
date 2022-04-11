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

var password = (/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/)

function generatePassword (passwordLength){  

  var passwordLength = ""

  var passwordLength = prompt("type the password length");

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password must be between 8-128 characters! ");
    generatePassword ()
  };

  var specialChar = confirm ("click ok to confirm if you want special characters.");
  var upperCase = confirm ("click ok to confirm if you want UPPER case.");
  var lowerCase = confirm ("click ok to confirm if you want lower case");
  var numeric = confirm ("click ok to confirm if you want numeric.");

  
  if (specialChar) {
    console.log("special char is ture")
  }
  if (upperCase) {
    console.log("uppercase is ture")
  } 
  if (lowerCase) {
      console.log("lowercase is ture")
  }  
  if (numeric) {
    console.log ("numeric is true ")
  }
  else {
    alert("Must Choose one.")
      }

  for (var i = 0; i < passwordLength; i++) {
  var password = Math.floor(Math.random() * password); }
