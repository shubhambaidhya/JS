//?conditionals

//?sequential flow
// console.log("Hi");

// console.log(2 + 3);

// console.log("Hello");

//? if
//? if...else
//? if...else if...else
//? switch
//? ternary

//?if
//?syntax
// if(condition)
//     {
// some code here
//     }

//?if...else
// if (condition) {
//some code here
// } else {
//some code here
// }

//? find the number is odd or even
// let x = 25;
// let remainder = x % 2;
// if (remainder === 1) {
//   console.log(`${x} is Odd`);
// } else {
//   console.log(`${x} is Even`);
// }

//?if...else if....else
//? syntax
// if(condition){
//code here
// }
// else if (condition) {
//code here
// }
// else {
//code here
// }

//? find polarity of the number
// let a = -25;
// if (a < 0) {
//   console.log("Negative");
// } else if (a > 0) {
//   console.log("Positive");
// } else {
//   console.log("neutral");
// }

//?suppose any three positive numbers and find greatest among three
// let a = 3;
// let b = 2;
// let c = 1;
// if (a > b && a > c) {
//   console.log("a is greatest");
// } else if (b > c) {
//   console.log("b is greatest");
// } else {
//   console.log("c is greatest");
// }

//?switch => best for MCQs
//?syntax
// switch(variable){
//   case value1:
//some code here
//break;
//   case value2:
//some code here
//break;
//   case value3:
//some code here
//break;

//   default:
//some code here
// }

// let dayNumber = 5;

// switch (dayNumber) {
//   case 1:
//     console.log("Sunday");
//     break;
//   case 2:
//     console.log("Monday");
//     break;
//   case 3:
//     console.log("Tuesday");
//     break;
//   case 4:
//     console.log("Wednesday");
//     break;
//   case 5:
//     console.log("Thursday");
//     break;
//   case 6:
//     console.log("Friday");
//     break;
//   case 7:
//     console.log("Saturday");
//     break;
//   default:
//     console.log("Invalid");
// }

//? ternary
// let x = 25;
// let remainder = x % 2;
// if (remainder === 1) {
//   console.log(`${x} is Odd`);
// } else {
//   console.log(`${x} is Even`);
// }
//?syntax
//condition? expressionIfTrue : expressionIfFalse
// remainder === 0 ? console.log("Even") : console.log("Odd");
//? conditional(ternary) operator chaining example
//? find polarity of the number
const print = (value) => {
  console.log(value);
};
let a = -25;
// if (a < 0) {
//   console.log("Negative");
// } else if (a > 0) {
//   console.log("Positive");
// } else {
//   console.log("neutral");
// }

a < 0 ? print("-ve") : a > 0 ? print("+ve") : "zero";
