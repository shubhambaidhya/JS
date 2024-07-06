//? =============================assignment 2==============================

let myHouseDetails = {
  numberOfRooms: 9,
  numberOfMembers: 10,
  colorOfHouse: "green",
  builtYear: 2011,
  numberOfStorey: 3,
};
// delete myHouseDetails.numberOfMembers;
// console.log(myHouseDetails);

myHouseDetails.numberOfRooms = "3";
console.log(myHouseDetails);

// myHouseDetails.estimatedPriceOfHouse = 20000000;

console.log(`I have a ${myHouseDetails.colorOfHouse} colored
house with ${myHouseDetails.numberOfRooms} rooms where ${myHouseDetails.numberOfMembers} people are living, 
The house is ${myHouseDetails.numberOfStorey}
storey and was built in ${myHouseDetails.builtYear} with an estimated budget of ${myHouseDetails.estimatedPriceOfHouse}`);
