/* 
part 1: Create function getComputerChoice
Make this function randomly return words (rock paper and scissors)

part 2: Create a function that has two parameters with the names playerSelection 
and computerSelection
Make this function return a string/sentence that states whether you win or lose.
The playerSelection should be caseinsensitive (rock = ROcK )

part 3:continue writing more pseudocode after above is complete

*/
var myArray = ['Rock', 'Paper', 'Scissors']; 
var getComputerChoice = myArray[(Math.random() * myArray.length) | 0]
console.log(getComputerChoice);