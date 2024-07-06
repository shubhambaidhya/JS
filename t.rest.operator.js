// rest operator => acts as collector
//(...)

// const getSum = (a, b, c, d, e) => {
//   let sum = a + b + c + d + e;
//   return sum;
// };

// const result = getSum(1, 2, 3, 4, 5);
// console.log(result);

//when we use rest operator

const getSum = (a, b, ...othervalues) => {
  let sum = a + b;
  return sum;
};

const result = getSum(1, 2, 3, 4, 5);
console.log(sum);
