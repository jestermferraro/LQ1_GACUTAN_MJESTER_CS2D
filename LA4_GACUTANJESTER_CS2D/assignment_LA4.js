
// Queueing System for Customer

let customerQueue = [];

// Function to add customer
function addCustomer() {
  let name = prompt("Enter customer name: ");
  customerQueue.push(name);
  console.log(`Customer added: ${name} (Number: ${customerQueue.length})`);
}

// Function to service customer
function serviceCustomer() {
  console.log(`Current Queue: ${customerQueue}`);
  let number = parseInt(prompt("Enter number to service: "));
  if (number > 0 && number <= customerQueue.length) {
    let customerName = customerQueue[number - 1];
    alert(`Servicing customer: ${customerName}`);
    customerQueue.splice(number - 1, 1);
    console.log(`Updated Queue: ${customerQueue}`);
  } else {
    alert("Please type the correct number and try again.");
  }
}

// Add 5 customers to queue
for (let i = 0; i < 5; i++) {
  addCustomer();
}

// Service customers
while (true) {
  serviceCustomer();
  if (customerQueue.length === 0) {
    alert("All customers have been serviced.");
    break;
  }
}