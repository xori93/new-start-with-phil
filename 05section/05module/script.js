// init students array
const students = [];

// add student
function addStudent(name, grade) {
  students.push({
    name,
    grade,
  });
}

// function to remove students
function removeStudent(name) {
  const index = students.findIndex(student => student.name === name);
  if (index !== -1) {
    students.splice(index, 1);
    console.log(name, "has been removed");
  } else {
    console.log(name, "was not found");
  }
}


//function to filter student

function filterTopStudents(minGrade) {
  return students.filter(student => student.grade >= minGrade);
}

//function to map students in formatted list
function formatStudentList() {
  return students.map(student => `${student.name} - Grade: ${student.grade}`)
}

console.log("students =", students);

// Add students
addStudent("Alice", 50);
addStudent("Jane", 90);
addStudent("Bob", 78);
addStudent("Ralf", 60);
addStudent("Peter", 93);
addStudent("Sam", 85);

console.log("STUDENT LIST:");
removeStudent("Ralf");
// console.log("students =", students);
// console.log(formatStudentList());

console.log("students with Grades equal to or higher than 80");
console.log(filterTopStudents(80));