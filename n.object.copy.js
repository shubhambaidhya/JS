//object copy

const print = (values) => {
  console.log(values);
};
const student1 = {
  name: "Shubham",
  college: "KEC",
  isGraduated: false,
  image: null,
  address: {
    permanent: "A",
    temporary: "B",
  },
};
// print(student1);

// const student2 = student1;//naya object ma copy garcha but naya object ma change garyo bhaney purano ma pani change huncha
//?shallow copy

// student2.name = "Sandhya";
// console.log(student2);

// console.log(student1);

//?Spread Operator(...)
//? shallow (look example 2)
//? example 1
// const student2 = { ...student1 }; //"..." operator le naya object ma purano object ko content copy garcha
// student2.name = "Yadav";
// console.log(student1);

//?example 2
// const student2 = { ...student1 };
// student2.address.permanent = "Z";
// console.log(student2);
// console.log(student1);

//?Deep Copy
//structuredClone
// const student2 = structuredClone(student1);
// student2.address.permanent = "C";
// console.log(student2);
// console.log(student1);
