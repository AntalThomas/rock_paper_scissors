// function onClick() { // Use as reference
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }

// Gets the computers choice randomly
function getComputerChoice() { 
    let computerChoice = ["rock", "paper", "scissors"];
    let randomNum = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[randomNum];
}

// Compares computers choice to the players choice then runs the correct function to increment score
function playRound(playerSelection, computerSelection) { 
    switch(true) {
        case (playerSelection === "rock" && computerSelection == "paper"):
            computerWon(playerSelection, computerSelection);
            break;

        case (playerSelection === "rock" && computerSelection == "scissors"):
            playerWon(playerSelection, computerSelection);
            break;

        case (playerSelection === "paper" && computerSelection == "scissors"):
            computerWon(playerSelection, computerSelection);
            break;

        case (playerSelection === "paper" && computerSelection == "rock"):
            playerWon(playerSelection, computerSelection);
            break;

        case (playerSelection === "scissors" && computerSelection == "rock"):
            computerWon(playerSelection, computerSelection);
            break;

        case (playerSelection === "scissors" && computerSelection == "paper"):
            playerWon(playerSelection, computerSelection);
            break;

        case (playerSelection === computerSelection): // If choices are the same nothing will happen other than an error message
            console.log(`You both guessed "${playerSelection}" RETRY!`);
            document.getElementById("sameChoice").innerHTML = `You both guessed "${playerSelection}" RETRY!`;
            break;
    }
}

// Called when the computer won the round and increments its score and the round
function computerWon(playerSelection, computerSelection) {
    console.log(`You Lose! ${playerSelection} beats ${computerSelection}`);
    document.getElementById("sameChoice").innerHTML = `You Lose! ${playerSelection} beats ${computerSelection}`;
    
    computerScore += 1;
    round += 1;
}

// Called when the player won the round and increments its score and the round
function playerWon(playerSelection, computerSelection) {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    document.getElementById("sameChoice").innerHTML = `You Win! ${playerSelection} beats ${computerSelection}`;

    playerScore += 1;
    round += 1;
}

// Called when player clicks the rock button indicating their choice and starting a round then checking for a completed game
function rock() {
    let playerSelection = "rock";
    console.log("rock");
    playRound(playerSelection, getComputerChoice());

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    gameOver();
}

// Called when player clicks the paper button indicating their choice and starting a round then checking for a completed game
function paper() {
    let playerSelection = "paper";
    console.log("paper");
    playRound(playerSelection, getComputerChoice());

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    gameOver();
}

// Called when player clicks the scissors button indicating their choice and starting a round then checking for a completed game
function scissors() {
    let playerSelection = "scissors";
    console.log("scissors");
    playRound(playerSelection, getComputerChoice());

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    gameOver();
}

// Called when player clicks the reset button resetting the scores and the text
function resetGame() {
    console.log("!Game Reset!");

    round = 0;
    computerScore = 0;
    playerScore = 0;

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    document.getElementById("sameChoice").innerHTML = "------------------";
}

// Checks to see if a player has won the game at the point in time that it has been called
function gameOver() {
    if (playerScore == 3) {
        alert(`Congrats you won in the ${round} round.`);
        alert(`The Official Score was:\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);

        resetGame();
    }
    else if (computerScore == 3) {
        alert(`Bad luck you lost in the ${round} round.`);
        alert(`The Official Score was:\nYour Score: ${playerScore}\nComputer Score: ${computerScore}`);

        resetGame();
    }
}


// Initial declaring of scores
let round = 0;
let computerScore = 0;
let playerScore = 0;
// let clicks = 0;