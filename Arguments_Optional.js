function addTogether() {
  if (arguments.length == 2) {
    if (isNumeric(arguments[0]) === true && isNumeric(arguments[1]) === true) {
      return arguments[0] + arguments[1];
    } else {
      return undefined;
    }
  } else if (isNumeric(arguments[0]) === false) {
      return undefined;
  } else {
    var x = arguments[0];
    return function(y) {
      
      if (isNumeric(y) === false) {
        return undefined;
      }
      return x + y;
    };
  }
  return false;
}

function isNumeric(n) {
  console.log(n, typeof(n) == "number");
    if (typeof(n) == "number") {
      return true;
    }
    else {
      return false;      
    }
}

addTogether(2, "3");
