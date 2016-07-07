function translatePigLatin(str) {
  var my_str = "";
  var ending = "";
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u") {
      my_str = str.slice(i);
      if (i == 0) {
        my_str += "w";
      }
      return my_str + ending + "ay";
    }
    ending += str.slice(i,i+1);
  }  
  return 0;
}


translatePigLatin("consonant");
