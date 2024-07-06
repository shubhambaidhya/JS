// array
// collection of data

//statically typed language => C, Java, C++
//=> array is the collection of data of same type.

//dynamic language => js, python
//array => collection of data of any type

// const x = [1, "Hello", null, undefined, { name: "Nepal" }, [2, 3]];
// console.log(x, typeof x);

//? we use array with same data  type
//? in terms of real world use-case

// const temperatureList = [10, 20, 28, 22];
// console.log(temperatureList);

// const nations = ["Nepal", "India", "Sri lanka", "South Africa", "Bangladesh"];
// console.log(nations);

//? values in array can be accessed using index
//? index always starts with 0

// const laptopBrands = ["Asus", "MSI", "Apple", "Acer", "Dell"];
// console.log(`This is ${laptopBrands}`);
// console.log(laptopBrands[0]);
// console.log(laptopBrands[1]);
// console.log(laptopBrands[4]);
// console.log(laptopBrands.length);//to count total number of data in array

const bakeryItem = [
  "Black forest",
  "White forest",
  "Red-velvet",
  "Caramel",
  "Blueberry",
];

// console.log(bakeryItem[0]);
// console.log(bakeryItem[1]);
// console.log(bakeryItem[2]);
// console.log(bakeryItem[3]);
// console.log(bakeryItem[4]);

// for (let i = 0; i <= bakeryItem.length - 1; i++) {
//   console.log(bakeryItem[i]);
// }

//?why datatype of object is array?
// const obj = {
//   0: "Apple",
//   1: "Banana",
//   2: "Orange",
//   3: "Mango",
// };

const obj = ["Apple", "Banana", "Orange", "Mango"];
console.log(obj[0]);
