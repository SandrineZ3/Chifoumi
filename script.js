let playerScoreDisplayed = document.getElementById("playerScoreDisplayed");
let computerScoreDisplayed = document.getElementById("computerScoreDisplayed");
let playerChoiceDisplayed = document.getElementById("playerChoiceDisplayed");
let playerChoice;
let computerChoiceDisplayed = document.getElementById("computerChoiceDisplayed");
let computerChoice;

const ROCK = document.getElementById("buttonRockPlayer");
const PAPER = document.getElementById("buttonPaperPlayer");
const SCISSORS = document.getElementById("buttonScissorsPlayer");

/*Une fois arrivé à 3 pts, "you win" !*/

ROCK.addEventListener('click', showplayerChoice);
PAPER.addEventListener('click', showplayerChoice);
SCISSORS.addEventListener('click', showplayerChoice);

function showplayerChoice() {
    if(this == ROCK) {
        playerChoiceDisplayed.innerHTML = "<img src='assets/img/rock.png' width='200px' height='200px'>";
        playerChoice = 1;
    }
    else if(this == PAPER) {
        playerChoiceDisplayed.innerHTML = "<img src='assets/img/paper.png' width='200px' height='200px'>";
        playerChoice = 2;
    } 
    else {
        playerChoiceDisplayed.innerHTML = "<img src='assets/img/scissors.png' width='200px' height='200px'>";
        playerChoice = 3;
    }
    showcomputerChoice();
  }


function showcomputerChoice() {
    const COMPUTER_OPTIONS = ["rock", "paper", "scissors"];
    let randomComputerOptions = COMPUTER_OPTIONS[Math.floor(Math.random() * COMPUTER_OPTIONS.length)];

    if(randomComputerOptions == "rock") {
        computerChoiceDisplayed.innerHTML = "<img src='assets/img/rock.png' width='200px' height='200px'>";
        computerChoice = 1;
    }
    else if (randomComputerOptions == "paper") {
        computerChoiceDisplayed.innerHTML = "<img src='assets/img/paper.png' width='200px' height='200px'>";
        computerChoice = 2;
    } else {
        computerChoiceDisplayed.innerHTML = "<img src='assets/img/scissors.png' width='200px' height='200px'>";
        computerChoice = 3;
    }
    updateScores();
  }


function updateScores() {
    let playerScore = 0;
    let computerScore = 0;

    if((playerChoice == 1 && computerChoice == 2) || (playerChoice == 2 && computerChoice == 3) || (playerChoice == 3 && computerChoice == 1)) {
        computerScore++;
        computerScoreDisplayed.innerHTML = computerScore;
    } else if((playerChoice == 1 && computerChoice == 3) || (playerChoice == 2 && computerChoice == 1) || (playerChoice == 3 && computerChoice == 2)) {
        playerScore++;
        playerScoreDisplayed.innerHTML = playerScore;
    } 
 }


