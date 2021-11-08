// Assignment Code
var generateBtn = document.querySelector("#generate");
const arrayLowerCase = arrayLowToHigh(97, 122)
const arrayUpperCase = arrayLowToHigh(65, 90)
const arrayNumbers = arrayLowToHigh(48,57)
const arraySymbols = arrayLowToHigh(33, 47).concat(
  arrayLowToHigh(58, 64)
  ).concat(
    arrayLowToHigh(91, 96)
  ).concat(
      arrayLowToHigh(123, 126)
)
// creates array for characters, numbers, and symbols using ASCII
function arrayLowToHigh(low, high) {
  const array = []
  for (let i =low; i <= high; i++) {
    array.push(i)
  } 
  return array
}

// generate the password
function generatePassword() {
    characterAmount = parseInt(prompt("How many characters? Choose between 8 and 128"));
    if (!characterAmount) {
      alert("This needs a value");
    } else if (characterAmount < 8 || characterAmount > 128) {
      characterAmount = parseInt(prompt("Value needs to be between 8 and 128"));
    } else {
      useLowerCase = confirm("Will you use lowercase?");
      useUpperCase = confirm("Will you use uppercase?");
      useNumbers = confirm("Will you use numbers?");
      useSymbols = confirm ("Will you use symbols?")
    };

    
    if (!useLowerCase && !useUpperCase && !useNumbers && !useSymbols) {
      characterCode = alert("Must select one!");
    }
    else if (useLowerCase && useUpperCase && useNumbers && useSymbols) {
      characterCode = arrayLowerCase.concat(arrayUpperCase, arrayNumbers, arraySymbols);
    }
    else if (useLowerCase && useUpperCase && useNumbers) {
      characterCode = arrayLowerCase.concat(arrayUpperCase, arrayNumbers);
    }
    else if (useLowerCase && useUpperCase && useSymbols) {
      characterCode = arrayLowerCase.concat(arrayUpperCase, arraySymbols);
    }
    else if (useLowerCase && useNumbers && useSymbols) {
      characterCode = arrayLowerCase.concat(arrayNumbers, arraySymbols);
    }
    else if (useUpperCase && useNumbers && useSymbols) {
      characterCode = arrayUpperCase.concat(arrayNumbers, arraySymbols);
    }
    else if (useNumbers && useUpperCase) {
      characterCode = arrayNumbers.concat(arrayUpperCase);
    }
    else if (useLowerCase && useUpperCase) {
      characterCode = arrayLowerCase.concat(arrayUpperCase);
    }
    else if (useLowerCase && useNumbers) {
      characterCode = arrayLowerCase.concat(arrayNumbers);
    }
    else if (useSymbols && useUpperCase) {
      characterCode = arraySymbols.concat(arrayUpperCase);
    }
    else if (useSymbols && useLowerCase) {
      characterCode = arraySymbols.concat(arrayLowerCase);
    }
    else if (useSymbols && useNumbers) {
      characterCode = arraySymbols.concat(arrayNumbers);
    }
    else if (useLowerCase) {
      characterCode = arrayLowerCase;
    }
    else if (useUpperCase) {
      characterCode = arrayUpperCase;
    }
    else if (useNumbers) {
      characterCode = arrayNumbers;
    }
    else if (useSymbols) {
      characterCode = arraySymbols;
    }

    const passwordCharacters = []

    for (var i = 0; i < characterAmount; i ++ ) {
      const charCodes = characterCode[Math.floor(Math.random() * characterCode.length)];
      passwordCharacters.push(String.fromCharCode(charCodes));
    }
    var password = passwordCharacters.join("");
    writePassword(password);
    return password;

}

// Write password to the #password input
function writePassword(password) {
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
} 
// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword, writePassword);