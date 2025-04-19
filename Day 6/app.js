// 1. Right Angle Triangle (Q35: *)
// Real-World Use Case:

// The dashboard displays a triangular seating arrangement for a school event, where each row has one more seat (visualized as stars) to show capacity.

// Explanation:

// Print a right-angled triangle with n rows, where row i has i stars (e.g., for n=5, row 1 has 1 star, row 2 has 2 stars, etc.).

// Code:

// javascript

// Copy
// let n = 5; // Number of rows (seats)
// for (let i = 1; i <= n; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* "; // Add a star for each seat
//   }
//   console.log(row);
// }
// // Output:
// // * 
// // * * 
// // * * * 
// // * * * * 
// // * * * * *
// How It Works:

// Outer loop (i from 1 to n) controls the number of rows.
// Inner loop (j from 1 to i) adds i stars to the row string.
// Print row after each inner loop.
// Think Like a 5-Year-Old: It’s like stacking blocks—each row adds one more block than the last!
// Agency Use: Render this in a web app (e.g., HTML/CSS) for seating charts or star ratings.
// 2. Diamond Pattern (Q21: * pattern with spaces)
// Real-World Use Case:

// The app creates a diamond-shaped logo for the event’s webpage, using stars to form a symmetrical pattern, enhancing visual appeal.

// Explanation:

// Print a diamond with n rows for the top half (e.g., n=3 gives 3 rows up, then 2 rows down). The pattern uses spaces to center stars, forming a diamond shape.

// Code:

// javascript

// Copy
// let n = 3; // Half-height of diamond
// // Upper half
// for (let i = 1; i <= n; i++) {
//   let row = " ".repeat(n - i); // Leading spaces
//   row += "*".repeat(2 * i - 1); // Stars
//   console.log(row);
// }
// // Lower half
// for (let i = n - 1; i >= 1; i--) {
//   let row = " ".repeat(n - i); // Leading spaces
//   row += "*".repeat(2 * i - 1); // Stars
//   console.log(row);
// }
// // Output:
// //   *  
// //  *** 
// // *****
// //  *** 
// //   *
// How It Works:

// Upper Half:
// Outer loop (i from 1 to n) for rows.
// Add (n - i) spaces to center stars.
// Add (2 * i - 1) stars (e.g., 1, 3, 5 for i=1,2,3).
// Lower Half:
// Loop i from n-1 to 1.
// Same logic for spaces and stars.
// Think Like a 5-Year-Old: It’s like drawing a kite—first grow wide, then shrink back!
// Agency Use: Use in CSS animations or SVG graphics for logos or decorative elements.
// Edge Case: For n=1, prints a single star.
// Note on Other Patterns:

// The syllabus lists 10 patterns (e.g., number triangle, inverted triangle, alphabet triangle). Each follows similar nested loop logic, varying in:

// Content (stars, numbers, letters).
// Spacing (e.g., centered for pyramids).
// Direction (increasing or decreasing rows). If you want code for specific patterns (e.g., Q36: Number Triangle or Q22: Star Cross), let me know!
// Day 35: Arrays (Introduction)
// Overview:

// Day 35 introduces arrays, which store multiple values in a single variable, and basic operations like initialization, user input, and summation. Problems focus on creating arrays, accepting values, and computing sums or finding maximum elements.

// Real-World Context:

// Your digital agency is building a student management app for a coaching institute. The app:

// Stores student marks in an array.
// Accepts marks from teachers.
// Calculates totals or identifies top performers.
// Key Concepts:

// Arrays: Ordered lists (e.g., [85, 90, 78] for marks).
// Fixed vs. Dynamic Size: JavaScript arrays are dynamic (can grow/shrink).
// Operations: Sum elements, find max, or assign values.
// Selected Problems:

// 1. Accept Value from User and Assign in the Array
// Real-World Use Case:

// The app lets a teacher input marks for 5 students, storing them in an array for later processing (e.g., calculating averages).

// Explanation:

// Simulate user input (e.g., marks) and store them in an array. In a real app, use prompt() or a form; here, we’ll hardcode for simplicity.

// Code:

// javascript

// Copy
// let marks = [];
// let numStudents = 5;
// // Simulate user input (replace with prompt() in a real app)
// let simulatedInputs = [85, 90, 78, 92, 88];
// for (let i = 0; i < numStudents; i++) {
//   marks.push(simulatedInputs[i]);
//   console.log(`Added mark ${marks[i]} for student ${i + 1}`);
// }
// console.log("All marks:", marks);
// // Output:
// // Added mark 85 for student 1
// // Added mark 90 for student 2
// // Added mark 78 for student 3
// // Added mark 92 for student 4
// // Added mark 88 for student 5
// // All marks: [85, 90, 78, 92, 88]
// How It Works:

// Initialize empty array marks = [].
// Loop numStudents times, pushing each input to marks.
// push() adds elements dynamically.
// Think Like a 5-Year-Old: It’s like putting toys in a box, one by one!
// Agency Use: Build a web form to collect data (e.g., marks, sales) and store in arrays for processing.
// Edge Case: Validate inputs (e.g., ensure marks are numbers, not strings).
// 2. Sum of Array’s Element (Q23)
// Real-World Use Case:

// The app calculates the total marks of a student across subjects to determine their overall performance.

// Explanation:

