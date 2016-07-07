
function orbitalPeriod(arr) {
  var avgAltvalue;
  var twoPi = 6.283185;
  var GM = 398600.4418;
  var GM05 = 631.3481;
  var earthRadius = 6367.4447;
  var superArray = [];
  
  for (var j = 0; j < arr.length; j++) {
    var what = arr[j];
    for (var i in what) {
      if (i == "avgAlt") {
        avgAltvalue = what[i];
        delete what[i];
      }
    }
    
  var avgAlt15 = Math.pow(avgAltvalue + earthRadius, 1.5);
  what["orbitalPeriod"] = Math.round(twoPi * avgAlt15 / GM05);
  console.log(what, what["orbitalPeriod"]);
  superArray.push(what);

  }
  console.log(superArray);
  return superArray;
  
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
