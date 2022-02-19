let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playerPlay() {
  let selection = prompt("Rock, paper, or scissors?");
  return selection.toLowerCase();
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  if (playerSelection === "rock") {
    if (computerSelection === "paper") {
      return "You lose! Paper beats rock.";
    } else {
      return "You win! Rock beats scissors.";
    }
  }
  if (playerSelection === "paper") {
    if (computerSelection === "scissors") {
      return "You lose! Scissors beats paper.";
    } else {
      return "You win! Paper beats rock.";
    }
  }
  if (playerSelection === "scissors") {
    if (computerSelection === "rock") {
      return "You lose! Rock beats scissors.";
    } else {
      return "You win! Scissors beats paper.";
    }
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    player = playerPlay();
    computer = computerPlay();

    const result = playRound(player, computer);
    if (result.includes("win!")) {
      playerScore++;
    } else if (result.includes("lose!")) {
      computerScore++;
    } else {
      continue;
    }

    console.log(result);
    console.log(`Player: ${playerScore} Computer: ${computerScore}`);
  }
  if (playerScore > computerScore) {
    console.log("Player wins!");
  } else if (playerScore < computerScore) {
    console.log("Computer wins!");
  } else {
    console.log("It's a tie!");
  }
}
