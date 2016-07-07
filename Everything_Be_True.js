function truthCheck(collection, pre) {
  for (var i = 0; i < collection.length; i++) {
    console.log(collection[i]);
    if (collection[i].hasOwnProperty(pre)) {
      if (Boolean(collection[i][pre])) {
        console.log("true!");
      } else {
        console.log("false!");
        return false;
      }
    } else {
      console.log("false!");
      return false;
    }
  }
  return true;
}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
