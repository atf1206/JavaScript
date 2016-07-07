function binaryAgent(str) {
  var my_array = str.split(" ");
  for (var i = 0; i < my_array.length; i++) {
    my_array[i] = parseInt(my_array[i], 2);
    my_array[i] = String.fromCharCode(my_array[i]);
    console.log(my_array);
  }
  
  var my_string = my_array.join("");
  return my_string;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
