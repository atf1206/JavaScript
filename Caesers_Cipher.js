function rot13(str) { // LBH QVQ VG!
    new_str = "";
  	for (var i = 0; i < str.length; i++) {
		if (str[i].match(/[A-Z]/i)) {
            new_str += String.fromCharCode(((str.charCodeAt(i) - 65 + 13) % 26) + 65);
            }
        else {
          new_str += str[i];
        }
    }    
  return new_str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
