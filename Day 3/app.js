// // 1. Accept an Integer and Print "Hello World" n Times
// Real-World Use Case:

// The grocery store app sends a welcome message to customers for each item they purchase (e.g., 3 items = 3 "Hello World" messages) to confirm their order.

// Explanation:

// The user inputs a number n, and the app uses a for loop to print "Hello World" n times. This is a simple way to practice looping for repetitive tasks.

let n = 3; // Customer bought 3 items
for (let i = 0; i < n; i++) {
  console.log("Hello World! Item " + (i + 1) + " confirmed.");
}
// Output:
// Hello World! Item 1 confirmed.
// Hello World! Item 2 confirmed.
// Hello World! Item 3 confirmed.
// How It Works:

// n is the number of iterations (items).
// The loop runs from i = 0 to i < n, printing the message each time.
// (i + 1) makes the item count start from 1 for user-friendliness.


2. Print Natural Numbers Up to n
Real-World Use Case:

The tutoring center app generates a list of student roll numbers from 1 to n for a class attendance sheet.

Explanation:

The app takes an integer n and prints all natural numbers from 1 to n. This is useful for generating sequences like IDs or counts.

Code:

javascript

Copy
let n = 5; // 5 students in the class
for (let i = 1; i <= n; i++) {
  console.log("Roll number: " + i);
}
// Output:
// Roll number: 1
// Roll number: 2
// Roll number: 3
// Roll number: 4
// Roll number: 5
How It Works:

Loop starts at i = 1 and goes up to i <= n.
Each iteration prints the current value of i as a roll number.
Useful for any sequential listing (e.g., order IDs, days).
3. Reverse For Loop: Print n to 1
Real-World Use Case:

The grocery store app displays a countdown for a flash sale (e.g., "Sale ends in 5, 4, 3... seconds").

Explanation:

The app takes an integer n and prints numbers from n down to 1. This is a reverse sequence, often used in timers or countdowns.

Code:

javascript

Copy
let n = 5; // Countdown from 5 seconds
for (let i = n; i >= 1; i--) {
  console.log("Sale ends in " + i + " seconds!");
}
// Output:
// Sale ends in 5 seconds!
// Sale ends in 4 seconds!
// Sale ends in 3 seconds!
// Sale ends in 2 seconds!
// Sale ends in 1 seconds!
How It Works:

Loop starts at i = n and decrements until i >= 1.
Each iteration prints the current i as part of the countdown.
Can be used for timers, reverse lists, or priority queues.
4. Take a Number as Input and Print Its Table
Real-World Use Case:

The tutoring center app generates a multiplication table for a number (e.g., 5) to help students practice math.

Explanation:

The app takes a number num and prints its multiplication table (e.g., 5 * 1 = 5, up to 5 * 10 = 50). This is a classic loop exercise for generating patterned outputs.

Code:

javascript

Copy
let num = 5; // Number to generate table for
for (let i = 1; i <= 10; i++) {
  console.log(`${num} * ${i} = ${num * i}`);
}
// Output:
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5 = 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50
How It Works:

Loop runs from i = 1 to i <= 10 (fixed 10 terms).
Each iteration calculates num * i and prints it in a formatted string.
Useful for educational tools, pricing tables, or repetitive calculations.
5. Sum Up to n Terms
Real-World Use Case:

The grocery store app calculates the total cost of n items, where each item has a sequential price (e.g., item 1 costs ₹1, item 2 costs ₹2, etc.).

Explanation:

The app takes an integer n and computes the sum of numbers from 1 to n (e.g., for n=4, sum = 1 + 2 + 3 + 4 = 10). This is a basic accumulation task.

Code:

javascript

Copy
let n = 4; // 4 items
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i; // Add each number to sum
}
console.log("Total cost for " + n + " items: ₹" + sum);
// Output: Total cost for 4 items: ₹10
How It Works:

Initialize sum = 0.
Loop from i = 1 to i <= n, adding each i to sum.
Can be used for totaling quantities, scores, or sequential costs.
Fun fact: The formula n * (n + 1) / 2 gives the same result in O(1) time, but the loop is O(n).
6. Factorial of a Number
Real-World Use Case:

The tutoring center app calculates factorials to teach students about permutations (e.g., arranging 5 books on a shelf = 5! ways).

Explanation:

The app takes a number n and computes its factorial (e.g., 5! = 5 * 4 * 3 * 2 * 1 = 120). Factorials are used in combinatorics and probability.

Code:

javascript

Copy
let n = 5; // Number of books
let factorial = 1;
for (let i = 1; i <= n; i++) {
  factorial *= i; // Multiply each number
}
console.log("Ways to arrange " + n + " books: " + factorial);
// Output: Ways to arrange 5 books: 120
How It Works:

Initialize factorial = 1.
Loop from i = 1 to i <= n, multiplying factorial by i.
Handles cases like n = 0 (0! = 1) if needed.
Useful for permutations, combinations, or probability apps.
Note: For large n, factorials grow huge, so consider overflow in real apps.

7. Print the Sum of All Even & Odd Numbers in a Range Separately
Real-World Use Case:

The grocery store app analyzes daily sales, separating totals for even-numbered and odd-numbered days (e.g., day 1, 3 vs. day 2, 4) to track patterns.

Explanation:

The app takes a range (1 to n) and computes the sum of even numbers and odd numbers separately. This involves checking each number’s parity.

