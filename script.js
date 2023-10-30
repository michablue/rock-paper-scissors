
function getComputerChoice() {
let myArray = ['rock', 'paper', 'scissors']; 
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
        return "tie";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats rock, you lost!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock beats paper, you win!";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "paper beats rock, you win!";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats paper, you lost!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats scissors, you lost!";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper, you win!";
    }
    }
    



    function game() {
        let playerScore = 0,
        computerScore = 0; 

      for (let i = 0; i <= 5; i++) {
       const result = playRound(getPlayerChoice(), getComputerChoice()); 
       console.log(result);
       if (result.includes("win")) {
        playerScore++;
        console.log('computer: ${computerScore} | player: ${playerScore}');
       } else if (result.includes("lost")) {
        computerScore++;
        console.log('computer: ${computerScore} | player: ${playerScore}');
       }
       }
      console.log(
        "Final Results: Player: " + playerScore + " Computer: " + computerScore);
        if (playerScore > computerScore) {
            console.log("You win the game!");
        } else if (playerScore < computerScore) {
            console.log("You lost the game :(");
        } else {
            console.log("You tied with the computer, good try.");
        }
    }

    game();