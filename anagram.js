function areAnagrams(str1, str2) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
    // Check if the lengths of the cleaned strings are equal
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // Create character frequency maps for both strings
    const charMap1 = {};
    const charMap2 = {};
  
    // Populate character frequency map for str1
    for (let char of cleanStr1) {
      charMap1[char] = (charMap1[char] || 0) + 1;
    }
  
    // Populate character frequency map for str2
    for (let char of cleanStr2) {
      charMap2[char] = (charMap2[char] || 0) + 1;
    }
  
    // Compare character frequency maps
    for (let char in charMap1) {
      if (charMap1[char] !== charMap2[char]) {
        return false;
      }
    }
  
    return true;
  }
  
  // Example usage
  const str1 = "abcd";
  const str2 = "dabc";
  console.log(areAnagrams(str1, str2)); // Output: true
  
  const str3 = "hello";
  const str4 = "world";
  console.log(areAnagrams(str3, str4)); // Output: false
  