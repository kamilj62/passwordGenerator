// Assignment Code
var generateBtn = document.querySelector('#generate');
var abc = 'abcdefghijklmnopqrstuvwxyz'
var lowercaseArr = 'abcdefghijklmnopqrstuvwxyz'.split('');
var uppercaseArr = abc.toUpperCase().split('');
var num = '0123456789'.split('');
var specialSymbols ='!@#$%^&*()?.<\>|=+:;,[-_]'.split('');

function generatePassword() {
	// STEP 1 - collect user options
	// prompt user for length of password
	var pwLength = prompt('Enter desired length of password');
	pwLength = parseInt(pwLength);

	// verify that pwLength is between 8 and 128 included - if not alert the user and exit the function
  if (pwLength > 7 && pwLength < 129) {
    alert('Thank you');
  }
  else {
    alert('Please enter password length between 8 and 128');
	return;
  }

  
	// confirm whether or not to include lowercase, uppercase, numeric, and special characters
	var lowercase = confirm('Do you want Lowercase Characters in your password?');
  	var uppercase = confirm('Do you want Uppercase Characters in your password?')
  	var nums = confirm('Do you want Numbers in your password?')
  	var specChar = confirm('Do you want Special Characters in your password?')
	// validate that the user has selected at least one type of character
  	if (lowercase || uppercase || nums || specChar !== 0) {
		alert('Thank you');
	}
	else {
		alert('Please enter password length between 8 and 128');
		return;
	}
	// STEP 2 - logic to generate password
	var allPossibleOptions = [];
	var passwordGenerated = [];

	// create an array with elements from the users choices

	// check if user wanted lowercase characters - if so, concatenate lowercaseArr to allPossibleOptions array
	if (lowercase) {
		allPossibleOptions = allPossibleOptions.concat(lowercaseArr);
		console.log(allPossibleOptions);
	}
	// check if user wanted uppercase characters - if so,update allPossibleOptions array
	if (uppercase) {
		allPossibleOptions = allPossibleOptions.concat(uppercaseArr);
		console.log(allPossibleOptions);
	}
	// check if user wanted numeric characters - if so,update allPossibleOptions array
	if (nums) {
		allPossibleOptions = allPossibleOptions.concat(num);
		console.log(allPossibleOptions);
	}
	// check if user wanted special characters - if so,update allPossibleOptions array
	if (specChar) {
		allPossibleOptions = allPossibleOptions.concat(specialSymbols);
		
		// final array
		console.log(allPossibleOptions);
	}

	//create a function that randomly select an element from an array
	function randomSelection(arr) {
		
		for (let i = 0; i < pwLength; i++) {
			let rng =[Math.floor(Math.random() * arr.length)];
			passwordGenerated = passwordGenerated + arr[rng];
		}
		return passwordGenerated	;
		
		//the randomly selected element
	}
	// run our randomSelection program 
	var mandatory = randomSelection(allPossibleOptions);
	console.log('mandatory', mandatory, mandatory.length);

	// return password and password length
	return mandatory, mandatory.length;
	
}

// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector('#password');
	var passwordLength = document.querySelector('#passwordLength');


	passwordText.value = password
	passwordLength.value = password.length;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);