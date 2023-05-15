// 5.	Return all the palindromes in an array

const arr = ["level", "racecar", "hello", "deified", "world"];

const palindromes = (function() {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const word = arr[i];
    const reversed = word.split("").reverse().join("");
    if (word === reversed) {
      result.push(word);
    }
  }
  return result;
})();

console.log(palindromes); // Output: ["level", "racecar", "deified"]
