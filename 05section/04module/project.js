function calculateAverage(score1, score2, score3) {
  return (score1 + score2 + score3) / 3;
}

function assignGrade(average) {
    if (average >= 90) {
    return "A";
  } else if (marks >= B) {
    return "B";
  } else if (marks >= 70) {
    return "C";
  } else if (marks >= 60) {
    return "D";
  } else {
    return "E";
  }
}

//get user input
const score1 = parseFloat(prompt("Enter first score"))
const score2 = parseFloat(prompt("Enter second score"))
const score3 = parseFloat(prompt("Enter third score"))

const average = calculateAverage(score1, score2, score3)
const grade = assignGrade(`Average Score: ${average}`);
console.log(`Final Grade: ${grade}`);