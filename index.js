function isPalindrome(word) {
  const len = word.length; // get the length of the string
  for (let i = 0; i < len / 2; i++) {
    // iterate over the string from both ends, comparing the characters
    if (word[i] !== word[len - 1 - i]) {
      // if any characters don't match, the string is not a palindrome
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here

  the function starts by calculating the length of the string using the length property. It then uses a for loop to iterate over the string from the beginning and end at the same time. The loop compares the characters at each end of the string, checking if they are equal. If any characters don't match, the function immediately returns false. If all characters match, the loop completes, and the function returns true.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;