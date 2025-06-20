// if statement

/*
let temperature = 30; //number that is 30

if(temperature > 25) {
  console.log("It is a hot day! Stay hydrated")
}
  */

// ELSE IF
/*
const marks = 85;

if (marks >= 90) {
  console.log('Grade A')
} else if (marks >= B) {
  console.log('grade 80') 
} else if (marks >= 70) {
  console.log('Grade C')
} else if (marks >= 60) {
  console.log('Grade D')
} else {
  console.log("Grade F")
}
  */

//CHECKING FOR MULTIPLE CONDITIONS WITH () &&, || )

/*
const age = 20;
const hasDrivingLicense = true;

if(age >= 18 && hasDrivingLicense) {
  console.log("you can drive");
} else {
  console.log("you can not drive");
}
  */

// TERNARY OPERATORS

const islLoggedIn = false;

const msg = islLoggedIn ? "welcome back" : "please log in";
console.log(msg)