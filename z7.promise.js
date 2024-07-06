// promise => something that happens in future

//? tri state
//? pending
//? success
//? failure

//? to get result, we need to resolve  promise

//?1. call back function
// const getSum = (a, b) => {
//   setTimeout(() => {
//     return a + b;
//   }, 1000);
// };
// const res = getSum(2, 7);
// console.log(res);

//?2. then .catch

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let randomNumber = Math.random;
//     if (randomNumber > 0.5) {
//       resolve(randomNumber);
//     }else{
//         reject("Too small number")
//     }
//   }, 2000);
// });

// promise
//  .then((result)=>{
//     console.log(result);
//   })
// .catch((error)=>{
//     console.log(error);
// })

//?3. async call

// const getRandomNumber = async () => {
//   try {
//     const result = await promise;
//     console.log(result);
//   } catch (error) {
//     console.log(error, "error");
//   }
// };

// console.log("hello");
// getRandomNumber();
// console.log("hi");

//? real use case
//? await in front of task that takes time
//? await should be wrapped by a async function
//? error handling => try catch is used
