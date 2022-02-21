let computerPlay = function () {
  let guess = Math.trunc(Math.random() * 3) + 1;
  if (guess === 1) {
    computerPlay = "Rock";
  } else if (guess === 2) {
    computerPlay = "Paper";
  } else {
    computerPlay = "Scissors";
  }
};

computerPlay();

console.log(computerPlay);

let roundResult = function (playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("Its a Tie!");
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Paper") {
      console.log("CPU won, Paper beats Rock! ");
    } else {
      console.log("Player won, Rock beats Scissors");
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Scissors") {
      console.log("CPU won, Scissors beats Paper");
    } else {
      console.log("Player won, Paper beats Rock");
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Rock") {
      console.log("CPU won,Rock beats Scissors");
    } else {
      console.log("Player won, Paper beats Rock");
    }
  }
};

console.log(roundResult("Rock", computerPlay));
