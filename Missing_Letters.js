function fearNotLetter(str) {
  var start = str.charCodeAt(0);
  for (var i = 0; i < str.length; i++) {
    console.log(str.charCodeAt(i), start + i);
    if (str.charCodeAt(i) != start + i) {
      return String.fromCharCode(start + i);
    }
  }
  return undefined;
}

fearNotLetter("abce");
