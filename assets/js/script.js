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
 


function generatePassword (passwordLength){  

  var passwordLength = prompt("type the password length");

  if (passwordLength < 8 || passwordLength > 128 ) {
    alert("Password must be between 8-128 characters! ");
    generatePassword ()
  };

  var specialChar = confirm ("click ok to confirm if you want special characters.")
  var upperCase = confirm ("click ok to confirm if you want UPPER case.");
  var lowerCase = confirm ("click ok to confirm if you want lower case")
  var numeric = confirm ("click ok to confirm if you want numeric.")


  if (specialChar) {
   password= passwordLength + specialChar
  }
  if  


    for (var i = 0; i < passwordLength; i++) {
  var password = Math.floor(Math.random() * charSets); 
    } 
  

  return ""
}


