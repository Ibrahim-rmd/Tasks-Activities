// 7.	Remove duplicates from an array

const arr = [1, 2, 2, 3, 4, 4, 5];

const uniqueArr = (function() {
  const seen = {};
  return arr.filter(function(item) {
    return seen.hasOwnProperty(item) ? false : (seen[item] = true);
  });
})();

console.log(uniqueArr); // [1, 2, 3, 4, 5]
