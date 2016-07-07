function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num < 0) {
    return "";
  }
  var my_string = "";
  for (var i = 0; i < num; i++){
    my_string += str;
  }
  return my_string;
}

repeatStringNumTimes("abc", 3);
