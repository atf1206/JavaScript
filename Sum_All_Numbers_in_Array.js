function sumAll(arr) {
  var my_arr = [];
  if (arr[0] > arr[1]) {
    my_arr.push(arr[1]);
    my_arr.push(arr[0]);
  } else {
    my_arr.push(arr[0]);
    my_arr.push(arr[1]);
  }
  var total = 0;
  for (var i = my_arr[0]; i <= my_arr[1]; i++) {
    total += i;
  }
  console.log(total);
  return total;
}

sumAll([1, 4]);
