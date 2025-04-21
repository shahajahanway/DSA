// 1. Bubble Sort
// Real-World Use Case:

// The leaderboard app sorts players’ scores in descending order to display the top performers in a gym’s step-count challenge. Bubble Sort is used for its simplicity, suitable for small datasets (e.g., 10–50 players).

// Explanation:

// Bubble Sort compares adjacent elements and swaps them if they’re in the wrong order (e.g., for descending, swap if the left element is smaller). It repeats until no swaps are needed, “bubbling” larger elements to the end.

// Code (Descending Order):

// javascript

// Copy
// let scores = [3500, 4200, 2800, 3900, 3100]; // Daily step counts
// let n = scores.length;
// for (let i = 0; i < n - 1; i++) {
//   let swapped = false;
//   for (let j = 0; j < n - i - 1; j++) {
//     if (scores[j] < scores[j + 1]) { // Swap for descending
//       [scores[j], scores[j + 1]] = [scores[j + 1], scores[j]];
//       swapped = true;
//     }
//   }
//   if (!swapped) break; // Optimize: exit if no swaps
// }
// console.log("Sorted leaderboard (highest to lowest):", scores);
// // Output: Sorted leaderboard (highest to lowest): [4200, 3900, 3500, 3100, 2800]
// How It Works:

// Outer Loop (i from 0 to n-2): Controls the number of passes.
// Inner Loop (j from 0 to n-i-2): Compares adjacent elements (scores[j] and scores[j+1]).
// Swap: If scores[j] < scores[j+1], swap for descending order (larger first).
// Optimization: swapped flag exits early if the array is sorted (no swaps in a pass).
// Think Like a 5-Year-Old: It’s like kids lining up by height—keep swapping neighbors until the tallest are at the front!
// Time Complexity: O(n²) worst/average, O(n) best (if nearly sorted).
// Agency Use: Use Bubble Sort for small lists (e.g., top 10 scores) or educational demos for clients.
// Edge Case: Empty array or single element requires no sorting.
// Example with Names and Scores:

// javascript

// Copy
// let players = [
//   { name: "Amit", score: 3500 },
//   { name: "Priya", score: 4200 },
//   { name: "Rahul", score: 2800 }
// ];
// let n = players.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (players[j].score < players[j + 1].score) {
//       [players[j], players[j + 1]] = [players[j + 1], players[j]];
//     }
//   }
// }
// console.log("Leaderboard:", players);
// // Output: Leaderboard: [
// //   { name: 'Priya', score: 4200 },
// //   { name: 'Amit', score: 3500 },
// //   { name: 'Rahul', score: 2800 }
// // ]
// 2. Insertion Sort
// Real-World Use Case:

// The app sorts a small list of user names alphabetically for a gym’s member directory, displayed in the leaderboard app. Insertion Sort is ideal for small or partially sorted datasets, as it’s intuitive and efficient in such cases.

// Explanation:

// Insertion Sort builds a sorted portion of the array by taking each element and inserting it into its correct position in the sorted part, shifting others as needed.

// Code (Ascending Order for Names):

// javascript

// Copy
// let names = ["Rahul", "Amit", "Priya", "Sonia"];
// let n = names.length;
// for (let i = 1; i < n; i++) {
//   let key = names[i]; // Current element to insert
//   let j = i - 1;
//   while (j >= 0 && names[j] > key) { // Compare and shift
//     names[j + 1] = names[j];
//     j--;
//   }
//   names[j + 1] = key; // Place key in correct position
// }
// console.log("Sorted member names:", names);
// // Output: Sorted member names: ['Amit', 'Priya', 'Rahul', 'Sonia']
// How It Works:

// Start with the first element as the “sorted” portion (i=1).
// For each i, take key = names[i] and compare with elements in the sorted portion (j from i-1 to 0).
// Shift larger elements right (names[j] > key) and insert key at j+1.
// Think Like a 5-Year-Old: It’s like sorting your toys by size, sliding each one into the right spot!
// Time Complexity: O(n²) wort/average, O(n) best (nearly sorted).
// Agency Use: Sort small lists (e.g., names, categories) in admin panels or reports.
// Edge Case: Handles empty or single-element arrays naturally.
// Example with Scores (Descending Order):

// javascript

// Copy
// let scores = [3500, 4200, 2800, 3900];
// let n = scores.length;
// for (let i = 1; i < n; i++) {
//   let key = scores[i];
//   let j = i - 1;
//   while (j >= 0 && scores[j] < key) { // Descending
//     scores[j + 1] = scores[j];
//     j--;
//   }
//   scores[j + 1] = key;
// }
// console.log("Sorted scores:", scores);
// // Output: Sorted scores: [4200, 3900, 3500, 2800]
// 3. Selection Sort
// Real-World Use Case:

// The app sorts gym members by their total points earned over a month to award prizes, selecting the highest scorer first, then the next highest, and so on. Selection Sort is simple and works well for small lists.

// Explanation:

// Selection Sort repeatedly finds the minimum (or maximum) element from the unsorted portion and places it at the beginning (or end) of the sorted portion.

// Code (Descending Order for Points):

// javascript

// Copy
// let points = [150, 200, 100, 180];
// let n = points.length;
// for (let i = 0; i < n - 1; i++) {
//   let maxIndex = i; // Assume i is max
//   for (let j = i + 1; j < n; j++) {
//     if (points[j] > points[maxIndex]) { // Find larger
//       maxIndex = j;
//     }
//   }
//   if (maxIndex !== i) {
//     [points[i], points[maxIndex]] = [points[maxIndex], points[i]]; // Swap
//   }
// }
// console.log("Sorted points (highest to lowest):", points);
// // Output: Sorted points (highest to lowest): [200, 180, 150, 100]
// How It Works:

// Outer loop (i from 0 to n-2): Marks the start of the unsorted portion.
// Inner loop (j from i+1 to n-1): Finds the index of the maximum element (maxIndex).
// Swap points[i] with points[maxIndex] if needed.
// Think Like a 5-Year-Old: It’s like picking the biggest candy from a pile, then the next biggest, and so on!
// Time Complexity: O(n²) always (no best-case advantage).
// Agency Use: Sort small datasets (e.g., top products, user rankings) in client apps.
// Edge Case: Empty or single-element arrays require no sorting.
// Example with Objects:

// javascript

// Copy
// let members = [
//   { name: "Amit", points: 150 },
//   { name: "Priya", points: 200 },
//   { name: "Rahul", points: 100 }
// ];
// let n = members.length;
// for (let i = 0; i < n - 1; i++) {
//   let maxIndex = i;
//   for (let j = i + 1; j < n; j++) {
//     if (members[j].points > members[maxIndex].points) {
//       maxIndex = j;
//     }
//   }
//   if (maxIndex !== i) {
//     [members[i], members[maxIndex]] = [members[maxIndex], members[i]];
//   }
// }
// console.log("Sorted members:", members);
// // Output: Sorted members: [
// //   { name: 'Priya', points: 200 },
// //   { name: 'Amit', points: 150 },
// //   { name: 'Rahul', points: 100 }
// // ]
// Summary of Day 41