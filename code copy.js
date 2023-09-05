// Function to get the computer's random choice
function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to play a single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You Win! " + playerSelection + " beats " + computerSelection + ".";
    } else {
        return "You Lose! " + computerSelection + " beats " + playerSelection + ".";
    }
}

// Function to play a 5 round game
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 1; round <= 5; round++) {
        const playerChoice = prompt("Round " + round + ": Enter your choice (Rock/Paper/Scissors):");
        const computerChoice = getComputerChoice();

        const roundResult = playRound(playerChoice, computerChoice);
        console.log("Round " + round + ": " + roundResult);

        if (roundResult.includes("Win")) {
            playerScore++;
        } else if (roundResult.includes("Lose")) {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (computerScore > playerScore) {
        console.log("Sorry, you lose the game.");
    } else {
        console.log("It's a tie! The game is a draw.");
    }
}

// Start the game
game();
