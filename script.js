let computerPlay = function () {
  let guess = Math.trunc(Math.random() * 3) + 1;
  if (guess === 1) {
    computerPlay = "rock";
  } else if (guess === 2) {
    computerPlay = "paper";
  } else {
    computerPlay = "scissors";
  }
};

computerPlay();
console.log(`The computer selected ${computerPlay}`);

let roundResult = function (playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    console.log("Its a Tie!");
  } else if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      console.log("CPU won, Paper beats Rock! ");
    } else {
      console.log("Player won, Rock beats Scissors");
    }
  } else if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      console.log("CPU won, Scissors beats Paper");
    } else {
      console.log("Player won, Paper beats Rock");
    }
  } else if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      console.log("CPU won,Rock beats Scissors");
    } else {
      console.log("Player won, Paper beats Rock");
    }
  }
};

roundResult("RocK", computerPlay);
