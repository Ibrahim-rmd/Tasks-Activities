// 2.	Convert all the strings to title caps in a string array

(function(arr) {
    var result = arr.map(function(str) {
      var words = str.split(' ');
      var capitalizedWords = words.map(function(word) {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      });
      return capitalizedWords.join(' ');
    });
    console.log(result);
  })(['hello world', 'come here', 'c is a programming language']);


  
  