Code:

javascript

Copy
let n = 6; // Analyze sales for 6 days
let evenSum = 0, oddSum = 0;
for (let i = 1; i <= n; i++) {
  if (i % 2 === 0) {
    evenSum += i; // Add even numbers (2, 4, 6)
  } else {
    oddSum += i; // Add odd numbers (1, 3, 5)
  }
}
console.log("Even days sales total: ₹" + evenSum);
console.log("Odd days sales total: ₹" + oddSum);
// Output:
// Even days sales total: ₹12
// Odd days sales total: ₹9
How It Works:

Initialize evenSum = 0 and oddSum = 0.
Loop from i = 1 to i <= n.
Use i % 2 === 0 to check if i is even; add to evenSum or oddSum accordingly.
Useful for categorizing data (e.g., even/odd IDs, dates).
8. Print All Factors of a Number
Real-World Use Case:

The tutoring center app finds all factors of a number (e.g., 12) to help students solve division problems or find divisors.

Explanation:

The app takes a number n and prints all its factors (numbers that divide n without a remainder). Factors are useful in math and optimization problems.

Code:

javascript

Copy
let n = 12; // Number to find factors for
console.log("Factors of " + n + ":");
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
  }
}
// Output:
// Factors of 12:
// 1
// 2
// 3
// 4
// 6
// 12
How It Works:

Loop from i = 1 to i <= n.
Check if i divides n evenly (n % i === 0); if so, print i.
Can optimize by looping up to Math.sqrt(n) and including pairs (e.g., 1 and 12, 2 and 6).
Optimization Example (for larger numbers):

javascript

Copy
let n = 12;
console.log("Optimized factors of " + n + ":");
for (let i = 1; i <= Math.sqrt(n); i++) {
  if (n % i === 0) {
    console.log(i); // Print smaller factor
    if (i !== n / i) console.log(n / i); // Print larger factor
  }
}
// Output (order may vary):
// Optimized factors of 12:
// 1
// 12
// 2
// 6
// 3
// 4
9. Check if the Number is Prime or Not
Real-World Use Case:

The grocery store app assigns unique customer IDs and checks if an ID is prime to mark VIP customers for special offers.

Explanation:

A number is prime if it’s greater than 1 and divisible only by 1 and itself. The app checks this by testing divisibility up to the square root of the number.

Code:

javascript

Copy
let num = 17; // Customer ID
let isPrime = true;
if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break; // Exit loop if divisible
    }
  }
}
console.log(num + (isPrime ? " is a prime ID! VIP offer unlocked!" : " is not a prime ID."));
// Output: 17 is a prime ID! VIP offer unlocked!
How It Works:

Check if num <= 1 (not prime).
Loop from i = 2 to i <= Math.sqrt(num) to test divisibility.
Use break to exit early if a divisor is found.
Math.sqrt(num) optimizes by reducing the number of checks.
Useful for unique IDs, cryptography, or math apps.
10. Write a Program to Take Two Inputs a, b & Find the Value of a Raised to the Power of b
Real-World Use Case:

The tutoring center app calculates exponential growth, like how many ways students can form groups (e.g., 2 students, 5 groups = 2^5).

Explanation:

The app takes two numbers a (base) and b (exponent) and computes a^b using a loop. This is a basic implementation of exponentiation.

Code:

javascript

Copy
let a = 2; // Number of students per group
let b = 5; // Number of groups
let result = 1;
for (let i = 1; i <= b; i++) {
  result *= a; // Multiply a, b times
}
console.log(`${a}^${b} = ${result}`);
// Output: 2^5 = 32
How It Works:

Initialize result = 1.
Loop b times, multiplying result by a each time.
Alternative: Use Math.pow(a, b) for efficiency, but the loop teaches iteration.
Useful for growth models, combinatorics, or financial calculations.
Using Math.pow (for comparison):

javascript

Copy
let a = 2, b = 5;
console.log(`${a}^${b} = ${Math.pow(a, b)}`); // Output: 2^5 = 32
Break and Continue
Real-World Use Case:

The grocery store app processes a list of orders but skips invalid ones (continue) or stops if a high-priority order is found (break).

Explanation:

Break: Exits the loop entirely when a condition is met (e.g., stop processing if a VIP order is detected).
Continue: Skips the current iteration and moves to the next (e.g., skip orders with zero quantity).
Example: Using Break and Continue

The app processes orders but skips items with quantity 0 and stops if an order exceeds ₹1000.

Code:

javascript

Copy
let orders = [200, 0, 500, 1200, 300]; // Order amounts
for (let i = 0; i < orders.length; i++) {
  if (orders[i] === 0) {
    console.log("Order " + (i + 1) + " skipped (quantity 0).");
    continue; // Skip zero orders
  }
  if (orders[i] > 1000) {
    console.log("High-priority order found: ₹" + orders[i] + ". Stopping.");
    break; // Stop at high-priority order
  }
  console.log("Processing order " + (i + 1) + ": ₹" + orders[i]);
}
// Output:
// Processing order 1: ₹200
// Order 2 skipped (quantity 0).
// Processing order 3: ₹500
// High-priority order found: ₹1200. Stopping.
How It Works:

Loop through orders array.
continue skips iteration if orders[i] === 0.
break exits loop if orders[i] > 1000.
Useful for filtering data, handling exceptions, or prioritizing tasks.