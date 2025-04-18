// 1. Repeat Hello (Do-While Loop)
// Real-World Use Case:

// The restaurant app greets customers with a "Welcome to Dhaba!" message a specific number of times (e.g., based on the number of people in a group) to create a warm experience.

// Explanation:

// The app takes a number n and prints "Hello" (or a custom message) n times using a do-while loop. Unlike a while loop, do-while ensures the message prints at least once, even if n is 0 or negative.

// Code:

// javascript

// Copy
// let n = 3; // Number of people in the group
// let i = 0;
// do {
//   console.log("Welcome to Dhaba! Guest " + (i + 1));
//   i++;
// } while (i < n);
// // Output:
// // Welcome to Dhaba! Guest 1
// // Welcome to Dhaba! Guest 2
// // Welcome to Dhaba! Guest 3
// How It Works:

// Initialize i = 0 (counter).
// The do block runs first, printing the message and incrementing i.
// The while (i < n) condition checks if the loop should continue.
// If n = 0, it runs once (do-while’s key feature).
// Useful for greetings, confirmations, or repetitive UI animations.
// Edge Case: Handle negative n by adding a check (e.g., if (n < 0) n = 0).
// Edge Case Example:

// javascript

// Copy
// let n = 0;
// let i = 0;
// do {
//   console.log("Welcome to Dhaba! At least one greeting!");
//   i++;
// } while (i < n);
// // Output: Welcome to Dhaba! At least one greeting!
// 2. Guess the Number (Do-While Loop)
// Real-World Use Case:

// The restaurant app runs a loyalty game where customers guess a secret number (e.g., 42) to win a discount. The app keeps prompting until they guess correctly.

// Explanation:

// The app generates a secret number and uses a do-while loop to repeatedly ask for guesses until the correct number is entered. This is an interactive task ideal for do-while, as it ensures at least one guess.

// Code:

// javascript

// Copy
// let secret = 42; // Secret number
// let guess;
// do {
//   guess = 40; // Simulating user input (replace with prompt() in a real app)
//   console.log("Your guess: " + guess);
//   if (guess < secret) {
//     console.log("Thoda bada number guess karo!");
//   } else if (guess > secret) {
//     console.log("Thoda chhota number guess karo!");
//   }
// } while (guess !== secret);
// console.log("Wow! " + guess + " is correct! 10% discount mil gaya!");
// // Output:
// // Your guess: 40
// // Thoda bada number guess karo!
// // (Assume next guess is 42)
// // Wow! 42 is correct! 10% discount mil gaya!
// How It Works:

// secret is the target number (hardcoded for simplicity).
// do block runs, taking a guess (simulated here; in a real app, use prompt() or input).
// Provide hints if guess is too high or low.
// Loop continues (while (guess !== secret)) until the correct guess.
// Useful for games, quizzes, or interactive validation.
// Edge Case: Handle invalid inputs (e.g., non-numbers) in a real app.
// Real App Example (with Input Simulation):

// javascript

// Copy
// let secret = 42;
// let guess;
// let attempts = 0;
// do {
//   guess = attempts === 0 ? 30 : 42; // Simulate guesses: 30, then 42
//   console.log("Attempt " + (attempts + 1) + ": Your guess: " + guess);
//   if (isNaN(guess)) {
//     console.log("Number daalo, bhai!");
//     continue;
//   }
//   if (guess < secret) console.log("Bada number!");
//   else if (guess > secret) console.log("Chhota number!");
//   attempts++;
// } while (guess !== secret);
// console.log("Correct! Took " + attempts + " attempts!");
// // Output:
// // Attempt 1: Your guess: 30
// // Bada number!
// // Attempt 2: Your guess: 42
// // Correct! Took 2 attempts!
// 3. Sasta Calculator (Do-While Loop)
// Real-World Use Case:

// The restaurant app includes a quick calculator for staff to compute bills or tips (e.g., add, subtract, multiply, divide amounts) and allows multiple calculations until the user exits.

// Explanation:

// The app uses a do-while loop to repeatedly prompt for two numbers and an operation (+, -, *, /), perform the calculation, and ask if the user wants to continue. Do-while ensures at least one calculation.

// Code:

// javascript

// Copy
// let continueCalc = true;
// do {
//   let num1 = 100; // Bill amount (simulated input)
//   let num2 = 20; // Tip amount (simulated input)
//   let operation = "+"; // Operation (simulated input)
//   let result;
  
//   switch (operation) {
//     case "+":
//       result = num1 + num2;
//       console.log(`${num1} + ${num2} = ${result}`);
//       break;
//     case "-":
//       result = num1 - num2;
//       console.log(`${num1} - ${num2} = ${result}`);
//       break;
//     case "*":
//       result = num1 * num2;
//       console.log(`${num1} * ${num2} = ${result}`);
//       break;
//     case "/":
//       if (num2 !== 0) {
//         result = num1 / num2;
//         console.log(`${num1} / ${num2} = ${result}`);
//       } else {
//         console.log("Zero se divide nahi kar sakte!");
//       }
//       break;
//     default:
//       console.log("Galat operation, bhai!");
//   }
  
//   continueCalc = false; // Simulate user choosing to exit (replace with prompt())
// } while (continueCalc);
// console.log("Calculator bandh!");
// // Output:
// // 100 + 20 = 120
// // Calculator bandh!
// How It Works:

