let correctPassword = "password";
let password;

// Loop until the user enters the correct password
do {
  password = prompt("Enter your password: ");
  if (password !== correctPassword) {
    console.log("Incorrect!");
  }
} while (password !== correctPassword);

console.log("Correct!");

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/do...while