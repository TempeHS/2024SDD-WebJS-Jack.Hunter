var playerGuess = 0;
var playerScore = 0;
var computerScore = 0;
var randomNumber = 0;
var playerTip = "Guess a number between 1 and 10";
var countDownFrom = 10;
var currentSecond = 11;
var timerId = 0;

function gameLoop() {
    equalityCheck();
    if (currentSecond = 0) {
        randomNumber = Math.floor(Math.random() * 10) + 1;
        secondCountDown();
    }
    updateHtmlContent();
}

function equalityCheck() {
    computerScore = randomNumber;
    playerGuess = Number(document.getElementById("playerGuessInput").value);
    if (isNaN(playerGuess)) {
        playerTip = "Not a valid answer";
    } else if (playerGuess == randomNumber) {
          currentSecond = 11;
          playerScore++;
          playerTip = "Correct, click to play again";
          document.getElementById("playButton").value = "Play now";
      } else if (playerGuess > randomNumber) {
          playerTip = "Your guess is too high";
          document.getElementById("playButton").value = "Guess again";
      } else {
          playerTip = "Your guess is too low";
          document.getElementById("playButton").value = "Guess again";
      }
}

function updateHtmlContent() {
    document.getElementById("playerScoreContent").innerHTML = playerScore;
    document.getElementById("computerScoreContent").innerHTML = computerScore;
    document.getElementById("tipContent").innerHTML = playerTip;
    document.getElementById("countDown").innerHTML = currentSecond;
}

function secondCountDown() {
    if (currentSecond != 0) {
        currentSecond--;

    } else {

    }
}