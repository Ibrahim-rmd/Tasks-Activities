// 8.	Rotate an array by k times      


const rotatedArray = ((arr, k) => {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
})([1, 2, 3, 4, 5], 2);

console.log(rotatedArray); // [4, 5, 1, 2, 3]
