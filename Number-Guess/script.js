var playerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var randomNumber = Math.floor(Math.random() * 10) + 1;
var playerTip = "Guess a number between 1 and 10";
var currentSecond = 10;
var timerId = 0;
var restartGame = 1;

function gameLoop() {
    equalityCheck();
    if (restartGame == 1) {
        restartGame = 0;
        randomNumber = Math.floor(Math.random() * 10) + 1;
        currentSecond = 11;
        secondCountDown();
    }
    updateHtmlContent();
}

function equalityCheck() {
    playerGuess = Number(document.getElementById("playerGuessInput").value);
    if (isNaN(playerGuess)) {
        playerTip = "Not a valid answer";
    } else if (playerGuess == randomNumber) {
        playerScore++;
        playerTip = "Correct, click to play again";
        clearTimeout(timerId);
        document.getElementById("playButton").value = "Play now";
     } else if (playerGuess > randomNumber) {
          playerTip = "Your guess is too high";
        document.getElementById("playButton").value = "Guess again";
        computerScore++;
     } else {
          playerTip = "Your guess is too low";
        document.getElementById("playButton").value = "Guess again";
        computerScore++;
      }
}

function updateHtmlContent() {
    if (playerTip == "Correct, click to play again") {
        restartGame = 1;
    }
    document.getElementById("playerScoreContent").innerHTML = playerScore;
    document.getElementById("computerScoreContent").innerHTML = computerScore;
    document.getElementById("tipContent").innerHTML = playerTip;
}

function secondCountDown() {
    if (currentSecond != 0) {
        currentSecond--;
    } else {
        clearTimeout(timerId);
        playerTip = "Game over, you lose!";
        restartGame = 1;
        return;
    }
    document.getElementById("countDown").innerHTML = currentSecond;
    timerId = setTimeout(secondCountDown, 1000);
}