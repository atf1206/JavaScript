function findElement(arr, func) {

  var my_num = 0;
  for (var num = 0; num < arr.length; num++) {
    my_num = arr[num];
    if (func(my_num) === true) {
        return my_num;
    }
  }
  return undefined;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
