// object destructure
// const bookDetail = {
//   name: "Operating System",
//   author: "A. Tanenbaum",
//   publishedDate: "1990/01/01",
//   numberOfPages: 500,
//   coverPhoto: null,
//   price: undefined,
// };

// console.log(bookDetail.name);
// console.log(bookDetail.author);
// console.log(bookDetail.publishedDate);
// console.log(bookDetail.numberOfPages);
// console.log(bookDetail.coverPhoto);
// console.log(bookDetail.price);

//?In destructured way
// const { name, author, publishedDate, numberOfPages, coverPhoto, price } =
//   bookDetail;

// console.log(name);
// console.log(author);

//? ======================= example 2 ===========================
// const obj1 = {
//   name: "Cup",
//   price: 7,
// };

// const obj2 = {
//   name: "Mouse",
//   price: 6,
// };

// const{price}=obj1;
//const {price}=obj2://error because same keys cha obj1 ma ra obj2 ma so print garda error aauncha
//so we change the key name while printing just as below
// const {price:priceOfProduct2}=obj2;//Rename price of obj2 to priceOfProduct2 which will be valid
// console.log(priceOfProduct2)

//? ======================== example 3 =============================

const student = {
  name: "Sandhya",
  college: "HCOE",
  isGraduated: false,
  image: null,
  address: {
    permanent: "A",
    temporary: "B",
  },
};

const {
  name,
  college,
  isGraduated,
  image,
  address: { permanent: permanentAddress, temporary },
} = student;

// console.log(permanent);
console.log(permanentAddress);
