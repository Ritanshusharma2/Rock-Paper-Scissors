const choices = ["rock", "paper", "scissors"];
const choiceButtons = document.querySelectorAll(".choice-btn");
const resultText = document.getElementById("result-text");
const roundSummary = document.getElementById("round-summary");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const resetBtn = document.getElementById("reset-btn");

let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return "draw";

  const winningPairs = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winningPairs[user] === computer) return "win";
  return "lose";
}

function formatChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1);
}

function updateScoreboard() {
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
}

function playRound(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);

  if (result === "win") {
    userScore += 1;
    resultText.textContent = "You win!";
  } else if (result === "lose") {
    computerScore += 1;
    resultText.textContent = "Computer wins!";
  } else {
    resultText.textContent = "It’s a draw!";
  }

  roundSummary.textContent = `You: ${formatChoice(userChoice)} | Computer: ${formatChoice(computerChoice)}`;
  updateScoreboard();
}

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.dataset.choice);
  });
});

resetBtn.addEventListener("click", () => {
  userScore = 0;
  computerScore = 0;
  resultText.textContent = "Make your first move!";
  roundSummary.textContent = "You: — | Computer: —";
  updateScoreboard();
});

updateScoreboard();
