
const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;
let round = 0;

const results = document.querySelector("#results");
const buttons = document.querySelectorAll("button");

function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

function playRound(playerSelection) {
    if (round >= 5) return;

    round++;

    const computerSelection = getComputerChoice();
    let message = "";

    if (playerSelection === computerSelection) {
        message = `Tie! Both chose ${playerSelection}.`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore++;
        message = `You win this round! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        message = `You lose this round! ${computerSelection} beats ${playerSelection}.`;
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
