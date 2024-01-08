// Write a program to print the firstfunction 

function firstNonRepeatedCharacter(str) {
    // Create a map to store the count of each character
    const charCountMap = new Map();
  
    // Iterate through the string to populate the map
    for (const char of str) {
      charCountMap.set(char, (charCountMap.get(char) || 0) + 1);
    }
  
    // Iterate through the string again to find the first non-repeated character
    for (const char of str) {
      if (charCountMap.get(char) === 1) {
        return char;
      }
    }
  
    // Return null if no non-repeated character is found
    return null;
  }
  
  // Example usage:
  const inputString = "programming";
  const result = firstNonRepeatedCharacter(inputString);
  
  if (result !== null) {
    console.log(`The first non-repeated character in "${inputString}" is: ${result}`);
  } else {
    console.log(`There is no non-repeated character in "${inputString}".`);
  }
  

