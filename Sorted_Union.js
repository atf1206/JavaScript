function uniteUnique(arr1, arr2, arr3) {
  var my_array = [];
  for (var array in arguments) {
    my_array = my_array.concat(arguments[array]);
  }

  my_array = my_array.reduce(function(a,b){
    if (a.indexOf(b) < 0 ) a.push(b);
    return a;
  },[]);
  return my_array;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
