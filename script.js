function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock";
    } else if (num === 1){
        return "paper";
    } else {
        return"scissors";
    }
};

let humanScore = 0;
let computerScore = 0;

let playerScore = document.getElementById("playerScore");
let PCScore = document.getElementById("PCScore");

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            roundResult.textContent = "That's a draw!";
        } else if (computerChoice === "paper"){
            computerScore ++;
            roundResult.textContent = "You lose! Paper beats rock!";
            PCScore.textContent = computerScore;
        } else {
            humanScore ++;
            roundResult.textContent = "You win! Rock beats scissors";
            playerScore.textContent = humanScore;
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore ++;
            roundResult.textContent = "You win! Paper beats scissors";
            playerScore.textContent = humanScore;
        } else if (computerChoice === "paper"){
            roundResult.textContent = "That's a draw!";
        } else {
            computerScore ++;
            roundResult.textContent = "You lose! Scissors beat paper";
            PCScore.textContent = computerScore;
        }
    } else {
        if (computerChoice === "rock"){
            computerScore ++;
            roundResult.textContent = "You lose! Rock beats scissors";
            PCScore.textContent = computerScore;
        } else if (computerChoice === "paper"){
            humanScore ++;
            roundResult.textContent = "You win! Scissors beat paper";
            playerScore.textContent = humanScore;
        } else {
            roundResult.textContent = "That's a draw!";
        }
    }
};

function gameWinner(humanScore, computerScore){
    if (humanScore === 5){
        scores.remove();
        title.textContent = "Congratulations, YOU WIN!";
    } else if (computerScore === 5){
        scores.remove();
        title.textContent = "Game Over! Better luck next time.";
    }
};

const rockBtn = document.getElementById("rockBtn");
const paperBtn = document.getElementById("paperBtn");
const scissorsBtn = document.getElementById("scissorsBtn");
const roundResult = document.getElementById("roundResult");

rockBtn.addEventListener('click', () => {
    playRound("rock", getComputerChoice());
    gameWinner(humanScore, computerScore);
});

paperBtn.addEventListener('click', () => {
    playRound("paper", getComputerChoice());
    gameWinner(humanScore, computerScore);
});

scissorsBtn.addEventListener('click', () => {
    playRound("scissors", getComputerChoice());
    gameWinner(humanScore, computerScore);
});

const scores = document.getElementById("scores");
const title = document.getElementById("title");