// continueCalc controls whether the loop repeats.
// do block:
// Takes num1, num2, and operation (simulated; use prompt() in a real app).
// Uses switch to compute the result.
// Handles division by zero.
// while (continueCalc) checks if the user wants to continue (simulated as false here).
// Useful for interactive tools, financial apps, or staff utilities.
// Edge Case: Validate inputs (e.g., ensure num1, num2 are numbers) and handle exit conditions.
// Real App Example (with Simulated User Flow):

// javascript

// Copy
// let continueCalc = true;
// let iteration = 0;
// do {
//   let num1 = iteration === 0 ? 100 : 200; // Simulate inputs
//   let num2 = iteration === 0 ? 20 : 10;
//   let operation = iteration === 0 ? "+" : "*";
//   let result;
  
//   console.log(`Calculation ${iteration + 1}:`);
//   switch (operation) {
//     case "+":
//       result = num1 + num2;
//       console.log(`${num1} + ${num2} = ${result}`);
//       break;
//     case "*":
//       result = num1 * num2;
//       console.log(`${num1} * ${num2} = ${result}`);
//       break;
//     default:
//       console.log("Invalid operation!");
//   }
  
//   iteration++;
//   continueCalc = iteration < 2; // Simulate 2 calculations
// } while (continueCalc);
// console.log("Calculator done!");
// // Output:
// // Calculation 1:
// // 100 + 20 = 120
// // Calculation 2:
// // 200 * 10 = 2000
// // Calculator done!
// 4. Project: Restaurant (Do-While Loop)
// Real-World Use Case:

// The restaurant app processes customer orders, calculates the total bill, applies discounts (e.g., 10% for bills over ₹500), and allows multiple orders until the user exits. This project combines loops, conditionals, and user interaction.

// Explanation:

// The app:

// Displays a menu (e.g., burger, pizza, fries).
// Uses a do-while loop to take orders (item name, quantity) until the user chooses to stop.
// Calculates the total, applies discounts, and shows the final bill.
// This is a practical project for your digital agency, as restaurants are common clients needing such systems.
// Code:

// javascript

// Copy
// // Menu with prices
// let menu = {
//   burger: 150,
//   pizza: 250,
//   fries: 50
// };

// let total = 0;
// let continueOrdering = true;

// do {
//   let item = "burger"; // Simulated input (replace with prompt())
//   let quantity = 2; // Simulated input
//   if (menu[item]) {
//     let cost = menu[item] * quantity;
//     total += cost;
//     console.log(`Added ${quantity} ${item}(s) to order: ₹${cost}`);
//   } else {
//     console.log("Item nahi hai menu mein, dobara choose karo!");
//   }
  
//   continueOrdering = false; // Simulate stopping (replace with prompt())
// } while (continueOrdering);

// // Apply discount if total > ₹500
// console.log("Total bill: ₹" + total);
// if (total > 500) {
//   let discount = total * 0.1;
//   console.log("10% discount applied: ₹" + discount);
//   total -= discount;
// }
// console.log("Final bill: ₹" + total);
// // Output:
// // Added 2 burger(s) to order: ₹300
// // Total bill: ₹300
// // Final bill: ₹300
// How It Works:

// menu is an object storing item names and prices.
// total tracks the bill.
// do block:
// Takes item and quantity (simulated; use prompt() or UI in a real app).
// Checks if item exists in menu.
// Calculates cost (menu[item] * quantity) and adds to total.
// Handles invalid items.
// while (continueOrdering) repeats if the user wants to add more items.
// After loop, applies 10% discount if total > 500.
// Prints total and final bill.
// Edge Cases:
// Invalid items (handled with menu[item] check).
// Zero/negative quantities (add validation).
// Empty orders (do-while ensures at least one iteration).
// Enhanced Example (Multiple Orders, Simulated):

// javascript

// Copy
// let menu = {
//   burger: 150,
//   pizza: 250,
//   fries: 50
// };

// let total = 0;
// let orders = [
//   { item: "burger", quantity: 2 }, // Simulated order 1
//   { item: "pizza", quantity: 1 }  // Simulated order 2
// ];
// let iteration = 0;

// do {
//   let { item, quantity } = orders[iteration];
//   if (menu[item]) {
//     let cost = menu[item] * quantity;
//     total += cost;
//     console.log(`Added ${quantity} ${item}(s): ₹${cost}`);
//   } else {
//     console.log(`${item} nahi hai menu mein!`);
//   }
  
//   iteration++;
//   continueOrdering = iteration < orders.length;
// } while (continueOrdering);

// // Discount logic
// console.log("Total bill: ₹" + total);
// if (total > 500) {
//   let discount = total * 0.1;
//   console.log("10% discount: ₹" + discount);
//   total -= discount;
// }
// console.log("Final bill: ₹" + total);
// // Output:
// // Added 2 burger(s): ₹300
// // Added 1 pizza(s): ₹250
// // Total bill: ₹550
// // 10% discount: ₹55
// // Final bill: ₹495
// Project Features:

// Menu Management: Easily extend menu with new items.
// Discount Logic: Customizable (e.g., change ₹500 threshold or 10% rate).
// Scalability: Add features like tax, item categories, or order history.
// Agency Relevance: This project is a great portfolio piece for your digital agency, showcasing JavaScript for client-facing apps (restaurants, cafés).