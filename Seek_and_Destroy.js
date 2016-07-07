function destroyer(arr) {
  
  var new_arr = [];
  var bool = true;
  for (var i = 0; i < arr.length; i++) {
    bool = true;
    for (var j = 1; j < arguments.length; j++) {
      console.log(arr[i], arguments[j]);
      if (arr[i] == arguments[j]) {
         bool = false;
        }
    }
    if (bool == true) {
      new_arr.push(arr[i]);
    }
  }
  console.log(new_arr);
  return new_arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
