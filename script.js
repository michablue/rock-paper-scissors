
function getComputerChoice() {
var myArray = ['Rock', 'Paper', 'Scissors']; 
var getComputerChoice = myArray[(Math.random() * myArray.length) | 0]
console.log(getComputerChoice);
}

function getPlayerChoice() {
    let playerInput = prompt("type rock, paper, or scissors..");
    let result = playerInput.toLowerCase() && playerInput.toUpperCase();
    return result; 
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
    return "Tie";
    } else if (playerSelection === "rock" && computerSelection === "Paper") {
return "Paper beats rock, you lost!";
    } else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "Rock beats paper, you win!";
    } else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "paper beats rock, you win!";
    } else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "Scissors beats paper, you lost!";
    } else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "Rock beats scissors, you lost!";
    } else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "Scissors beats paper, you win!";
    }
    }
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
    
