// Function to check who wins
function rockPaperScissors(player1, player2) {
  const options = ["rock","paper","scissors","spock","lizard"];
  // The key here shows each choice and then what it would beat on the right
  const winningOptions = {
    rock: ['scissors', 'lizard'],
    paper: ['rock', 'spock'],
    scissors: ['paper', 'lizard'],
    lizard: ['spock', 'paper'],
    spock: ['scissors', 'rock'] 
  };
  if (player1 === player2) {
    return "draw"
  }
  //Player 1 is being used as a reference and player 2 is then being compared against player 1 to see if they win or lose
  else if (winningOptions[player1].includes(player2)) { 
    return "player1";
  }
  else {
    return "player2";
  }
}

// Outputting the winner
console.log(rockPaperScissors("rock","spock"))

// Leave this code here for the automated tests
module.exports = {
  rockPaperScissors,
}