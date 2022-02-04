
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// arrays that hold every characters
var randomLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var randomNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var randomSymbol = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "?", "@", "^", "~"];



function generatePassword(lower, upper,number,symbol,length){
// Prompt
var paslength = window.prompt("How long is your password from 8 to 128 characters?")
// Verify within 8 and 128 
  if (paslength < 8 || paslength > 128  ){
    
    window.alert("MUST BE WITH IN 8 to 128 CHARACTERS!")
    // restart the function 
    generatePassword();
  }

// Asking each prompt for the passowrd.
  var lowCase = window.confirm("Does your password have lowercase letters?")
  var upCase = window.confirm("Does your password have Uppercase letters?")
  var num = window.confirm("Does your password have numbers?")
  var sym = window.confirm("Does your password have symbols?")
// Confrim that they confrimed at least one
  if (lowCase === false && upCase === false && num === false && sym === false){
    window.alert("You need at least one set of charactesr!")
    generatePassword();
  }

// gathering prompt to create password
  var passwordArray =[];
  if (lowCase){ passwordArray = passwordArray.concat(randomLower);;
    
  }



  if (upCase)
  { passwordArray =  passwordArray.concat(randomUpper);
    
  }

  if (num){ passwordArray =  passwordArray.concat(randomNumeric);
    
    
  }
  if (sym){ passwordArray=  passwordArray.concat(randomSymbol);
    
  }

  console.log(passwordArray)
// creation of the password with a loop
  var password = " ";
  for (var i = 0; i< paslength;i++){
    password = password + passwordArray[Math.floor(Math.random()* passwordArray.length)];
  }
return password;
}




// writing passowrd to the #password input


function writePassword(){
  var finalpassword = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = finalpassword;
}



// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);





