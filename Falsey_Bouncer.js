function bouncer(arr) {
  var new_var = [];
  for (var i = 0; i < arr.length; i++) {
    if (Boolean(arr[i]) !== false) {
      new_var.push(arr[i]);
    }
  }
  return new_var;
}

bouncer([7, "ate", "", false, 9]);
