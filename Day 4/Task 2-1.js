// Do the below programs in arrow functions

// 1.	Print odd numbers in an array

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const printOddNumbers = arr => {
  arr.filter(num => num % 2 !== 0).forEach(oddNum => console.log(oddNum));
};

printOddNumbers(arr); // Output: 1 3 5 7 9





