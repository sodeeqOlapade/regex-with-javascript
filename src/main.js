//adds 'hasVowels' to String prototype
String.prototype.hasVowels = function() {
  var regExp = /[aeiou]/g; //regExp pattern to match vowels
  return regExp.test(this); //returns the result of invoking test method on regExp and passing target String(this) as pararmeter to test
};

//adds 'isQuestion' to Stirng prototype
String.prototype.isQuestion = function() {
  var regExp = /[\w\s]+\?$/; //regular expression pattern to match '?' at the end of a string
  return regExp.test(this); //returns the result of invoking test method on regExp and passing target String(this) as pararmeter to test
};

//adds 'isDigit' to String prototype
String.prototype.isDigit = function() {
  var regExp = /^\d$/; //regular expression to match a single digit
  return regExp.test(this); //returns the result of invoking test method on regExp and passing target String(this) as pararmeter to test
};

//adds 'numberWords' to String prototype
String.prototype.numberWords = function() {
  var regExp = /\d/g, //regular expression pattern to match digits
    matches = this.match(regExp), //array of matches from invoking match method on target string
    numbers = {
      //number object stores the text equivalent of all digits from 0-9
      "0": "zero",
      "1": "one",
      "2": "two",
      "3": "three",
      "4": "four",
      "5": "five",
      "6": "six",
      "7": "seven",
      "8": "eight",
      "9": "nine"
    },
    output = ""; //empty string output that will be mutated by for loop to generate final output

  for (var i = 0; i < matches.length; i++) {
    var currentNumberText = numbers[matches[i]]; //gets text equivalent of the current number the loop is on
    output += currentNumberText + " "; // concatenates currentNumberText and space to output
  }
  return output; //returns output
};

//adds words methods to String prototype
String.prototype.words = function() {
  var regExp = /\b[\w]+\b/g; //regular expression pattern that matches words in a sentence
  return this.match(regExp); //returns the result of invoking the match method on target string(this) then passing regExp as argument
};

/*
adds word methods to String prototype and it's implemented using
the custom words method added above
*/
String.prototype.wordCount = function() {
  return this.words().length; // returns the number of words in the target string by finding the length of array returned by words custom function
};

module.exports = { String };
