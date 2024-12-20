// Sorting Algorithms with Bubble Sort

// Create an empty array to store the numbers
let numbers = [];

// Get the numbers from the user using prompt() function and push() function
for (let i = 0; i < 10; i++) {
  let num = parseInt(prompt(`Enter number ${i + 1}: `));
  numbers.push(num);
}

// Function to implement the Bubble Sort Algorithm
function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log(`Swapped ${arr[j]} and ${arr[j + 1]}`);
      }
    }
  }
  return arr;
}

// Pass the numbers array to the bubble sort function
let sortedNumbers = bubbleSort(numbers);

// Log the sorted array to the console
console.log(`Sorted array: ${sortedNumbers}`);