// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * choices.length);
//     return choices[randomIndex];
// }

// // const computerChoice = getComputerChoice();
// // alert(computerChoice); // Output: 'rock', 'paper', or 'scissors'

// function getHumanChoice() {
//     prompt();
// }
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return;
        ("It's a tie!");
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5; // Adjust the number of rounds as needed

    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt(
            "Enter your choice (rock, paper, or scissors):"
        );
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);

        console.log(`Round ${i + 1}: ${result}`);
        console.log(`Player: ${playerScore} | Computer: ${computerScore}`);

        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }

    if (playerScore > computerScore) {
        console.log("You won the game!");
    } else if (playerScore < computerScore) {
        console.log("You lost the game!");
    } else {
        console.log("It's a tie!");
    }
}

game();
