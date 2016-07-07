
function pairwise(arr, arg) {
  var usedUpArray = [];
  var myFlag = false;
  
  for (var i = 1; i < arr.length; i++) {
    
    for (var j = 0; j < i; j++) {
      if (arr[i] + arr[j] == arg) {
        myFlag = false;
        for (var k = 0; k < usedUpArray.length; k++) {
          if (usedUpArray[k] == i || usedUpArray[k] == j) {
            myFlag = true;
          }
        }
        if (myFlag === false) {
          usedUpArray.push(i);
          usedUpArray.push(j);
        }
      }
    }
  }
  var counter = 0;
  for (var l = 0; l < usedUpArray.length; l++) {
    counter += usedUpArray[l];
  }
 
  return counter;
}

pairwise([1,4,2,3,0,5], 7);