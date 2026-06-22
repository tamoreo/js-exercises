// function getComputerChoice() {
//   let computerChoice = Math.random();

//   if (computerChoice < 0.33) {
//     return "rock";
//   } else if (computerChoice < 0.66) {
//     return "paper";
//   } else {
//     return "scissors";
//   }
// }

// console.log(getComputerChoice());

// function getHumanChoice() {
//   let humanChoice = prompt("Rock, Paper or Scissors\nWhat is your choice?");
//   humanChoice = humanChoice.toLowerCase();

//   return humanChoice;
// }

// console.log(getHumanChoice());

// let humanScore = 0;
// let computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   if (humanChoice === computerChoice) {
//     return "Its a Tie!";
//   } else if (
//     (humanChoice === "rock" && computerChoice === "paper") ||
//     (humanChoice === "paper" && computerChoice === "Scissors") ||
//     (humanChoice === "scissors" && computerChoice === "rock")
//   ) {
//     return "One a Winner!";
//   } else {
//     return "Play again!";
//   }
// }
// const humanChoice = getHumanChoice();
// const computerChoice = getComputerChoice();
// console.log(playRound());

function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors\nWhat is your choice?");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "") {
      console.log("Please make a choice");
    } else if (humanChoice === computerChoice) {
      console.log("It's a tie!.");
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
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`Your Score is: ${humanScore} and Computer is: ${computerScore}`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("The computer won the game!");
  } else {
    console.log("Its a tie game!");
  }
}

playGame();
