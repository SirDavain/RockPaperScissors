
// Gameplay

let playerScore = 0;
let computerScore = 0;
let roundLimit = 5;

// invoking the function
//playGame();
getPlayerChoiceV2();

//Function, that 
//returns either "Rock", "Paper" or "Scissors"
//randomly (1 in 3)
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        randomNumber = "rock";
        console.log("I choose rock.");
    } else if (randomNumber == 1) {
        randomNumber = "paper";
        console.log("I choose paper.");
    } else {
        randomNumber = "scissors";
        console.log("I choose scissors.");
    }
    return randomNumber;
}

/* function getPlayerChoice () {
    let ask = prompt("What weapon do you choose? Rock, paper or scissors?").toLowerCase();
    return ask;
}
*/

// If it's paper and scissors, scissors wins
// If it's scissors and stone, stone wins
// If it's stone and paper, paper wins

function playRound() {
    let playerChoice = getPlayerChoiceV2();
    let computerChoice = getComputerChoice();

    if (
        (playerChoice === computerChoice) ||
        (playerChoice === computerChoice) ||
        (playerChoice === computerChoice)) {
        console.log("It's a draw. Try again.");
    }
    else if (
        (playerChoice && computerChoice === "scissors") ||
        (playerChoice && computerChoice === "rock") ||
        (playerChoice && computerChoice === "paper")) {
            console.log("You won, " +playerChoice+ " beats " +computerChoice+".");
            playerScore++;
            console.log(`Player: ${playerScore}`);
    }
    else if (
        (playerChoice && computerChoice === "paper") ||
        (playerChoice && computerChoice === "scissors") ||
        (playerChoice && computerChoice === "rock")) {
            console.log("You lost, " +computerChoice+ " beats " +playerChoice+".");
            computerScore++;
            console.log(`Computer: ${computerScore}`);
    }
    return playerScore, computerScore;
}

function playGame() {
    while (playerScore < roundLimit && computerScore < roundLimit) {
        playRound();
    }
    if (playerScore === roundLimit) console.log("You won this round.");
    else {
        console.log("I won this round.")
    }
}

// UI

// const buttons = document.querySelectorAll(".btn");

/* 
let btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
   getPlayerChoice();
});

let btnPaper = document.querySelector("#btnPaper");
btnPaper.addEventListener("click", () => {
    getPlayerChoice();
});

let btnScissors = document.querySelector("#btnScissors");
btnScissors.addEventListener("click", () => {
    getPlayerChoice();
});
*/

/* 
function getPlayerChoice() {
    buttons.forEach((button) => {button.addEventListener("click", () => {
        let playerChoice = button.id;
        if (playerChoice === "rock") {
            playerChoiceInt = 0;
        } else if (playerChoice === "paper") {
            playerChoiceInt = 1;
        } else if (playerChoice === "scissors") {
            playerChoiceInt = 2;
        }
        compChoiceInt = getComputerChoice;
        playRound();
    })});
}
*/

function getPlayerChoiceV2() {
    let rock = document.getElementById("rock");
        rock = "rock";
    let paper = document.getElementById("paper");
        paper = "paper";
    let scissors = document.getElementById("scissors");
        scissors = "scissors";
}

/* If user clicks on button "Rock"
Computer generates a random choice
And the choices get compared
Winner is announced */

/* Add event listener ("click") to the buttons
and invoke the function to compare and announce the winner */