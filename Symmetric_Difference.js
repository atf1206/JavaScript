function sym(args) {
  var array1 = arguments[0];  //first array
            

  for (var i = 1; i < arguments.length; i++) {  //
    console.log("Sending arrays ", array1, "and ", arguments[i]);
    array1 = compare_2_arrays(array1, arguments[i]);

  }
  return array1;
}

function compare_2_arrays(xarray1, xarrayi) {
  var array2 = [];  
  var count = 0;
  
  for (var j = 0; j < xarray1.length; j++) {
      count = 0;
      for (var k = 0; k < xarrayi.length; k++) {
        if (xarray1[j] == xarrayi[k]) {
          count += 1;
        }
      }
    
      if (count === 0) {
        for (var o = 0; o < array2.length; o++) {
          if (xarray1[j] == array2[o]) {
            count += 1;
          }
        }
        if (count === 0) {
        array2.push(xarray1[j]);
        }
      }      
  }
  for (var l = 0; l < xarrayi.length; l++) {
      count = 0;
      for (var m = 0; m < xarray1.length; m++) {
        if (xarrayi[l] == xarray1[m]) {
          count += 1;
        }
      }
      if (count === 0) {
        for (var p = 0; p < array2.length; p++) {
          if (xarrayi[l] == array2[p]) {
            count += 1;
          }
        }
        if (count === 0) {
          array2.push(xarrayi[l]);  
        }
      }
  }
  return array2;
}
      
sym([1, 2, 3], [5, 2, 1, 4]);
