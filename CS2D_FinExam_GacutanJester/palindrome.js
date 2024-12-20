// Palindrome

// Declare two variables containing the words
let word1 = prompt("Enter the first word: ");
let word2 = prompt("Enter the second word: ");

// Log to the console the original strings
console.log(`Original strings: ${word1}, ${word2}`);

// Reverse the strings
let reversedWord1 = word1.split("").reverse().join("");
let reversedWord2 = word2.split("").reverse().join("");

// Log to the console the reversed strings
console.log(`Reversed strings: ${reversedWord1}, ${reversedWord2}`);

// Check if the original strings are equivalent to the reversed strings
console.log(`Is ${word1} a palindrome? ${word1 === reversedWord1}`);
console.log(`Is ${word2} a palindrome? ${word2 === reversedWord2}`);