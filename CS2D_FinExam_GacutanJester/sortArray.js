// Array Sorting

// Declare two single dimensional arrays
let numbers = prompt("Enter the numbers (24, 65, 21, 5, 9, 32, 42, 80, 57): ");
let names = prompt("Enter the names (Zenvo, Erica, Jordie, Alicia, Redon): ");

// Parse the input strings into arrays
numbers = numbers.split(", ").map(Number);
names = names.split(", ");

// Merge both arrays into a single array
let mergedArray = numbers.concat(names);
console.log("Merged array: ", mergedArray);

// Sort numbers numerically in reverse
numbers.sort((a, b) => b - a);
console.log("Sorted numbers in reverse: ", numbers);

// Sort names alphabetically
names.sort();
console.log("Sorted names: ", names);