function isBlank(str) {
    // Remove leading and trailing whitespace
    const trimmedStr = str.trim();
    
    // Check if the resulting string is empty
    return trimmedStr === '';
  }
  
  // Example usage
  console.log(isBlank('')); // Output: true
  console.log(isBlank('  ')); // Output: true
  console.log(isBlank('   hello   ')); // Output: false
  console.log(isBlank('  world  ')); // Output: false
  