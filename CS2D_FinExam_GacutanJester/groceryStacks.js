// Grocery Item Stacks

// Create an empty array to store the grocery items
let groceryItems = [];

// Function to peek at the current top item in the stack
function peek() {
  if (groceryItems.length === 0) {
    return "Stack is empty";
  } else {
    return groceryItems[groceryItems.length - 1];
  }
}

// Function to push a new item onto the stack
function push(item) {
  groceryItems.push(item);
  console.log(`Added ${item} to the stack`);
  console.log(`Current stack: ${groceryItems}`);
  console.log(`Top item: ${peek()}`);
}

// Function to pop the top item off the stack
function pop() {
  if (groceryItems.length === 0) {
    console.log("Stack is empty");
  } else {
    let item = groceryItems.pop();
    console.log(`Removed ${item} from the stack`);
    console.log(`Current stack: ${groceryItems}`);
    console.log(`Top item: ${peek()}`);
  }
}

// Get the 5 grocery items from the user
for (let i = 0; i < 5; i++) {
  let item = prompt(`Enter grocery item ${i + 1}: `);
  push(item);
}

// Test the pop function
pop();