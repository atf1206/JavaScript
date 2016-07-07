function steamrollArray(arr) {
  var my_array = [];
  my_array = digDeeper(arr, my_array);
  console.log("finishing ", my_array);
  return my_array;
}

function digDeeper(arg_array, my_array) {
  for (var i = 0; i < arg_array.length; i++) {
    console.log(i);
    if (Array.isArray(arg_array[i])) {
      digDeeper(arg_array[i], my_array);
    } else {
      my_array.push(arg_array[i]);
    }
  }
  console.log("returning ", my_array);
  return my_array;
}

steamrollArray([1, [2], [3, [[4]]]]);
