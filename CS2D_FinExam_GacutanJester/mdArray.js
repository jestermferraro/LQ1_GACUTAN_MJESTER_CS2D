// Multi-dimensional Array - Array Restructuring

// Declare a multi-dimensional array
let subArray1 = prompt("Enter the names (Genevieve, Juan, Luna, Gabriel, Elise): ");
let subArray2 = prompt("Enter the ages (24, 65, 21, 5, 9): ");

// Parse the input strings into arrays
subArray1 = subArray1.split(", ");
subArray2 = subArray2.split(", ").map(Number);

// Restructure the multi-dimensional array
let restructuredArray = [];
for (let i = 0; i < subArray1.length; i++) {
  restructuredArray.push([subArray1[i], subArray2[i]]);
}

// Log the restructured multi-dimensional array to the console
for (let i = 0; i < restructuredArray.length; i++) {
  console.log(`Name: ${restructuredArray[i][0]}, Age: ${restructuredArray[i][1]}`);
}