function chunkArrayInGroups(arr, size) {
  new_arr = [];
  for (i = 0; i < arr.length; i += size){
    new_arr.push(arr.slice(i, i + size)); 
  }
  console.log(new_arr);
  return new_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
