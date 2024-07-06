//? =================================assignment 1===================================

// Check if a number is odd or even.
let x = 5;
let remainder = x % 2;
if (remainder == 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// Find the largest of two numbers.
let m = 80;
let n = 90;
if (m > n) {
  console.log("m is largest");
} else {
  console.log("n is largest");
}

// Find the largest of three numbers.
let p = 3;
let q = 45;
let r = 7;
{
  p > q && p > r
    ? console.log("p is largest")
    : q > r
    ? console.log("q is largest")
    : console.log("r is largest");
}

//  Find grades for student marks.

let marks = 75;
if (marks >= 90) {
  console.log("The grade is A+");
} else if (80 <= marks && marks < 90) {
  console.log("The grade is A");
} else if (70 <= marks && marks < 80) {
  console.log("The grade is B");
} else if (60 <= marks && marks < 70) {
  console.log("The grade is C");
} else {
  console.log("Fail");
}

//Perform arithmetic operation based on the option provided.
//Set two variables with numbers. Create another variable called
//“option” which can be add/subtract/multiply/divide/power.
//Based upon the value of the option. Perform appropriate operation.

let a = 4;
let b = 2;
let option = 5;
switch (option) {
  case 1:
    console.log(a + b);
    break;
  case 2:
    console.log(a - b);
    break;
  case 3:
    console.log(a * b);
    break;
  case 4:
    console.log(a / b);
  case 5:
    console.log(Math.pow(a, b));
    break;
  default:
    console.log("Invalid Option");
}

//Check if input variable is a number or not
let num = 45;
if (typeof x == "number") {
  console.log(`${num} is a number`);
} else {
  console.log(`${num}is not a number`);
}
