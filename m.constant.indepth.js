//constant
//? In js constant means which cannot be re-assigned

//? mutation => process of having change
//? mutate=> to change
//? mutable =>changeable
//?immutable=>unchangeable

//? primary data type(string, number, boolean, undefined,null) => cannot be reassigned, thus immutable
//? non_primary data type(object)=> cannot be reassigned but mutable

//?immutable
// const isDeveloped = false;
// isDeveloped = true;

// const phoneDetails = {
//   brandName: "Apple",
// };
// phoneDetails.brandName = "Samsung";
// console.log(phoneDetails);

// phoneDetails = true;//constant cannot be reassigned
// const phoneDetails = {
//   brandName: "Samsung",
// };//cannot be reassigned

// const obj1 = Object.freeze({
//   name: "Rohan",
// });
// obj1.name = "Rohit";
// console.log(obj1);
//freeze rakhesi bhitra ko ni data ni change hudaina

// const obj1 = {
//   name: "A",
// };
// const obj2 = {
//   name: "A",
// };
//TODO : after array
// const obj1Keys = Object.keys(obj1);
// const obj2Keys = Object.keys(obj2);

// console.log(obj1Keys, obj2Keys);//keys haru matra i.e "name"

// console.log(Object.values(obj1)); //Keys bhitra ko values ni aauncha "A"
