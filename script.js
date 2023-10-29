
function getComputerChoice() {
let myArray = ['Rock', 'Paper', 'Scissors']; 
let computerChoice = myArray[(Math.random() * myArray.length) | 0]
return computerChoice;
}

function getPlayerChoice() {
    let playerInput = prompt("type rock, paper, or scissors..");
    let result = playerInput.toLowerCase();
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
    

    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
