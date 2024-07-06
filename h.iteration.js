//iteration
//loop
//to execute same code multiple times

//? 1.for
//? 2.while
//? 3.do.. while

//?for loop
//syntax
// for(initial_value; condition; increment/decrement){
//some code
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

//? WAFL to print numbers from 100 to 50
// for (let i = 100; i >= 50; i--) {
//   console.log(i);
// }

//?WAFL to find if a number is prime or not
//take number greater than 1
let num = 25;
let isPrime = true;

for (let i = 2; i < num; i++) {
  let remainder = num % i;
  if (remainder == 0) {
    isPrime = false;
    break;
  }
}

console.log(isPrime ? "prime" : "composite");
