// Generate a random number between 1 and 10
const number = Math.floor(Math.random() * 10) + 1;

// Loop until the user guesses the correct number
while (true) {
  let guess = prompt("Guess a number between 1 and 10: ");

  if (parseInt(guess) < number) {
    console.log("Too low!");
  } else if (parseInt(guess) > number) {
    console.log("Too high!");
  } else {
    console.log(`Correct!`);
    break;
  }
}

// Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/while