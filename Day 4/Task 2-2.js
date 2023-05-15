// 2.	Convert all the strings to title caps in a string array

((arr) => {
    const result = arr.map((str) => {
      const words = str.split(' ');
      const capitalizedWords = words.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      return capitalizedWords.join(' ');
    });
    console.log(result);
  })(['hello world', 'goodbye moon', 'the quick brown fox']);
  
  // Output: ["Hello World", "Goodbye Moon", "The Quick Brown Fox"]
  