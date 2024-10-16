// Function to check who wins
function rockPaperScissors(player1, player2) {
  // Players Drawing
  if (player1 === player2) {
    return "draw"
  }
  // Rock beating scissors
  else if ((player1 === "rock") && (player2 === "scissors")){
    return "player1"
  }
  // Paper beating rock
  else if ((player1 === "paper") && (player2 === "rock")) {
    return "player1"
  }
  // Scissors beating paper
  else if ((player1 === "scissors") && (player2 === "paper")) {
    return "player1"
  }
  else if ((player1 === "lizard") && (player2 === "spock")) {
    return "player1"
  }
  else if ((player1 === "spock") && (player2 === "scissors")) {
    return "player1"
  }
  else if ((player1 === "rock") && (player2 === "lizard")) {
    return "player1"
  }
  else if ((player1 === "paper") && (player2 === "spock")) {
    return "player1"
  }
  else if ((player1 === "scissors") && (player2 === "lizard")) {
    return "player1"
  }
  else if ((player1 === "lizard") && (player2 === "paper")){
    return "player1"
  }
  else if ((player1 === "spock") && (player2 === "rock")){
    return "player1"
  }
  else {
    return "player2"
  }
}

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}

// Letting user input whether they want rock paper or scissors
const readline = require("readline-sync")
let player1Input = readline.question("Rock, Paper, Scissors, Lizard or Spock? ")
let player2Input = readline.question("Rock, Paper or Scissors, Lizard or Spock? ")

// Outputting the winner
console.log(rockPaperScissors(player1Input,player2Input))