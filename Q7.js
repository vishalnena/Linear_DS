// Q7. Write a program to convert prefix expression to infix expression.

function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  
  function prefixToInfix(prefixExpression) {
    const stack = [];
  
    // Iterate through the expression in reverse order
    for (let i = prefixExpression.length - 1; i >= 0; i--) {
      const currentChar = prefixExpression[i];
  
      if (!isOperator(currentChar)) {
        // If it's an operand, push it to the stack
        stack.push(currentChar);
      } else {
        // If it's an operator, pop two operands from the stack and concatenate them with the operator
        const operand1 = stack.pop();
        const operand2 = stack.pop();
        const infixExpression = `(${operand1}${currentChar}${operand2})`;
  
        // Push the resulting expression back to the stack
        stack.push(infixExpression);
      }
    }
  
    // The final result is at the top of the stack
    return stack.pop();
  }
  
  // Example usage:
  const prefixExpression = "*+23*5-4/62";
  const infixExpression = prefixToInfix(prefixExpression);
  
  console.log(`Prefix Expression: ${prefixExpression}`);
  console.log(`Infix Expression: ${infixExpression}`);
  