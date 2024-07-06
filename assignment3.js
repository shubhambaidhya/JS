//?==================Assignment 3========================

//Give an example of a Spread Operator
const citizenshipDetails = {
  name: "Shubham Man Singh Baidhya",
  PhoneNo: 9819465397,
  Address: "Swoyambhu",
};

const identityDetails = { ...citizenshipDetails };
identityDetails.Address = "Satdobato";
console.log(citizenshipDetails);

//Use default value for a function which divides two numbers.

// function divideNum(a, b) {
//   let divide = a / b;
//   return divide;
// }
// console.log(divideNum(4, 2));

const divideNum = (a, b) => a / b;
const result = divideNum(4, 2);
console.log(result);

//Create an object named laptopDetails. Add fields like brand, processor,ram,core,gpu,storage,screenSize.
//Do object destructure and print out laptop details.

const laptopDetails = {
  brand: "Acer",
  processor: "Intel",
  ram: 16, //gb
  core: "core i7",
  GPU: "NVIDIA RTX 2060",
  storage: 512,
  screenSize: 15, //gb
};

const { brand, processor, ram, core, GPU, storage, screenSize } = laptopDetails;
console.log(brand, processor, ram, GPU);

//Create an array called countryList. Add some countries like Nepal, India,China..
//Use array destructure to print out data.

let countryList = [
  "Nepal",
  "Sri lanka",
  "India",
  "Bangladesh",
  "China",
  "Pakistan",
];
//using array destructuring to print out data
//...others is an example of rest operator which is used to identify that there are other values as well.
const [fisrt, second, third, fourth, fifth, ...others] = countryList;
console.log(fisrt);
console.log(second);
console.log(third);
console.log(fourth);
console.log(fifth);
console.log(others);

//example of spread operator to copy arrays.
let nextList = [...countryList];
nextList.sort();
console.log(nextList);
