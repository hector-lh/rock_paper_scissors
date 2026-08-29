function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    if (num === 0){
        return "rock";
    } else if (num === 1){
        return "paper";
    } else {
        return"scissors";
    }
}

function getHumanChoice() {
    return prompt("Please enter your choice: ").toLowerCase()
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock"){
        if (computerChoice === "rock"){
            console.log("That's a draw!");
        } else if (computerChoice === "paper"){
            computerScore ++;
            console.log("You lose! Paper beats rock");
        } else {
            humanScore ++;
            console.log("You win! Rock beats scissors");
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore ++;
            console.log("You win! Paper beats scissors");
        } else if (computerChoice === "paper"){
            console.log("That's a draw!");
        } else {
            computerScore ++;
            console.log("You lose! Scissors beat paper");
        }
    } else {
        if (computerChoice === "rock"){
            computerScore ++;
            console.log("You lose! Rock beats scissors");
        } else if (computerChoice === "paper"){
            humanScore ++;
            console.log("You win! Scissors beat paper");
        } else {
            console.log("That's a draw!")
        }
    }
}

function playGame() {
    // Iterate 5 times
    for (let i = 0; i < 5; i ++) {
        //Ask user for choice
        humanChoice = getHumanChoice()
        //Get computer's choice
        computerChoice = getComputerChoice()
        //Call playround with the choices
        playRound(humanChoice, computerChoice)
    }
    //Determine the winner
    if (humanScore === computerScore) {
        console.log("Five intense rounds but it is still a draw!")
    } else if (humanScore > computerScore) {
        console.log("Congratulations! YOU WIN!!!")
    } else {
        console.log("Game over! You lose :(")
    }
}

playGame();