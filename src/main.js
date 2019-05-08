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

  for (var index = 0; index < matches.length; index++) {
    var currentNumberText = numbers[matches[index]]; //gets text equivalent of the current number the loop is on
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

String.prototype.toUpper = function() {
  var output = ""; //empty string output that will be mutated by for loop to generate final output

  /**
   * The for loop below uses ternary operator on each iteration
   * to determine if a character is uppercase or lowercase using the unicode
   * if it's lowercase, it's convertd to uppercase and concatenated with output
   * if it's uppercase, it's just concatenated directly
   */

  for (var index = 0; index < this.length; index++) {
    this.charCodeAt(index) >= 97
      ? (output += String.fromCharCode(this.charCodeAt(index) - 32))
      : (output += this[index]);
  }

  return output; //retturs final output
};

String.prototype.toLower = function() {
  var output = ""; //empty string output that will be mutated by for loop to generate final output

  /**
   * The for loop below uses ternary operator on each iteration
   * to determine if a character is uppercase or lowercase using the unicode
   * if it's uppercase, it's convertd to lowrcase and concatenated with output
   * if it's lowrcase, it's just concatenated directly
   */

  for (var index = 0; index < this.length; index++) {
    this.charCodeAt(index) <= 90
      ? (output += String.fromCharCode(this.charCodeAt(index) + 32))
      : (output += this[index]);
  }

  return output; //retturs final output
};

/*
adds ucFirst methods to String prototype and it's implemented using
the custom toUpper method added above
*/
String.prototype.ucFirst = function() {
  var firstCharacter = this[0].toUpper(); //converts string's first character to uppercase
  return firstCharacter + this.slice(1); // concatenates the uppercase first character to the rest of the string
};

String.prototype.alternatingCase = function() {
  var output = "";
  for (var index = 0; index < this.length; index++) {
    index % 2 === 0
      ? (output += this[index].toLower())
      : (output += this[index].toUpper());
  }
  return output;
};

// console.log("stipend".alternatingCase());
module.exports = { String };
