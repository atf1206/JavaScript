
// Setup
var testString = "There are 3 cats but 4 dogs.";

var expression = /\d+/g;  // Change this line

// This code counts the matches of expression in testString
var digitCount = testString.match(expression).length;
