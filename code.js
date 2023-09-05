

// Write Pseudocode
// Click 1 of 3 buttons
// Evaluate the two choices to add score to winner
// Display the winner or tie
// Move on to next round
// Repeat until user or computer wins 5 times
// Declare a winner
// Start new game
// Repeat

/* 
Have the computer randomly select "rock" "paper" or "scissors"
    Define new array and its 3 choices
    Multiply length of array by random number
    Round calculation number down to nearest integer
    Return the array, but only the item in the position that matches the integer
*/

function getComputerChoice(){
    const choices = ["Rock", "Paper", "Scissors"];
     const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

/* 
I need it to evaluate every condition. Do I do this by checking if values match, and if values dont match
what returns AND who wins
is there a way to display every combination without listing them all out
*/


function winner(computerSelection, playerSelection){
    if(computerSelection === playerSelection){
        return "Tie"
    } else if (computerSelection === "rock" && playerSelection === "scissors" || 
                computerSelection === "scissors" && playerSelection === "paper" ||
                computerSelection === "paper" && playerSelection === "rock") {
        return `You lose. You chose ${playerselction}, and the computer chose ${computerSelection}`
    } else {
        return "you win"
    }
}
// Option defined: rock, paper, scissors
// Player defined: user, computer
// outcome defined: win, lose, tie