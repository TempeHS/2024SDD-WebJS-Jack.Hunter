//**********************************************************************************
// written by Ben Jones
//
// Student boilerplate to make a OOP Rock Paper Scissors
// - OOP - Const data type - Passing data into methods
//
// Written 22/6/2023
// License: https://github.com/TempeHS/2024SDD-WebJS-Ben.Jones/blob/main/LICENSE
//**********************************************************************************



let playerScore = 0;
let computerScore = 0;

function gameLoop (playerClicked) {
	const randomNumber = generateRandomNumber()
	// convert random number to a choice so you can both equality check and use in the ouput string it should be stored in a const 
	equalityCheck (playerClicked, randomNumber);
}

function generateRandomNumber () {
	const result = Math.floor((Math.random() * 3) + 1);
	return result;
}


function equalityCheck(playerChoice, randomNumber) {
	// perform an equality check, update scores and output a string using concatenation that gives user feedback 
	var playerTip = 0;
	var winCheck = "0";

	if (randomNumber == 1) {
		computerScore++;
		winCheck = ": You lose!";
	} else if (randomNumber == 2) {
		playerScore++;
		winCheck = ": You win!";
	}

	if (randomNumber == 3) {
		playerTip = "You picked " + playerChoice + ", and the computer picked " + playerChoice + ": You tie!"
	} else {
		if (playerChoice == "Rock" && randomNumber == 1 || playerChoice == "Scissors" && randomNumber == 2) {
			playerTip = "You picked " + playerChoice + ", and the computer picked Paper" + winCheck;
		} else if (playerChoice == "Scissors" && randomNumber == 1 || playerChoice == "Paper" && randomNumber == 2) {
			playerTip = "You picked " + playerChoice + ", and the computer picked Rock" + winCheck;
		} else {
			playerTip = "You picked " + playerChoice + ", and the computer picked Scissors" + winCheck;
		}
	}

	document.getElementById("playerScoreContent").innerHTML = playerScore;
	document.getElementById("computerScoreContent").innerHTML = computerScore;
	document.getElementById("tipContent").innerHTML = playerTip;
}