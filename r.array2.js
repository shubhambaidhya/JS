//methods in array

//push, pop, shift,unshift,reverse

//? push=> to add element(s) to end of array
//? pop=> to remove element from end of array i.e last element lai remove garney

// const numList = [10, 11, 12];
//to add use push(_)
//numList.push(13, 14, 15);

//to remove pop()
// numList.pop();
// console.log(numList);

//? shift => to remove first element(S) from array
//? unshift => to add element(s) from starting of array

// let studentList = ["Saugat", "Shubham", "Samundra", "Smriti"];
//to remove item from starting of array
//use shift()
// studentList.shift();
// console.log(studentList);

//to add item from start
//use unshift(_)
// studentList.unshift("Suyasha", "Utsarga", "Unik");
// console.log(studentList);

//? reverse => reversing the order of items in array
// const priceList = [15, 25, 35, 45];
//to reverse the order
//use reverse()
// priceList.reverse();
// console.log(priceList);

//to preserve the original data of array
// const newPriceList = priceList.toReversed();
// console.log(priceList);
// console.log(newPriceList);

//? includes
//? checks whether array contains specific value or not
//? results in boolean(true or false)
//? ======================================================
// const laptops = ["Macbook M3", "TUF F15", "Nitro 5", "Predator"];
//include use garey bhaney we can find if the element is there or not
//Harek index hercha if that searched element is there or not
// const result = laptops.includes("Predator");
// console.log(result);

//string ni afai ma euta array ho so we can use includes
// const currentRoute = "/user/edit/1";
// const result = currentRoute.includes("edit");
// console.log(result);

//? slice => it doesnot change original array
//? return new array with portion of array from original array
//? when given start and end => start is included, item of end index is excluded
// const animals = ["ant", "bison", "camel", "duck", "elephant"];
// const newList = animals.slice(2);
// newList[0] = "red-ant";
// animals.slice(1,4)//original array ma change gardaina.So, we need to declare a new variable with it
// const newList = animals.slice(1, 4);
// console.log(newList);

//? spliced
//? remove or replace existing item
// const months = ["Jan", "Mar", "Apr", "May", "Jun"];
// months.splice(3); //removes item from this index
// months.splice(2, 1);//mar dekhi start garney 1 ta hataune
//splice (start index, delete count)
// months.splice(2, 1, "Dec"); //removing item and deleted position ko ma add garney
//splice (start index, delete count, item 1 ,....)
// months.splice(5, 0, "Aug", "Sept", "Nov");
// console.log(months);
// there is also a function called tosplice()

//?sort
// let studentList = [
//   "Saugat",
//   "Abhisekh",
//   "Yadav",
//   "Smriti",
//   "Lokendra",
//   "Shubham",
// ];
//ascending
// studentList.sort();
//descending
// studentList.sort().reverse();
// console.log(studentList);

let numList = [1, 100, 11, 202, 402, 2, 23, 20, 50, 505, 111, 11111];
// numList.sort((a, b) => a - b);//ascending sort
numList.sort((a, b) => b - a); // descending sort
console.log(numList);
