function protect_email(email) {
  // Split the email address into local part and domain part
  const [localPart, domainPart] = email.split("@");

  // Get the first three characters of the local part
  const firstThreeChars = localPart.slice(0, 3);

  // Create the protected email address
  const protectedEmail = `${firstThreeChars}...@${domainPart}`;

  return protectedEmail;
}

// Example usage
console.log(protect_email("robin_singh@example.com"));
// Output: "rob...@example.com"
