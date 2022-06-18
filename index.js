function isPalindrome(word) {
  // Write your algorithm here
  let reverseWord = word.split("").reverse().join("")

  return word === reverseWord;
}

/* 
  Add your pseudocode here
  Create a new variable reverseWord
  Split it, reverse the splitted word and joining it back to a string
  If the reversed word is same as the original word it returns true else false
*/

/*
  Add written explanation of your solution here
  I created a new variable reverseWord which is equivalent to the word which is splitted, reversed and joined
  The code checks if the reverseWord is equal to word and it returns true else false if they are not equal
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
