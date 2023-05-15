// 3.	Sum of all numbers in an array

const arr = [1, 2, 3, 4, 5];

const sum = arr => arr.length === 0 ? 0 : arr[0] + sum(arr.slice(1));

console.log(sum(arr)); 

// Output: 15
