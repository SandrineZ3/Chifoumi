let playerScoreDisplayed = document.getElementById("playerScoreDisplayed");
let computerScoreDisplayed = document.getElementById("computerScoreDisplayed");
let playerChoiceDisplayed = document.getElementById("playerChoiceDisplayed");
let playerChoice;
let computerChoiceDisplayed = document.getElementById("computerChoiceDisplayed");
let computerChoice;

let playerScore = 0;
let computerScore = 0;

const ROCK = document.getElementById("buttonRockPlayer");
const PAPER = document.getElementById("buttonPaperPlayer");
const SCISSORS = document.getElementById("buttonScissorsPlayer");

ROCK.addEventListener("click", showplayerChoice);
PAPER.addEventListener("click", showplayerChoice);
SCISSORS.addEventListener("click", showplayerChoice);

const PLAY_AGAIN = document.getElementById("playAgain");

PLAY_AGAIN.addEventListener("click", newGame);

function showplayerChoice() {
  if (this == ROCK) {
    playerChoiceDisplayed.innerHTML =
      "<img src='assets/img/rock.png' width='200px' height='200px'>";
    playerChoice = 1;
  } else if (this == PAPER) {
    playerChoiceDisplayed.innerHTML =
      "<img src='assets/img/paper.png' width='200px' height='200px'>";
    playerChoice = 2;
  } else {
    playerChoiceDisplayed.innerHTML =
      "<img src='assets/img/scissors.png' width='200px' height='200px'>";
    playerChoice = 3;
  }
  showcomputerChoice();
  updateScores();
}

function showcomputerChoice() {
  const COMPUTER_OPTIONS = ["rock", "paper", "scissors"];
  let randomComputerOptions =
    COMPUTER_OPTIONS[Math.floor(Math.random() * COMPUTER_OPTIONS.length)];

  if (randomComputerOptions == "rock") {
    computerChoiceDisplayed.innerHTML =
      "<img src='assets/img/rock.png' width='200px' height='200px'>";
    computerChoice = 1;
  } else if (randomComputerOptions == "paper") {
    computerChoiceDisplayed.innerHTML =
      "<img src='assets/img/paper.png' width='200px' height='200px'>";
    computerChoice = 2;
  } else {
    computerChoiceDisplayed.innerHTML =
      "<img src='assets/img/scissors.png' width='200px' height='200px'>";
    computerChoice = 3;
  }
}

function updateScores() {
  if (
    (playerChoice == 1 && computerChoice == 2) ||
    (playerChoice == 2 && computerChoice == 3) ||
    (playerChoice == 3 && computerChoice == 1)
  ) {
    computerScore++;
    computerScoreDisplayed.innerHTML = computerScore;
    blinkComputerScore();
  } else if (
    (playerChoice == 1 && computerChoice == 3) ||
    (playerChoice == 2 && computerChoice == 1) ||
    (playerChoice == 3 && computerChoice == 2)
  ) {
    playerScore++;
    playerScoreDisplayed.innerHTML = playerScore;
    blinkPlayerScore();
  }
  if (computerScore == 5 || playerScore == 5) {
    endOfGame();
  }
}

function endOfGame() {
  if (computerScore == 5) {
    document.getElementById("lose").className = "displayResult";
    playLose();
  } else if (playerScore == 5) {
    document.getElementById("win").className = "displayResult";
    playWin();
  }
  document.getElementsByName("playerButton").forEach((e) => {
    e.disabled = true;
  });
  PLAY_AGAIN.style.display = "block";
}

function newGame() {
  document.location.reload();
}

/* Effects functions */
function blinkPlayerScore() {
  document.getElementById("playerScoreDisplayed").animate([
      { opacity: "1" }, { opacity: "0" }], {
      iterations: 3,
      duration: 300,
    });
}

function blinkComputerScore() {
  document.getElementById("computerScoreDisplayed").animate([
      { opacity: "1" }, { opacity: "0" }], {
      iterations: 3,
      duration: 300,
    });
}

/* Sound functions */
function playClick() {
  let audio = document.getElementById("selectSound");
  audio.volume = 0.3;
  audio.play();
}

function playWin() {
  let audio = document.getElementById("winSound");
  audio.volume = 0.3;
  audio.play();
}

function playLose() {
  let audio = document.getElementById("loseSound");
  audio.volume = 0.3;
  audio.play();
}
