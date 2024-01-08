// Q8. Write a program to check if all the brackets are closed in a given code snippet.

function areBracketsClosed(codeSnippet) {
    const stack = [];
    const brackets = { '(': ')', '[': ']', '{': '}' };
  
    for (let i = 0; i < codeSnippet.length; i++) {
      const currentChar = codeSnippet[i];
  
      if (brackets[currentChar]) {
        // If it's an opening bracket, push it to the stack
        stack.push(currentChar);
      } else if (Object.values(brackets).includes(currentChar)) {
        // If it's a closing bracket, check if it matches the top of the stack
        if (currentChar !== brackets[stack.pop()]) {
          return false; // Mismatched brackets
        }
      }
    }
  
    // If the stack is empty, all brackets are closed
    return stack.length === 0;
  }
  
  // Example usage:
  const codeSnippet1 = "{(a + b) * [c - d]}";
  const codeSnippet2 = "{(a + b) * [c - d}";
  const codeSnippet3 = "a + b) * [c - d]";
  
  console.log(`Code snippet 1: ${areBracketsClosed(codeSnippet1) ? "Brackets are closed" : "Brackets are not closed"}`);
  console.log(`Code snippet 2: ${areBracketsClosed(codeSnippet2) ? "Brackets are closed" : "Brackets are not closed"}`);
  console.log(`Code snippet 3: ${areBracketsClosed(codeSnippet3) ? "Brackets are closed" : "Brackets are not closed"}`);
  