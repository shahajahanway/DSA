// Q1: Calculate Compound Interest
// 💡 Use-Case: Loan Interest Calculation
// 📌 Formula:
// 𝐴=𝑃×(1+𝑟100)𝑡A=P×(1+ 100/r)t

function compoundInterest (P,r,t){
    let A = P * Math.pow((1 + r / 100), t);
    return Number(A.toFixed(2));
}
console.log(compoundInterest(1000, 5, 2)); 
// Explanation:
// Depositing ₹10,000 in a bank at 5% interest will result in a final amount of ₹11,025 after 2 years.

// 🔢 Q2: Generate a 6-Digit OTP
// 💡 Use-Case: Secure Login Authentication

function generateOTP() {
    return Math.floor(100000 + Math.random() * 900000);
}
console.log(generateOTP());  
// Explanation:
// To generate an OTP, we use Math.random() which returns a 6-digit random number.
