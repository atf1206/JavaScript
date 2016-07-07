function diffArray(arr1, arr2) {
  var newArr = [];
  
  // Same, same; but different.
  newArr = check(arr1, arr2, newArr);
  newArr = check(arr2, arr1, newArr);
  return newArr;
}

function check(a1, a2, a3) {
  var bool = true;  
  for (var i = 0; i < a1.length; i++) {
    bool = true;
    for (var j = 0; j < a2.length; j++) {
      if (a1[i] == a2[j]) {bool = false;}
    }
    for (var k = 0; k < a3.length; k++) {
      if (a1[i] == a3[k]) {bool = false;}
    }
    if (bool == true) {a3.push(a1[i]);}
  }
  return a3;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
