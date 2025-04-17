// 1. Sum of Digits (While Loop)
// Real-World Use Case:

// The banking chatbot verifies a customer’s account number by calculating the sum of its digits (e.g., for 1234, sum = 1 + 2 + 3 + 4 = 10) as part of a checksum validation.

// Explanation:

// The chatbot takes a number and sums its digits using a while loop, which continues until the number becomes 0. This is useful for validation or data analysis.

// Code:

// javascript

// Copy
// let num = 1234; // Account number
// let sum = 0;
// let temp = num;
// while (temp > 0) {
//   sum += temp % 10; // Get last digit
//   temp = Math.floor(temp / 10); // Remove last digit
// }
// console.log(`Sum of digits in ${num} is: ${sum}`);
// // Output: Sum of digits in 1234 is: 10
// How It Works:

// Initialize sum = 0 and temp = num (to preserve original number).
// While temp > 0:
// Extract last digit using temp % 10 (e.g., 1234 % 10 = 4).
// Add it to sum.
// Remove last digit using Math.floor(temp / 10) (e.g., 1234 / 10 = 123).
// Useful for checksums, PIN validation, or digit-based calculations.
// Edge Case: Works for num = 0 (sum = 0).
// 2. Reverse of Number (While Loop)
// Real-World Use Case:

// The chatbot reverses a customer’s transaction ID (e.g., 5678 → 8765) for a security check or to generate a confirmation code.

// Explanation:

// The chatbot takes a number and reverses its digits using a while loop, building the reversed number digit by digit. This is common in data processing or verification.

// Code:

// javascript

// Copy
// let num = 5678; // Transaction ID
// let reverse = 0;
// let temp = num;
// while (temp > 0) {
//   let digit = temp % 10; // Get last digit
//   reverse = reverse * 10 + digit; // Build reverse
//   temp = Math.floor(temp / 10); // Remove last digit
// }
// console.log(`Reverse of ${num} is: ${reverse}`);
// // Output: Reverse of 5678 is: 8765
// How It Works:

// Initialize reverse = 0 and temp = num.
// While temp > 0:
// Get last digit (temp % 10, e.g., 5678 % 10 = 8).
// Add to reverse by shifting digits left (reverse * 10) and adding new digit (e.g., 0 * 10 + 8 = 8).
// Remove last digit (Math.floor(temp / 10)).
// Useful for verification, encoding, or generating mirrored IDs.
// Edge Case: For numbers ending in 0 (e.g., 120), the reverse (021) is 21 (leading zeros ignored).
// 3. Strong Number (While Loop)
// Real-World Use Case:

// The bank uses strong numbers as part of secure PIN generation. A strong number is one where the sum of the factorials of its digits equals the number (e.g., 145 = 1! + 4! + 5!).

// Explanation:

// A strong number’s digits’ factorials sum to the number itself (e.g., 145: 1! = 1, 4! = 24, 5! = 120, so 1 + 24 + 120 = 145). The chatbot checks this using a while loop to process digits and a helper function for factorials.

// Code:

// javascript

// Copy
// // Helper function to calculate factorial
// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact *= i;
//   }
//   return fact;
// }

// let num = 145; // PIN to check
// let temp = num;
// let sum = 0;
// while (temp > 0) {
//   let digit = temp % 10; // Get last digit
//   sum += factorial(digit); // Add factorial of digit
//   temp = Math.floor(temp / 10); // Remove last digit
// }
// console.log(num + (sum === num ? " is a strong number!" : " is not a strong number."));
// // Output: 145 is a strong number!
// How It Works:

// factorial(n) computes n! (e.g., 5! = 120).
// Initialize sum = 0 and temp = num.
// While temp > 0:
// Extract last digit (temp % 10).
// Add its factorial to sum.
// Remove last digit (Math.floor(temp / 10)).
// Check if sum === num to confirm strong number.
// Examples: Strong numbers are rare (e.g., 1, 2, 145, 40585).
// Useful for secure code generation or math puzzles.
// Edge Case: Works for single-digit numbers (e.g., 1! = 1, so 1 is strong).
// 4. Automorphic Number (While Loop)
// Real-World Use Case:

