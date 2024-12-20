// Linked List - Node Listing

class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    append(value) {
      let newNode = new Node(value);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    print() {
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  // Create a new LinkedList
  let list = new LinkedList();
  
  // Append new nodes
  list.append("Data Structures - Array");
  list.append("Variable Type - Integer");
  list.append("Sorting Algorithm - Bubble Sort");
  
  // Print the linked list
  list.print();