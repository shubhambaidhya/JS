//every
//some

const ageList = [11, 18, 38, 49, 9, 8];

//? check if all users are adult

// let allAdult = true;
// ageList.forEach((item) => {
//   if (item < 18) {
//     allAdult = false;
//   }
// });

//? instead of using this whole loop you can use....
const allAdult = ageList.every((item) => item >= 18);
console.log(allAdult); //every le check garcha ja first mai false bhetauncha false print huncha

//? check if any user is adult
const anyAdult = ageList.some((item) => item >= 18);
console.log(anyAdult); //some ma checks every item unless true
