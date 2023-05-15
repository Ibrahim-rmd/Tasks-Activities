// 6.	Return median of two sorted arrays of the same size.

(function() {
    const arr1 = [1, 3, 5, 7, 9];
    const arr2 = [2, 4, 6, 8, 10];
    
    const mergeArrays = (arr1, arr2) => {
      const merged = [];
      let i = 0;
      let j = 0;
      
      while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
          merged.push(arr1[i]);
          i++;
        } else {
          merged.push(arr2[j]);
          j++;
        }
      }
      
      while (i < arr1.length) {
        merged.push(arr1[i]);
        i++;
      }
      
      while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
      }
      
      return merged;
    };
    
    const findMedian = arr => {
      const len = arr.length;
      const mid = Math.floor(len / 2);
      
      if (len % 2 === 0) {
        return (arr[mid - 1] + arr[mid]) / 2;
      } else {
        return arr[mid];
      }
    };
    
    const mergedArr = mergeArrays(arr1, arr2);
    const median = findMedian(mergedArr);
    
    console.log(median);
  })();
  