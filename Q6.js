// Q6. Read about infix, prefix, and postfix expressions. Write a program to convert postfix to prefix expression.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function postfixToPrefix(postfixExpression) {
    const stack = [];
  
    for (let i = 0; i < postfixExpression.length; i++) {
      const currentChar = postfixExpression[i];
  
      if (!isOperator(currentChar)) {
        // If it's an operand, push it to the stack
        stack.push(currentChar);
      } else {
        // If it's an operator, pop two operands from the stack and concatenate them with the operator
        const operand2 = stack.pop();
        const operand1 = stack.pop();
        const prefixExpression = `${currentChar}${operand1}${operand2}`;
  
        // Push the resulting expression back to the stack
        stack.push(prefixExpression);
      }
    }
  
    // The final result is at the top of the stack
    return stack.pop();
  }
  
  // Example usage:
  const postfixExpression = "23+5*";
  const prefixExpression = postfixToPrefix(postfixExpression);
  
  console.log(`Postfix Expression: ${postfixExpression}`);
  console.log(`Prefix Expression: ${prefixExpression}`);
  