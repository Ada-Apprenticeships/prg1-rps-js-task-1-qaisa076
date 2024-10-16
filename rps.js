function rockPaperScissors(player1, player2) {
  // Draw
  if (player1 === player2) {
    return "draw"
  }
  // Rock beating scissors
  else if ((player1 === "rock") && (player2 === "scissors")){
    return "player 1"
  }
  // Paper beating rock
  else if ((player1 === "paper") && (player2 === "rock")) {
    return "player 1"
  }
  // Scissors beating paper
  else if ((player1 === "scissors") && (player2 === "paper")) {
    return "player 1"
  }
  else {
    return "player 2"
  }
}










// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}

