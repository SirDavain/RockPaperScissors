// This is my second try

let playerScore = 0;
let computerScore = 0;
const buttons = document.querySelectorAll("input");

function endGame() {
    buttons.forEach(elem => {
        elem.disabled = true;
    })
}

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        randomNumber = "rock";
    } else if (randomNumber == 1) {
        randomNumber = "paper";
    } else {
        randomNumber = "scissors";
    }
    return randomNumber;
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = "";
    //Player wins
    if ((playerSelection == 'rock' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore++;
            result = " You won, your " +playerSelection+ " beats my " +computerSelection+".";
        if (playerScore == 5) {
            result += "You won the game. Reload the page to play again."
            endGame();
            //Score turns green
        }
    }
    //Tie
    else if (playerSelection == computerSelection) {
            result = "It's a tie. Try again.";
    }
    //Computer wins
    else {
        computerScore++;
        result = "You lost, my " +computerSelection+ " beats your " +playerSelection+".";
        if (computerScore == 5) {
            result += " I won, suck it. To play again, reload the page."
            endGame();
            //Score turns red
        }
    }
    document.getElementById('result').innerHTML = result;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('computerScore').innerHTML = computerScore;
    return result, playerScore, computerScore;
    
}

buttons.forEach(button => {
    button.addEventListener('click', function(){
        playRound(button.value)
    })
})