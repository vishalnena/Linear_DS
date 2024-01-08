// Q9. Write a program to reverse a stack.

class Stack {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.items.length === 0) {
        return null;
      }
      return this.items.pop();
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  
    size() {
      return this.items.length;
    }
  
    peek() {
      return this.items[this.items.length - 1];
    }
  
    print() {
      console.log(this.items.join(' '));
    }
  }
  
  function reverseStack(stack) {
    const auxiliaryStack = new Stack();
  
    // Pop elements from the original stack and push them onto the auxiliary stack
    while (!stack.isEmpty()) {
      auxiliaryStack.push(stack.pop());
    }
  
    // Pop elements from the auxiliary stack and push them back onto the original stack
    while (!auxiliaryStack.isEmpty()) {
      stack.push(auxiliaryStack.pop());
    }
  }
  
  // Example usage:
  const myStack = new Stack();
  myStack.push(1);
  myStack.push(2);
  myStack.push(3);
  myStack.push(4);
  
  console.log("Original Stack:");
  myStack.print();
  
  reverseStack(myStack);
  
  console.log("Reversed Stack:");
  myStack.print();
  