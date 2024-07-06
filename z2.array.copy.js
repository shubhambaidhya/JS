// const nations = ["Nepal", "USA", "Japan", "Australia"];

//? shallow copy
// const newNationList = nations;
// newNationList[0]="Argentina";

//? spread operator(...)
//? also a shallow copy
// const newNationList = [...nations];
// newNationList[0] = "Argentina";
// console.log(newNationList);
// console.log(nations);

//? deep copy
//? structuredClone(_)
// const newNationList = structuredClone(nations);
// newNationList[0] = "Argentina";
// console.log(newNationList);
// console.log(nations);

// const userList = [{ name: "A" }, { name: "B" }];
// const newUserList = structuredClone(userList);
// newUserList[0].name = "Z";
// console.log(newUserList);

//? rest operator
//?used as a collector
//?is used in function

// const getProduct = (x, y, ...otherValues) => {
//   let product = otherValues.reduce((total, item) => {
//     total = total * item;
//     return total;
//   }, 1);
//   return product * x * y;
// };
// const result = getProduct(1, 2, 3, 4, 5, 6);
// console.log(result);
