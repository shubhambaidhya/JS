//? asynchronous

//? synchronous => existing or occurring at same/similar time
//? asynchronous => not existing or occurring at same/similar time

//? node => single threaded
//? non-blocking => does not block code execution
//? real world scenario of code blocking =>
//? for loop billion times
//? image processing
//? API request
//? database operation
// u => ultra power saving
// k => unlocked
// H => high performance
// H => Hexa core

//? interview ma asked questions
//? kasari print huncha check it....
// console.log("Hi");

// setTimeout(() => {
//   console.log("TimeOut"), 2000;
// });
// console.log("Hello");

//? example 2

// console.log("Nepal");

// setTimeout(() => {
//   console.log("Timeout 1");
// }, 4000);

// setTimeout(() => {
//   console.log("Timeout 2");
// }, 0);

// console.log("South Africa");

//? example 3

// const multiply = (num1, num2) => {
//   return num1 * num2;
// };

// const square = (n) => {
//   const squaredNumber = multiply(n, n);
//   return squaredNumber;
// };

// const printNumber = () => {
//   const result = square(4);
//   console.log(result);
// };

// printNumber();

//? recursive function
//! maximum call stack size exceeds
// const sayHi = () => {
//   sayHi();
// };
// sayHi(); //!RangeError: Maximum call stack size exceeded
