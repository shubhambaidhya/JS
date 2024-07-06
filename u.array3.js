//? map, filter, find, findIndex, reduce
//? loop based

let studentList = ["Saugat", "Shubham", "Suyasha", "Smriti", "Utsarga", "Unik"];
//map ma euta call back function huncha
//? map
//? it returns new array
//? used to alter values of array
//? original array length === returned array length
// const newStudentList = studentList.map((item, index, array) => {
//   console.log(item); every data dincha
//   console.log(index);
//   console.log(item, index, array);
//   return 0;
// });

// const newStudentList = studentList.map((item, index, array) => {
//   let upperCaseName = item.toUpperCase();
//   return upperCaseName;
// });
// console.log(newStudentList);

const priceList = [25, 35, 11, 9, 5, 99];
// const newPriceList = priceList.map((item, index, array) => {
//   const newPrice = item + 3;
//   return newPrice;
// });
// ? improved  aesthetic
// const newPriceList = priceList.map((item) => item + 3);
// console.log(newPriceList);

//? array of object
//? increase price of each item by 10% due to recent raise in taxes
const productList = [
  {
    id: 1,
    name: "Night vision glass",
    price: 5,
  },
  {
    id: 2,
    name: "Gloves",
    price: 7,
  },
  {
    id: 3,
    name: "Helmet",
    price: 25,
  },
];
const newProductList = productList.map((item, index, array) => {
  newPrice = item.price + 0.1 * item.price;
  return {
    ...item, //spread operator
    price: newPrice,
  };
});
console.log(newProductList);
