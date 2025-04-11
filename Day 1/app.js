// 1. Sum of Two Integers
// Explanation: Yeh bas do numbers ko jodna hai. JavaScript mein hum + use karte hain.
let pens = 2;
let friendsPens = 5;
let total = pens + friendsPens;
console.log(total);

// 2. Relation Between Integer and String (Type Coercion)
// Explanation: JS mein agar ek string hai ("2") aur ek number (3), toh + string ko jod deta hai, na ki math wala plus karta hai. Isko type coercion bolte hain—JS khud type change kar deta hai.
let toys = "2";
let moreToys = 3;
console.log(toys + moreToys);


// 3. Sum and Message
// Explanation: Sum karne ke baad usko ek sentence mein dikhana. Type coercion yahan bhi kaam karta hai jab number ko string ke saath jodte hain.
let candies = 4 ;  let dostki = 3;
let candiesTotal = candies + dostki;
console.log("Mere pass total " + total + " candies hain");


// 4. Greet the User
// Explanation: User ka naam puchke usko ek pyara message dena.
let user = prompt("What is your name? ");
console.log("Hi "+ user +" Have a nice day. ");


// 5. Accept and Print the Answer
// Explanation: User se kuch puchna aur jo woh bole, wahi dikhana. (Yahan console mein simulate karte hain.)
let userOrder = prompt("enter you order sir? ")
console.log("Your order is that sir  " + userOrder + ".")


// 6. Swap Two Variables (3 Methods)
// Explanation: Do cheezon ki jagah badalna. Yeh 3 tareeke se karenge:
let red = "red ball";
let blue = "blue ball";
// let temp = red;
// red = blue;
// blue = temp;
[red,blue] = [blue, red]
console.log(red,blue);


// 7. Operators aur Unke Examples
// Arithmetic Operators:
// + (Plus): 2 chocolates + 3 chocolates = 5 chocolates.
// Code: console.log(2 + 3); // 5
// - (Minus): 5 candies thi, 2 kha li, bachi 3.
// Code: console.log(5 - 2); // 3
// *** (Multiply):** 2 packet mein 3 biscuits, total 6.
// Code: console.log(2 * 3); // 6
// % (Modulus): 7 candies 2 doston mein baant di, 1 bachi.
// Code: console.log(7 % 2); // 1
// / (Divide): 6 biscuits 2 logon mein, har ek ko 3.
// Code: console.log(6 / 2); // 3
// Relational Operators:
// > (Greater): Kya 5 bada hai 3 se? Haan!
// Code: console.log(5 > 3); // true
// < (Smaller): Kya 2 chhota hai 4 se? Haan!
// Code: console.log(2 < 4); // true
// ≥ (Greater or Equal): 5 bada ya barabar hai 5 se? Haan!
// Code: console.log(5 >= 5); // true
// ≤ (Less or Equal): 3 chhota ya barabar hai 4 se? Haan!
// Code: console.log(3 <= 4); // true
// ≠ (Not Equal): Kya 2 alag hai 3 se? Haan!
// Code: console.log(2 != 3); // true
// Logical Operators:
// && (And): Tu school jayega agar subah utha AND lunch ready hai.
// Code: console.log(true && true); // true
// || (Or): Tu khelega agar park khula hai OR dost aaya hai.
// Code: console.log(true || false); // true
// Unary Operators:
// ++ (Increment): Tere paas 1 toy tha, ek aur mila, 2 ho gaya.
// Code: let toys = 1; toys++; console.log(toys); // 2
// -- (Decrement): 3 candies thi, 1 kha li, 2 bachi.
// Code: let candies = 3; candies--; console.log(candies); // 2
