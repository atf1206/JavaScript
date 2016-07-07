// Setup
var testString = "Ada Lovelace and Charles Babbage designed the first computer and the software that would have run on it.";

var expression = /and/gi;

// This code counts the matches of expression in testString
var andCount = testString.match(expression).length;