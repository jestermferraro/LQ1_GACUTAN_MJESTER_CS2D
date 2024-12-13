// Queueing System for Customer Service with a HASH Function

let customerHash = {};
let nextNumber = 1;

// Function to add customer to hash table
function addCustomer() {
  let name = prompt("Enter customer name: ");
  customerHash[name] = nextNumber;
  console.log(`Customer added: ${name} (Number: ${nextNumber})`);
  nextNumber++;
}

// Function to service customer
function serviceCustomer() {
  console.log(`Current Hash Table: ${JSON.stringify(customerHash)}`);
  let number = parseInt(prompt("Enter number to service: "));
  if (number > 0 && number <= Object.keys(customerHash).length) {
    let customerName = Object.keys(customerHash)[number - 1];
    alert(`Servicing customer: ${customerName}`);
    delete customerHash[customerName];
    console.log(`Updated Hash Table: ${JSON.stringify(customerHash)}`);
  } else {
    alert("Please type the correct number and try again.");
  }
}

// Add 5 customers to hash table
for (let i = 0; i < 5; i++) {
  addCustomer();
}

// Service customers
while (true) {
  serviceCustomer();
  if (Object.keys(customerHash).length === 0) {
    alert("All customers have been serviced.");
    break;
  }
}