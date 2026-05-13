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

document.getElementById("rock").addEventListener("click", playRound);
document.getElementById("paper").addEventListener("click", playRound);
document.getElementById("scissor").addEventListener("click", playRound);