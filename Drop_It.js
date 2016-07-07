function dropElements(arr, func) {
  var filtered = arr.filter(func);
  var flag = 0;
  var my_array = [];
  for (var i = 0; i < arr.length; i++) {
    if (filtered[0] == arr[i]) {
      flag = 1;
    }
    if (flag == 1) {
      my_array.push(arr[i]);
    }
  }
  return my_array;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
