//This is a password generator. It will generate a password between
//8 and 128 characters and allow the user to decide if they want to 
//use any combination of uppercase, lowercase, numerical, or special characters.

//Event listener to prompt questions
document.querySelector("#generate").addEventListener("click", writePassword);

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var passwordLength = "";
var includeUpperCase;
var includeLowerCase;
var includeNumericals;
var includeSpecials;

//Prompt for password length
function generatePassword(){
  var passwordLength = (window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));

  //Loops if answer is not 
  while(passwordLength <=7 || passwordLength >=129) {
    window.alert("Please select a number between 8 and 128.");
    var passwordLength = (window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));
  }
  var includeUpperCase = confirm("Click OK if you would like to include uppercase characters");
  var includeLowerCase = confirm("Click OK if you would like to include lowercase characters");
  var includeNumericals = confirm("Click OK if you would like to include numerical characters");
  var includeSpecials = confirm("Click OK if you would like to include special characters");
    while(includeUpperCase === false && includeLowerCase === false && includeNumericals === false && includeSpecials === false) {
    window.alert("Please click OK for at least one parameter!");
    var includeUpperCase = confirm("Click OK if you would like to include uppercase characters");
    var includeLowerCase = confirm("Click OK if you would like to include lowercase characters");
    var includeNumericals = confirm("Click OK if you would like to include numerical characters");
    var includeSpecials = confirm("Click OK if you would like to include special characters");
    }

  }
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}