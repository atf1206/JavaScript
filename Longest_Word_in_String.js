function findLongestWord(str) {
  var count = 0; 
  var array = str.split(" ");
  console.log(array);
  
  for (var i = 0; i < array.length; i++) {
    console.log(array[i].length);
    
    if (array[i].length > count) {
      count = array[i].length;
    }
  }

  return count;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
