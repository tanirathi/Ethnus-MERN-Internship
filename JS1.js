function reverseNumber(x) 
{
  // Convert the number to a string
    const numStr = x.toString();

  // Split the string into an array of characters, reverse it, and join it back
    const reversedStr = numStr.split("").reverse().join("");

  // Convert the reversed string back to a number
    const reversedNum = parseInt(reversedStr, 10);

    return reversedNum;
}

// Test the function
const x = 32243;
const reversedX = reverseNumber(x);
console.log(reversedX); // Output: 34223
