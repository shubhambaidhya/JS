//? object
//? key-value pair
//? key/property/field
//const studentDetails = {}; //curly backet le object janauncha
// console.log(studentDetails, typeof studentDetails);

//const obj1 = {};
//const obj2={};

// console.log(obj1===obj2);//false

//student1
// let firstName="Rohan"
// let lastName="Bhandari"
// let permanentAddress="Baneshwor"
// let temporaryAddress="Sydney"
// let isGraduated=true
//above method ko ma organized way ma chaina

//?object declaration
// let student1 = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   permanentAddress: "Baneshwor",
//   temporaryAddress: "Sydney",
//   isGraduated: true,
// };
// console.log(student1);

//My name is Rohan Bhandari
// console.log(`My name is ${student1.firstName}`); //object lai print garna mildaina...primary data lai print garney

//? dot operator
//? to access values in the object
// console.log(student1.permanentAddress);
// console.log(student1.firstName);

//? square bracket operator
// console.log(student1["isGraduated"]);
// console.log(student1["temporaryAddress"]);

//?CRUD
// (C) => Create / Add;
// (R) => Read / Retrieve;
// (U) => Update / Edit;
// (D) => Delete / Remove;

//?Read
// let student1 = {
//   firstName: "Rohan",
//   lastName: "Bhandari",
//   address: { //nested object
//     permanent: "Baneshwor",
//     temporary: "Sydney",
//   },
//   isGraduated: true,
// };
// console.log(student1.address.temporary);
// console.log(student1["address"]["permanent"]);
// console.log(student1["address"].permanent);
// console.log(student1.address["temporary"]);

//?Upsert(Update or insert):first priority to Update
// student1.firstName = "Roshna"; //update
// student1.age = 27; //insert
// console.log(student1);
// student1["address"]["permanent"] = "Birgunj";

// let nationDetail = {
//   name: "Nepal",
//   population: "3 crore",
//   perCapita: 1400,
// };

//?Delete
// delete nationDetail.perCapita;
// nationDetail.name = undefined;
// console.log(nationDetail);

const cupDetails = {
  name: "Water Cup",
  brand: "Baltra",
  color: "Yellow",
  color: "Green",
  name: "Tea Cup",
};
console.log(cupDetails);//pachi lekheko jun cha tei print huncha i.e order important huncha

