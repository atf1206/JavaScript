function myReplace(str, before, after) {
  my_array = str.split(" ");
  my_after = after;
  for (var i = 0; i < my_array.length; i++) {
    if (my_array[i] == before) {
      console.log(my_array[i][0], my_array[i][0].toUpperCase());
      if (my_array[i][0] == my_array[i][0].toUpperCase()) {
        my_after = after[0].toUpperCase() + after.slice(1);
      }
      my_array[i] = my_after;
      
    }
  }
  var my_str = my_array.join(" ");
  return my_str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
