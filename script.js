let computerPlay = function () {
  let guess = Math.trunc(Math.random() * 3) + 1;
  if (guess === 1) {
    return "rock";
  } else if (guess === 2) {
    return "paper";
  } else {
    return "scissors";
  }
};

let playRound = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "Its a Tie!";
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return cpuScore++; //"CPU won, Paper beats Rock! ";
    } else {
      return playerScore++; //"Player won, Rock beats Scissors";
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return cpuScore++; //"CPU won, Scissors beats Paper";
    } else {
      return playerScore++; //"Player won, Paper beats Rock";
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return cpuScore++; //"CPU won,Rock beats Scissors";
    } else {
      return playerScore++; //"Player won, Paper beats Rock";
    }
  }
};

let playerSelection = "Rock";

//console.log("CPU", computerSelection, "Player", playerSelection);

//console.log(playRound(playerSelection, computerSelection));

let game = function () {
  playerScore = 0;
  cpuScore = 0;
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("Rock, Paper or Scissors. Pick one!");
    console.log(playRound(playerSelection, computerPlay()));

    console.log(playerScore, cpuScore);
  }
  if (playerScore === cpuScore) {
    console.log("Its a Tie!");
  } else if (playerScore > cpuScore) {
    console.log("Player Wins!!!");
  } else {
    console.log("CPU Wins!!!");
  }
};

game();
