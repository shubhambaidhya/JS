// function
//? DRY => Do not repeat yourself
//? objective: code reusability, to reduce code redundancy, single point of failure

//?syntax

//function function_name(){
//some code here
// }

// function sayHello(userName) {
//   console.log(`Hello ${userName}`);
// }
// sayHello("shubham");
// for (let i = 1; i <= 5; i++) {
//   sayHello();
// }

// function getSum(x, y) {
//   let sum = x + y;
//   console.log(sum);
// }
// getSum(2.3);

//? arrow function

// const sayHi = () => {
//   console.log("Hi");
// };

// sayHi();

// const doSum = (x, y) => {
//   x = +x;
//   y = +y;
//   let sum = x + y;
//   return sum;
// };
// let result = doSum("1", "2");
// console.log(result);

//? WAP to print product of two numbers

// const doProduct = (a, b) => {
//   pro = a * b;
//   return pro;
// };
// const result = doProduct(3, 4);
// console.log(result);
//?advantage to use array function is: it can be used as one liner i.e one line ma code lekhney
// const doProduct = (a, b) => a * b;
// const result = doProduct(3, 4);
// console.log(result);

//? WAF that checks whether a number is odd or even

// const numberOE = (Num) => {
//   if (Num % 2 == 0) {
//     return "Even";
//   } else return "Odd";
// };
// const result = numberOE(20);
// console.log(result);

//?========2nd way
// const numberOE = (Num) => (Num % 2 == 0 ? "even" : "odd");

// const result = numberOE(20);
// console.log(result);

//? WAF to check polarity of a number
// const checkPolarity = (num) =>
//   num > 0 ? "Positive" : num < 0 ? "Negative" : "Zero";
// const result = checkPolarity(-20);
// console.log(result);