// Sum all elements in an array using a loop, useful for totals or averages.

// Code:

// javascript

// Copy
// let marks = [85, 90, 78, 92, 88];
// let sum = 0;
// for (let mark of marks) {
//   sum += mark;
// }
// console.log(`Total marks: ${sum}`);
// // Output: Total marks: 343
// How It Works:

// Initialize sum = 0.
// Use for...of loop to add each mark to sum.
// Alternative: Use reduce() (e.g., marks.reduce((a, b) => a + b, 0)).
// Agency Use: Display totals in dashboards (e.g., sales, scores).
// Edge Case: Empty array returns sum = 0.
// Day 36: Advanced Arrays
// Overview:

// Day 36 builds on arrays with more complex operations like finding the second maximum, reversing arrays, rearranging elements, or rotating arrays.

// Real-World Context:

// Your agency is enhancing the student management app to:

// Identify the second-highest scorer for awards.
// Reverse attendance lists for display.
// Organize data (e.g., move zeros to one side).
// Selected Problems:

// 1. Second Max Element from Array (Q25)
// Real-World Use Case:

// The app finds the second-highest scorer in a test to award a runner-up prize, ensuring fair recognition.

// Explanation:

// Traverse the array to track the maximum and second maximum elements, updating them as needed.

// Code:

// javascript

// Copy
// let scores = [85, 90, 78, 92, 88];
// let max = -Infinity, secondMax = -Infinity;
// for (let score of scores) {
//   if (score > max) {
//     secondMax = max;
//     max = score;
//   } else if (score > secondMax && score !== max) {
//     secondMax = score;
//   }
// }
// console.log(`Second highest score: ${secondMax}`);
// // Output: Second highest score: 90
// How It Works:

// Initialize max and secondMax to -Infinity.
// For each score:
// If score > max, update secondMax = max and max = score.
// If score > secondMax but not equal to max, update secondMax.
// Think Like a 5-Year-Old: It’s like finding the tallest and second-tallest kid in class!
// Agency Use: Use in leaderboards or analytics dashboards.
// Edge Case: If all elements are equal or array has <2 elements, secondMax stays -Infinity.
// 2. Array Left Rotation by 1 (Q28)
// Real-World Use Case:

// The app rotates a list of featured students (e.g., for a “Student of the Day” display) to show the next student first.

// Explanation:

// Shift all elements left by one position, moving the first element to the end.

// Code:

// javascript

// Copy
// let students = ["Amit", "Priya", "Rahul"];
// let first = students[0];
// for (let i = 0; i < students.length - 1; i++) {
//   students[i] = students[i + 1];
// }
// students[students.length - 1] = first;
// console.log("Rotated list:", students);
// // Output: Rotated list: [ 'Priya', 'Rahul', 'Amit' ]
// How It Works:

// Store first element.
// Shift each element left (students[i] = students[i + 1]).
// Place first at the end.
// Agency Use: Rotate banners, playlists, or featured items in web apps.
// Edge Case: Empty or single-element arrays need no rotation.
// Day 40: Array Searching, Rotation
// Overview:

// Day 40 focuses on searching (linear and binary) and array rotation by k elements, critical for efficient data retrieval and manipulation.

// Real-World Context:

// Your agency is building a library management app for a college. The app:

// Searches for books by ID (linear or binary search).
// Rotates featured book displays to keep the UI fresh.
// Selected Problems:

// 1. Linear Search an Array (Q30)
// Real-World Use Case:

// The app searches for a book by its ID in an unsorted catalog, returning the index or -1 if not found.

// Explanation:

// Check each element until the target is found or the array ends.

// Code:

// javascript

// Copy
// let books = [101, 203, 305, 407];
// let target = 305;
// let index = -1;
// for (let i = 0; i < books.length; i++) {
//   if (books[i] === target) {
//     index = i;
//     break;
//   }
// }
// console.log(`Book ID ${target} found at index: ${index}`);
// // Output: Book ID 305 found at index: 2
// How It Works:

// Loop through array, comparing each element to target.
// Set index = i if found; break to optimize.
// Return -1 if not found.
// Think Like a 5-Year-Old: It’s like looking for your favorite toy in a pile, one by one!
// Agency Use: Search functionality in e-commerce or inventory apps.
// Edge Case: Empty array returns -1.
// 2. Array Left Rotation by K Elements (Q29)
// Real-World Use Case:

// The app rotates the featured books list by k positions (e.g., 2) to cycle through recommendations.

// Explanation:

// Rotate the array left by k positions, equivalent to k single left rotations.

// Code:

// javascript

// Copy
// let books = ["Book1", "Book2", "Book3", "Book4"];
// let k = 2; // Rotate by 2 positions
// k = k % books.length; // Handle k > length
// let rotated = [];
// for (let i = 0; i < books.length; i++) {
//   rotated[i] = books[(i + k) % books.length];
// }
// console.log("Rotated books:", rotated);
// // Output: Rotated books: [ 'Book3', 'Book4', 'Book1', 'Book2' ]
// How It Works:

// Normalize k (k % books.length) to handle large k.
// Create new array rotated, mapping index i to (i + k) % length.
// Alternative: Use in-place rotation with reverse operations.
// Agency Use: Cycle through carousels or recommendations in web apps.
// Edge Case: k = 0 or empty array requires no rotation.