function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    // Compare the original string with its reversed version
    return cleanStr === cleanStr.split("").reverse().join("");
  }
  
  // Example usage
  const word1 = "dad";
  console.log(isPalindrome(word1)); // Output: true
  
  const word2 = "madam";
  console.log(isPalindrome(word2)); // Output: true
  
  const word3 = "Hello";
  console.log(isPalindrome(word3)); // Output: false
  