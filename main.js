function returnEvenOddNum(num) {
  return num % 2 ? "Odd" : "Even";
}
console.log(returnEvenOddNum(5));

function returnEvenOddArray(array){
  array.forEach(element => {
    // console.log(element)
    typeof element % 2 === 0 ?  "even" : "odd"
  //   element % 2 ? "Odd" : "Even";
  });
}
const numArray = [1,3,5,6,3,2,6,12];

console.log(returnEvenOddArray(numArray))
