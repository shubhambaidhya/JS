//? default value

// const getSum = (x = 1, y = 0, z) => {
// const getSum = (z, x = 1, y = 0) => {
//default value haru lai last ma rakhney
// default y=0 but if y=10 then y=0 is not taken
//   let sum = x + y + z;
//   return sum;
// };
// const res = getSum(5);
// console.log(res);

// const greetUser = (userName = "User") => {
//   console.log(`Good Morning ${userName}`);
// };
// greetUser();

//? ==================example 2=====================
//? example without default value
// const greetUser = (userName) => {
//   console.log(`Good Morning ${userName || "User"}`); //using OR
// };
// greetUser("Utsarga");
