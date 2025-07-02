// Math.random() returns a random number between 0 (inclusive) and 1 (exclusive)
// Math.random() can be used to generate random numbers within a specific range
console.log(Math.random()); // e.g., 0.123456789

const randomNum = Math.floor(Math.random() * 10 + 1); // generates a random number between 1 and 10
console.log("Random number between 1 and 10:", randomNum);

function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min; // generates a random number between min and max
}

generateRandomNumber(1, 100); // generates a random number between 1 and 100
generateRandomNumber(50, 150); // generates a random number between 50 and 150
generateRandomNumber(1000, 2000); // generates a random number between 1000 and 2000
generateRandomNumber(0, 1); // generates a random number between 0 and