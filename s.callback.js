//? Higher Order function
//1. callback function (function as an argument into another function)
//2. closure function (function returning function)

// callback function
//? function which is passed as an argument to another function
//? is called callback function

// const getSum = (x, y, func) => {
//   let sum = x + y;
//   func(sum);
// };
// getSum(5, 7, (value) => {
//   console.log(value);
// });

//? function returning function
// closure => function + lexical environment (surrounding environment)

//? we can say makeAdder is a function factory
// const makeAdder = (x) => {
//   const doSum = (y) => {
//     let sum = x + y;
//     return sum;
//   };
//   return doSum;
// };

// const doSum5 = makeAdder(5);
// const sum = doSum5(10);
// console.log(sum);

// const doSum25 = makeAdder(5);
// const doSum = doSum25(5);

// const sum = makeAdder(25)(5);
// console.log(sum);

//? aesthetic
const makeAdder = (x) => (y) => x + y;
console.log(makeAdder(10)(15));
