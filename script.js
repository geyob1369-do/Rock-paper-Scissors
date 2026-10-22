
function getComputerChoice() {
    const randomNumber = Math.random();

    if (randomNumber < 1 / 3) {
        return "rock";
    } else if (randomNumber < 2 / 3) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    return prompt("Choose rock, paper, or scissors").toLowerCase();
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

    results.innerHTML += `
        <p>Round: ${round}/5</p>
        <p>${message}</p>
        <p>Score: You ${humanScore} - Computer ${computerScore}</p>
    `;

    if (round === 5) {
        if (humanScore > computerScore) {
            results.innerHTML += "<h2>You won the game!</h2>";
        } else if (computerScore > humanScore) {
            results.innerHTML += "<h2>The computer won the game!</h2>";
        } else {
            results.innerHTML += "<h2>The game is a tie!</h2>";
        }

        buttons.forEach(button => {
            button.disabled = true;
        });
    }
}

buttons.forEach(button => {
    button.addEventListener("click", () => {
        playRound(button.id);
    });
});
