// 🎲

const scoreTracker = {
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

// roll a dice function get random number from 1 - 6
function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1; // generates a random number between 1 and 6
  scoreTracker[roll]++; // increment the count for the rolled number
  // console.log("scoreTracker =", scoreTracker);
  // console.log("roll =", roll)
  console.log(` 🎲 You rolled a ${roll}`);
}

function displayScores() {
  console.log("Dice Roll Scores Tracker:");
  for (const roll in scoreTracker) {
    console.log(`${roll}: ${scoreTracker[roll]} times`);
  }
}

// Simulate rolling the dice 100 times
for (let i = 0; i < 100; i++) {
  rollDice();
}

// display final scores summary
displayScores();