// 4.	Return all the prime numbers in an array

const getPrimes = (arr) => {
    return arr.filter(num => {
      for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0) {
          return false;
        }
      }
      return num > 1;
    });
  };
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const primes = getPrimes(numbers);
  
  console.log(primes); // Output: [2, 3, 5, 7]
  