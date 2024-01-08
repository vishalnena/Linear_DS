// Q3 Write a program to check if two strings are a rotation of each other?

function areRotations(str1, str2) {
    // Check if lengths of both strings are equal and not empty
    if (str1.length !== str2.length || str1.length === 0) {
      return false;
    }
  
    // Concatenate str1 with itself to check for rotation
    const concatenatedStr = str1 + str1;
  
    // Check if str2 is a substring of the concatenated string
    return concatenatedStr.includes(str2);
  }
  
  // Example usage:
  const string1 = "abcde";
  const string2 = "deabc";
  
  if (areRotations(string1, string2)) {
    console.log(`${string1} and ${string2} are rotations of each other.`);
  } else {
    console.log(`${string1} and ${string2} are not rotations of each other.`);
  }
  