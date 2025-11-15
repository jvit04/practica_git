// ====================================
// SIMPLE JAVASCRIPT EXAMPLES
// ====================================

// 1. Variables and Basic Data Types
const name = "José";
const age = 21;
const isLearning = true;
const skills = ["Git", "GitHub", "JavaScript"];

console.log("My name is: " + name);
console.log("Age: " + age);
console.log("Learning: " + isLearning);

// 2. Simple Function
function greet(personName) {
  return "Hello, " + personName + "!";
}

console.log(greet("Developer"));

// 3. Math Operations
function addNumbers(a, b) {
  return a + b;
}

console.log("Sum of 5 + 3 = " + addNumbers(5, 3));

// 4. Loop - Repeat something
function printNumbers(limit) {
  for (let i = 1; i <= limit; i++) {
    console.log("Number: " + i);
  }
}

printNumbers(3);

// 5. Object - Group related data
const student = {
  name: "José",
  course: "Git & GitHub",
  progress: 50
};

console.log(student.name + " is learning " + student.course);
