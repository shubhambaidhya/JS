//? filter (there is some condition to satisfy)
//? 1. returns new array
//? 2. there is high chance of
//? original array length !== returned array length
//? 3. it selects or deselects value
//? 4. it does not change array item

// const numList = [1, 10, 33, -6, -99, 97, -100];

// const filterList = numList.filter((item, index, array) => {
//   return item > 0 // item lekhera aako haina its because of true or false
//return 1: aesma ni result aauncha due to truthy/falsy sense
// });
//? aesthetic way
// const filterList = numList.filter((item, index, array) => item > 0);
// console.log(filterList);

//? find all items whose price is less than 10
// const productList = [
//   {
//     id: 1,
//     name: "Night vision glass",
//     price: 5,
//   },
//   {
//     id: 2,
//     name: "Gloves",
//     price: 7,
//   },
//   {
//     id: 3,
//     name: "Helmet",
//     price: 25,
//   },
// ];
// const filterItem = productList.filter((item, index, array) => item.price < 10);
// console.log(filterItem);
