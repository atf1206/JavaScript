
// Setup
var testString = "How many spaces are there in this sentence?";

var expression = /\s+/g;  // Change this line

// This code counts the matches of expression in testString
var spaceCount = testString.match(expression).length;
