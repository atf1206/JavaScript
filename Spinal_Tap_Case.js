function spinalCase(str) {
  var my_str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  console.log(my_str);
  var my_array = my_str.split(/ |-|_/);
  console.log(my_array);
  my_str = my_array.join("-");
  my_str = my_str.toLowerCase();

  return my_str;
}

spinalCase('This Is Spinal Tap');
