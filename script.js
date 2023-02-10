
// Gameplay

let playerScore = 0;
let computerScore = 0;
let roundLimit = 5;

// invoking the function
//playGame();

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

function getPlayerChoice () {
    let ask = prompt("What weapon do you choose? Rock, paper or scissors?").toLowerCase();
    return ask;
}

// If it's paper and scissors, scissors wins
// If it's scissors and stone, stone wins
// If it's stone and paper, paper wins

function playRound() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        console.log("It's a draw. Try again.");
    }
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")) {
            console.log("You won, " +playerChoice+ " beats " +computerChoice+".");
            playerScore++;
            console.log(`Player: ${playerScore}`);
    }
    else if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")) {
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

const btnRock = document.querySelector("#btnRock");
btnRock.addEventListener("click", () => {
    alert("Hello World");
});

const btnPaper = document.querySelector(#btnPaper);
btnPaper.addEventListener("click", () => {
    // invoke "player chose paper" and start game
});

const btnScissors = document.querySelector(#btnScissors);
btnScissors.addEventListener("click", () => {
    // invoke "player chose scissors" and start game
});
