const choices = ['rock','paper','scissors']
function getComputerChoice() {
   const randomNum = Math.floor(Math.random()*3)

   return choices[randomNum]
}

function getHumanChoice() {
while (true) {
        const humanChoice = prompt("Enter: rock, paper, or scissors");

        // Handle Cancel
        if (humanChoice === null) {
            return null;
        }

        const normalizedhumanChoice = humanChoice.trim().toLowerCase();

        if (choices.includes(normalizedhumanChoice)) {
            return normalizedhumanChoice;
        }

        alert("Invalid choice! Enter rock, paper, or scissors.");
    }
    
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`Tie! Both chose ${humanChoice}.`);
        } else if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            humanScore++;
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        } else {
            computerScore++;
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
        }

        console.log(`Score: You ${humanScore} - Computer ${computerScore}`);
    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    console.log("Game over!");

    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game!");
    } else {
        console.log("The game is a tie!");
    }

    console.log(`Final score: You ${humanScore} - Computer ${computerScore}`);
}

playGame();
