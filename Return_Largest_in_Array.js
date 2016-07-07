function largestOfFour(arr) {
  var highest = 0;
  var my_array = [];
  
  for (i = 0; i < arr.length; i++) {
    for (j = 0; j < arr[i].length; j++) {
      if (arr[i][j] > highest){
        highest = arr[i][j];
      }
    }
    my_array.push(highest);
    highest = 0;
  }
  
  return my_array;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
