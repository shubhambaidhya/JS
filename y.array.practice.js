const laptopList = [
  {
    name: "LOQ",
    brand: "Lenovo",
    price: 1070,
  },
  {
    name: "Aspire 5",
    brand: "Acer",
    price: 730,
  },
  {
    name: "Modern 15",
    brand: "MSI",
    price: 690,
  },
  {
    name: "Macbook Pro M3",
    brand: "Apple",
    price: 2059,
  },
  {
    name: "Inspiron G15",
    brand: "Dell",
    price: 1015,
  },
  {
    name: "Idea Pad",
    brand: "Lenovo",
    price: 1059,
  },
  {
    name: "Zenbook 15",
    brand: "MSI",
    price: 1064,
  },
];

//2 3 6
//? give 6 percent on 6:6 on each laptop
// const increasedPrice1 = laptopList.map((item) => {
//   newPriceOfLaptop = item.price - 0.06 * item.price;
//   return {
//     ...item,
//     price: newPriceOfLaptop,
//   };
// });
// console.log(increasedPrice1);

//? increase price of dell laptops by 10%

// const increasedPrice = laptopList.map((item) => {
//   if (item.brand === "Dell") {
//     let newPrice = item.price + 0.1 * item.price;
//     return {
//       ...item,
//       price: newPrice,
//     };
//   }
//   return { ...item };
// });
// console.log(increasedPrice);

//? find all lenovo laptops

// const lenovoLaptops = laptopList.find((item) => item.brand === "Lenovo");
// console.log(lenovoLaptops);

//? update name of "Idea Pad" to "Idea Pad Ultra"

// const newLaptopList = laptopList.map((item) => {
//   if (item.name == "Idea Pad") {
//     return {
//       ...item,
//       name: "Idea Pad Ultra",
//     };
//   }
//   return { ...item };
// });

//? get all laptops whose price is below $1050

// const newLaptop = laptopList.filter((item) => item.price < 1050);
// console.log(newLaptop);

// ? find "Zenbook 15" laptop details

const newLaptopList = laptopList.find((item) => {
  return item.name === "Zenbook 15";
});
console.log(newLaptopList);

// ? find sum of prices of all laptops

const total = laptopList.reduce((sum, item) => {
  sum = sum + item.price;
  return sum;
}, 0);
console.log(`The total price is ${total}`);
