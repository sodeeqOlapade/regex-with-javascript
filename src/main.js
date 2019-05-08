//adds 'hasVowels' to String prototypes
String.prototype.hasVowels = function() {
  var regExp = /[aeiou]/g; //regExp pattern to match vowels
  return regExp.test(this); //returns the result of invoking test method on regExp and passing target string as pararmeter to test
};

//adds 'isQuestion' to Stirng prototypes
String.prototype.isQuestion = function() {
  var regExp = /[\w\s]+\?$/; //regular expression pattern to match '?' at the end of a string
  return regExp.test(this); //returns the result of invoking test method on regExp and passing target string as pararmeter to test
};
module.exports = { String };

