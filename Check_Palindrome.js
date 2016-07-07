function palindrome(str) {

  
  str = str.replace(/[^\w]|_/g, "").toLowerCase();
  
  if (str == str.split("").reverse().join("")){
      return true;    
  } else {
      return false;
  }
}

palindrome("eye");
