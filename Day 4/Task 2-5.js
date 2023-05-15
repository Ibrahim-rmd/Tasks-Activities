// 5.	Return all the palindromes in an array

const arr = ["level", "racecar", "hello", "deified", "world"];

const palindromes = arr.filter(word => {
  const reversed = word.split("").reverse().join("");
  return word === reversed;
});

console.log(palindromes); // Output: ["level", "racecar", "deified"]
