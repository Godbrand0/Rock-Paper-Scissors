const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

let player = 0;
let computer = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "TIE";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "WIN" : "LOSE";
        break;
      case "paper":
        result = computerChoice === "rock" ? "WIN" : "LOSE";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "WIN" : "LOSE";
        break;
    }
  }
  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");
  switch (result) {
    case "WIN":
      resultDisplay.classList.add("greenText");
      player++;
      playerScore.textContent = player;
      break;

    case "LOSE":
      resultDisplay.classList.add("redText");
      computer++;
      computerScore.textContent = computer;
      break;
  }
}
