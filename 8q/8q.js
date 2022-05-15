// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

//SOLUTION:
const array =  [34, 15, 88, 2];
class SmallestIntegetFinder {
}

function findSmallestInt(args) {
  return Math.min(...args)
}
// let smint = new SmallestIntegetFinder()
console.log(findSmallestInt(array))

// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

// Solution:

const array2 = ["Telescopes", "Glasses", "Eyes", "Monocles"];

function sortByLength (array) {
  // Return an array containing the same strings, ordered from shortest to longest
  return array.sort((a,b) => a.length - b.length)
};

console.log(sortByLength(array2))


// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

function century(year) {
  // Finish this :)
  // arguments are positive numbers only
  // rounds up to the nearst whole interger
  return Math.ceil(year/100)
}

century(1777) // 18
century(1000) //10