// The chatbot identifies automorphic numbers for account IDs to simplify verification. An automorphic number’s square ends with the number itself (e.g., 5² = 25, ends with 5).

// Explanation:

// A number is automorphic if its square’s last digits match the number (e.g., 25² = 625, ends with 25). The chatbot checks this by comparing the number with the end of its square.

// Code:

// javascript

// Copy
// let num = 25; // Account ID
// let square = num * num; // Calculate square
// let temp = num;
// let isAutomorphic = true;

// // Count digits in num
// let digits = 0;
// while (temp > 0) {
//   digits++;
//   temp = Math.floor(temp / 10);
// }

// // Extract last 'digits' digits of square
// let lastPart = square % Math.pow(10, digits);

// // Check if last part equals num
// if (lastPart === num) {
//   console.log(`${num} is an automorphic number! (Square: ${square})`);
// } else {
//   console.log(`${num} is not an automorphic number. (Square: ${square})`);
// }
// // Output: 25 is an automorphic number! (Square: 625)
// How It Works:

// Compute square = num * num.
// Count digits in num using a while loop (e.g., 25 has 2 digits).
// Extract last digits digits of square using square % Math.pow(10, digits) (e.g., 625 % 100 = 25).
// Check if lastPart === num.
// Examples: Automorphic numbers include 1, 5, 6, 25, 76.
// Useful for ID validation or number pattern analysis.
// Edge Case: Works for single-digit numbers (e.g., 5² = 25, ends with 5).
// Alternative (String-Based):

// javascript

// Copy
// let num = 25;
// let square = num * num;
// let numStr = num.toString();
// let squareStr = square.toString();
// let isAutomorphic = squareStr.endsWith(numStr);
// console.log(`${num} is ${isAutomorphic ? "an" : "not an"} automorphic number! (Square: ${square})`);
// // Output: 25 is an automorphic number! (Square: 625)
// 5. Switch Case
// Real-World Use Case:

// The banking chatbot offers a menu where users select options (e.g., 1 for balance, 2 for deposit). Switch case handles these choices cleanly.

// Explanation:

// Switch case evaluates an expression and executes the corresponding case block, making it ideal for menu-driven systems or calculators.

// Example: Sasta Calculator

// The chatbot provides a calculator for users to perform basic operations (+, -, *, /) on two amounts (e.g., savings and expense).

// Code:

// javascript

// Copy
// let num1 = 1000; // Savings
// let num2 = 500; // Expense
// let operation = "+"; // User-selected operation
// let result;
// switch (operation) {
//   case "+":
//     result = num1 + num2;
//     console.log(`${num1} + ${num2} = ${result}`);
//     break;
//   case "-":
//     result = num1 - num2;
//     console.log(`${num1} - ${num2} = ${result}`);
//     break;
//   case "*":
//     result = num1 * num2;
//     console.log(`${num1} * ${num2} = ${result}`);
//     break;
//   case "/":
//     if (num2 !== 0) {
//       result = num1 / num2;
//       console.log(`${num1} / ${num2} = ${result}`);
//     } else {
//       console.log("Division by zero nahi kar sakte, bhai!");
//     }
//     break;
//   default:
//     console.log("Galat operation choose kiya, dobara try karo!");
// }
// // Output: 1000 + 500 = 1500
// How It Works:

// switch (operation) checks the value of operation.
// Each case performs a specific calculation and prints the result.
// break ensures only the matched case runs.
// default handles invalid inputs.
// Checks for division by zero to avoid errors.
// Useful for menus, calculators, or option-based systems.
// Edge Case: Handle invalid inputs (e.g., non-numeric num1, num2) in a real app.
// Summary of Day 31
