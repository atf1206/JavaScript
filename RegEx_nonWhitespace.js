
// Setup
var testString = "How many non-space characters are there in this sentence?";

var expression = /\S/g;  // Change this line

// This code counts the matches of expression in testString
var nonSpaceCount = testString.match(expression).length;
