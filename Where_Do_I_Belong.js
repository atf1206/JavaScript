function getIndexToIns(arr, num) {
  var my_arr = arr.sort(function(a, b) {
  return a - b;
});
  console.log(my_arr);
  for (var i = 0; i < arr.length; i++) {
    if (num <= my_arr[i]) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([40, 60], 50);
