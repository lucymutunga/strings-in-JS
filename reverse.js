function reverseWords(str) {
  // Split the string into individual words
  const words = str.toString().split(" ");

  // Reverse the order of the words
  const reversedWords = words.reverse();

  // Join the reversed words back into a string
  const reversedString = reversedWords.join(" ");

  return reversedString;
}

// Example usage
console.log(reverseWords("abc")); // Output: "cba"
console.log(reverseWords("JavaScript Exercises")); // Output: "tpircSavaJ sesicrexE"
console.log(reverseWords(1234)); // Output: "It must be a string."
