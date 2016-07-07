
function updateInventory(arr1, arr2) {

  var myFlag = false;
  for (var i = 0; i < arr2.length; i++) {
    myFlag = false;
    for (var j = 0; j < arr1.length; j++) {
      
      if (arr2[i][1] == arr1[j][1]) {
        myFlag = true;
        arr1[j][0] += arr2[i][0];
      }
    }
    if (myFlag === false) {
      arr1.push(arr2[i]);
    }
  } 
  arr1.sort(function(a, b) { 
    return a[1] > b[1] ? 1 : -1;
  });
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
