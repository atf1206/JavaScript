function pairElement(str) {
  my_array = [];
  
  for (var i = 0; i < str.length; i++) {
    if (str[i] == "C") {
      my_array.push(["C","G"]);
    }
    if (str[i] == "G") {
      my_array.push(["G","C"]);
    }
    if (str[i] == "A") {
      my_array.push(["A","T"]);
    }
    if (str[i] == "T") {
      my_array.push(["T","A"]);
    }    
  }
  
  return my_array;
}

pairElement("GCG");
