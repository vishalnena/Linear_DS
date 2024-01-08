// Q10. Write a program to find the smallest number using a stack.

class MinStack {
    constructor() {
      this.stack = [];
      this.minStack = [];
    }
  
    push(value) {
      this.stack.push(value);
  
      // Update the minimum stack
      if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(value);
      }
    }
  
    pop() {
      if (this.stack.length === 0) {
        return null;
      }
  
      const poppedValue = this.stack.pop();
  
      // Update the minimum stack if the popped value is the current minimum
      if (poppedValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
  
      return poppedValue;
    }
  
    getMin() {
      if (this.minStack.length === 0) {
        return null;
      }
      return this.minStack[this.minStack.length - 1];
    }
  }
  
  // Example usage:
  const myMinStack = new MinStack();
  
  myMinStack.push(3);
  myMinStack.push(5);
  myMinStack.push(2);
  myMinStack.push(7);
  myMinStack.push(1);
  
  console.log("Current minimum:", myMinStack.getMin());
  
  myMinStack.pop();
  myMinStack.pop();
  
  console.log("Current minimum after pops:", myMinStack.getMin());
  