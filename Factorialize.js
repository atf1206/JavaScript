function factorialize(num) {
  var total = 1;
  for (num; num>0; num--){
    total *= num;
  }
  return total;
}

factorialize(5);
