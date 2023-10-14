function sortStringAlphabetically(str) {
    // Split the string into an array of characters, sort it, and join it back
      const sortedStr = str.split("").sort().join("");
      return sortedStr;
  }
  
  // Test the function
  const inputString = "webmaster";
  const sortedString = sortStringAlphabetically(inputString);
  console.log(sortedString); // Output: 'abeemrstw'
  