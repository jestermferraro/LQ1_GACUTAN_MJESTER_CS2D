let userAge = parseInt(prompt("Enter your age: "));
if (userAge <= 5) {
    console.log("Toddler");
} else if (userAge >= 5 && userAge <= 12) {
    console.log("Child");
} else if (userAge >= 13 && userAge <= 19) {
    console.log("Teenager");
} else if (userAge >= 20 && userAge <= 35) {
    console.log("Young Adult");
} else if (userAge >= 36 && userAge <= 60) {
    console.log("Middle-Aged");
} else if (userAge >= 60) {
    console.log("Senior");
} else {
    console.log("Invalid. Please type the correct number");
}