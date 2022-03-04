//This is a password generator. It will generate a password between
//8 and 128 characters and allow the user to decide if they want to 
//use any combination of uppercase, lowercase, numerical, or special characters.

//Event listener to prompt questions
document.querySelector("#generate").addEventListener("click", writePassword);
//Variables
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase= ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numericals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specials = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];

var passwordLength = "";
var includeUppercase;
var includeLowercase;
var includeNumericals;
var includeSpecials;

//Prompt for password length
function generatePassword() {
  var passwordLength = (window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));

  //Loops if answer is not 
  while(passwordLength <=7 || passwordLength >=129) {
    window.alert("Please select a number between 8 and 128.");
    var passwordLength = (window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128."));
  }
  //Prompts for character choices and forces user to select at least one character type
  var includeUppercase = confirm("Click OK if you would like to include uppercase characters");
  var includeLowercase = confirm("Click OK if you would like to include lowercase characters");
  var includeNumericals = confirm("Click OK if you would like to include numerical characters");
  var includeSpecials = confirm("Click OK if you would like to include special characters");
    while(includeUppercase === false && includeLowercase === false && includeNumericals === false && includeSpecials === false) {
    window.alert("Please click OK for at least one parameter!");
    var includeUppercase = confirm("Click OK if you would like to include uppercase characters");
    var includeLowercase = confirm("Click OK if you would like to include lowercase characters");
    var includeNumericals = confirm("Click OK if you would like to include numerical characters");
    var includeSpecials = confirm("Click OK if you would like to include special characters");
    }
  //empty array for the which characters get used
  var passwordCharacters = [];
//if statement for which characters get chosen
  if (includeUppercase) {
    passwordCharacters = passwordCharacters.concat(uppercase);
  }
  if (includeLowercase) {
    passwordCharacters = passwordCharacters.concat(lowercase);
  }
  if (includeNumericals) {
    passwordCharacters = passwordCharacters.concat(numericals);
  }
  if (includeSpecials) {
    passwordCharacters = passwordCharacters.concat(specials);
  }
  console.log(passwordCharacters)
  var randomPassword = "";
  //for loop to generate random password based on characters chosen
  for (var i = 0; i < passwordLength; i++) {
    randomPassword = randomPassword + passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
    console.log(randomPassword);
  }
  return randomPassword;

}
//existing function to send password to the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}