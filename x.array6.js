//? reduce
let sum = 0;
const numList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//forEach just loop
// numList.forEach((item, index, array) => {
//   sum = sum + item;
// });
// console.log(sum);
// const total = numList.reduce((sum, item, index, array) => {
//   sum = sum + item;
//   return sum;
// }, 0);//sum ko value last ma halney after item,index,array pachi which is 0 here

//?aesthetic
const total = numList.reduce(
  (sum, item, index, array) => (sum = sum + item),
  0
);
console.log(total);
