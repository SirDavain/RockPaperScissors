
//Function, that 
//returns either "Rock", "Paper" or "Scissors"
//randomly (1 in 3)


let playerScore = 0;
let computerScore = 0;

let computerSelection = getComputerChoice();
let playerSelection = playerSelects();


console.log("Start");
playRound(playerSelection,computerSelection);
console.log("Stop");


function getComputerChoice() {
	console.log("getComputerChoice start");
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
		randomNumber="rock";
        console.log("rock");
    } else if (randomNumber == 1) {
		randomNumber="paper";
        console.log("paper");
    } else {
		randomNumber="scissors";
        console.log("scissors");
    }
	console.log("Computer choice = '"+randomNumber+"'");
	console.log("getComputerChoice stop");
    return randomNumber;
}

function playerSelects () {
    let ask = prompt("What weapon do you choose? Rock, paper or scissors?").toLowerCase();
	console.log("User input = '"+ask+"'");
    return ask;
}
// If it's paper and scissors, scissors wins
// If it's scissors and stone, stone wins
// If it's stone and paper, paper wins

function playRound(playerSelection, computerSelection) {
	console.log("playround start");
	console.log("parameters: playerSelection='"+playerSelection+"'");
	console.log("parameters: computerSelection='"+computerSelection+"'");
    if (playerSelection === computerSelection) {
        console.log("It's a draw. Try again.");
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            playerScore++;
            console.log("You won");
    }
    else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")) {
            computerScore++;
            console.log("You lost");
    }
	console.log("playround stop");
}

/* function playGame(playRound) {
    for (i = 0; i < 5; i++);
    playRound();
    return;
} if (playerScore > computerScore) alert("You won");
    else {
    alert("You lost");
} */ 



