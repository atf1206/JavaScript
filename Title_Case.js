function titleCase(str) {

  var my_string = str.toLowerCase();
  var my_array = my_string.split(" ");
  var letter = "a";
  
  for (var i = 0; i < my_array.length; i++) {
    letter = my_array[i][0].toUpperCase();
    my_array[i] = letter + my_array[i].substring(1);
  }
  my_string = my_array.join(" ");
  return my_string;
}

titleCase("I'm a little tea pot");
