// Q.Accept a year and check if it a leap year or not (google to find out what's a leap year)
// let year = Number(prompt("Enter year"))
// let isleap = false;

// if(year % 4 ==0){
//     if(year %100 ==0){
//         if(year %400 ==0) isleap = true
//         else isleap = false
//     }else{
//         isleap = true
//     }
    
// }else isleap = false
// console.log(isleap? "Leap year": "Not a leap year");
 console.log("or");
 
// if((year % 4==0 && year % 100 !=0 )){
//     console.log("leap year");
    
// }else if(year%400==0){
//     console.log("leap year");
// }else{
//     console.log("not a leap year");
    
// }

console.log("Q.Shop discount - Description on Graphic");
// Q.Shop discount - Description on Graphic

// let amount = Number(prompt("Enter a Amount"));
// if(amount>=0 && amount <=5000){
//     console.log(amount);
// } else if(amount >= 5000 && amount <= 7000){
//     console.log(amount-(5*amount)/100);
// }else if(amount>=7000 && amount<= 9000){
//     console.log(amount -(10*amount)/100);
// }else if(amount>=9000){
//     console.log(amount - (20*amount)/100);
// }else{
//     console.log("invalid Amount ");
    
// }

console.log("Q.Bijli Bill - Description on Graphic");
// Q.Bijli Bill - Description on Graphic

let unit = Number(prompt("Enter a unit"))
let amount = 0;

if(unit>0 && unit<=100){
    amount=(100*4.2)
}else if(unit>100 && unit<=200){
    amount=(100*4.2)+(unit-100)*6
}else if(unit>200 && unit<=400){
    amount= (100*4.2)+ (100*6) + (unit-200)*8
}else if(unit>400){
    amount = amount= (100*4.2)+ (100*6) + (200)*8 + (unit-400)*13
}

console.log(amount);
