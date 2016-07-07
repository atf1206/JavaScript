function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var length = str.length;
  if (str.substr(length - target.length) == target){
    return true;
  }
  else return false;
}

confirmEnding("Bastian", "n");
