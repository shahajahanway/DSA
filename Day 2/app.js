// Math Functions aur If-Else

// 1. Math.round()
// Real-World Example: Tu grocery store pe gaya, aur ek item ka price ₹49.75 hai. Dukaan wala bolta hai, "Bhai, ₹50 hi de de!" Yeh rounding hai.
let price = 49.75;
let roundedPrice = Math.round(price);
console.log("dukaan wala bolega: " , roundedPrice);


// 2. Math.ceil()
// Real-World Example: Tu auto wala se baat kar raha hai, aur uska meter ₹73.20 dikhata hai. Woh bolta hai, "Bhai, ₹74 de de!" Yeh ceil hai.
let meter = 73.20;
let fare =Math.ceil(meter);
console.log("Auto wale bolega: " , fare);


// 3. Math.floor()
// Real-World Example: Tu ek party mein cake slices baant raha hai. Ek cake se 7.8 slices nikalte hain, lekin tu sirf 7 logon ko de sakta hai kyunki pura slice chahiye.
let slices = 7.8;
let usableSlices = Math.floor(slices);
console.log("Kitne slices baant sakte hain:", usableSlices); // Output: Kitne slices baant sakte hain: 7

// 4. Math.trunc()
// Real-World Example: Tu apne pocket money ka hisaab laga raha hai. Tere paas ₹123.45 hain, lekin tu sirf pure note (₹123) ginta hai.
let money  = 124.54;
let note  = Math.trunc(money);
console.log(" pure note  kitne hain: ", note );
