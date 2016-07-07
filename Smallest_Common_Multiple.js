function smallestCommons(arrayRange) {
    var newArr = [];
    if (arrayRange[0] > arrayRange[1]) {
      arrayRange.reverse();
    }
    for (var j = arrayRange[0]; j <= arrayRange[1]; j++){
        newArr.push(j);
    }

    var a = Math.abs(newArr[0]);
    for (var i = 1; i < newArr.length; i++) {
        var b = Math.abs(newArr[i]),
            c = a;

        while (a && b) {
            a > b ? a %= b : b %= a;
        }
      
        a = Math.abs(c * newArr[i] / (a + b));
    }
   return a;
}

smallestCommons([1,5]);
