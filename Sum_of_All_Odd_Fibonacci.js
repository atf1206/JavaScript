function sumFibs(num) {
  var fib_array = [1, 1];
  var current = 1;
  while (current <= num) {
    current = fib_array[fib_array.length-2] + fib_array[fib_array.length-1];
    fib_array.push(current);
  }
  var total = 0;
  for (var i = 0; i < fib_array.length-1; i++) {
    if (fib_array[i] % 2 != 0) {
      total += fib_array[i];
    }
  }
  console.log(fib_array, total);
  return total;
}

sumFibs(4);
