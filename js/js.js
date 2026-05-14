let playerScore = 0;
let computerScore = 0;
let choices = ["rock", "paper", "scissors"];

function getComputerChoice(){

    let index = Math.floor(Math.random() * choices.length);

    return choices[index];

}

function playRound(playerChoice){

console.log("Playing Round" + playerChoice);

}

document.getElementById("rock").addEventListener("click", function() {
    playRound("rock");
});
document.getElementById("paper").addEventListener("click", function() {
    playRound("paper");
});
document.getElementById("scissors").addEventListener("click", function() {
    playRound("scissors");
});

function determineWinner(pc,cc){

    if (pc === cc ) {

  return"You Tied!";

} else if (pc == "scissors" && cc == "paper") {
updateScore("player");
  return "You Win!";

} else if (pc == "paper" && cc == "rock") {

updateScore("player");
  return "You Win!";

}

else if (pc == "paper" && cc == "rock") {

  updateScore("player");
  return "You Win!";

}

else if (pc == "scissors" && cc == "rock") {

  updateScore("computer");
  return "You Lose!";

}

else if (pc == "paper" && cc == "scissors") {

  updateScore("computer");
  return "You Lose!";

}

else if (pc == "rock" && cc == "paper") {

  updateScore("computer");
  return "You Lose!";

}

}
