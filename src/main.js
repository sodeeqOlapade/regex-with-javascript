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
      '0': 'zero',
      '1': 'one',
      '2': 'two',
      '3': 'three',
      '4': 'four',
      '5': 'five',
      '6': 'six',
      '7': 'seven',
      '8': 'eight',
      '9': 'nine'
    },
    output = ''; //empty string output that will be mutated by for loop to generate final output

  for (var index = 0; index < matches.length; index++) {
    var currentNumberText = numbers[matches[index]]; //gets text equivalent of the current number the loop is on
    output += currentNumberText + ' '; // concatenates currentNumberText and space to output
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
  var output = ''; //empty string output that will be mutated by for loop to generate final output

  /**
   * The for loop below uses ternary operator on each iteration
   * to determine if a character is uppercase or lowercase using the unicode
   * if it's lowercase, it's convertd to uppercase and concatenated with output
   * if it's uppercase, it's just concatenated directly
   */

  for (var index = 0; index < this.length; index++) {
    /[a-z]/.test(this[index])
      ? (output += String.fromCharCode(this.charCodeAt(index) - 32))
      : (output += this[index]);
  }

  return output; //returns final output
};

String.prototype.toLower = function() {
  var output = ''; //empty string output that will be mutated by for loop to generate final output

  /**
   * The for loop below uses ternary operator on each iteration
   * to determine if a character is uppercase or lowercase using the unicode
   * if it's uppercase, it's convertd to lowrcase and concatenated with output
   * if it's lowrcase, it's just concatenated directly
   */

  for (var index = 0; index < this.length; index++) {
    /[A-Z]/.test(this[index])
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

//adds alternatingCase to String prototype
String.prototype.alternatingCase = function() {
  var output = ''; // output variable
  /**
   * the for loop below changes the character to lower or upper case
   * depending on which index it's residing in by calling the toLower or
   * toUpper methods defined above.
   */
  for (var index = 0; index < this.length; index++) {
    if (index % 2 === 0) {
      output += this[index].toLower();
    } else {
      output += this[index].toUpper();
    }
  }
  return output; // returns the final output
};

//adds inverseCase to String prototype
String.prototype.inverseCase = function() {
  var output = ''; //defines output variable
  for (var index = 0; index < this.length; index++) {
    if (/[a-z]/.test(this[index])) {
      //checks if current character is in lowercase
      var characterToUppercase = this[index].toUpper(); //converts current character to uppercase and saves it
      output += characterToUppercase; // concatenates converted character to output
    }
    if (/[A-Z]/.test(this[index])) {
      //checks if current character is in uppercase
      var characterToLowercase = this[index].toLower(); //converts current character to lowercase and saves it
      output += characterToLowercase; // concatenates converted character to output
    }
    if (/\./.test(this[index])) {
      // checks if the current character is a dot
      output += this[index]; //adds the dot character to the output
    }
  }
  return output; // returns the final output
};

//adds fromCurrency to String prototype
String.prototype.fromCurrency = function() {
  var regExp = /,/g; //defines regular expresiion to match comma

  return this.replace(regExp, ''); // uses the replace method to replace all commas with empty string in the targetted string
};

String.prototype.toCurrency = function() {
  var regExp = /\d+(?=\.)/, //regular expression to match set of digits before dot
    regExp1 = /(?<=\.)\d+/, //regular expression to match set of digits after dot
    digitsBeforeDot = this.match(regExp)[0], //matches and saves digit before the dot
    digitsAfterDot = this.match(regExp1)[0], //matches and saves digit after the dot
    temporaryCharactersContainer = [], //an array for characters and inserted commas
    counter = 0, // couter variable to track when and where a comma shuld be pushed into the temporaryCharacterContainer
    output;

  if (digitsBeforeDot.length <= 3) {
    /**
     * if characters before dot is lesser than or equal to 3,
     * it returns it, no need for comma character
     */
    return digitsBeforeDot + '.' + digitsAfterDot;
  }

  for (let index = digitsBeforeDot.length - 1; 0 <= index; index--) {
    counter++; //increases counter variable at each iteration
    temporaryCharactersContainer.push(digitsBeforeDot[index]); //pushes the next character into the temporaryCharacterContainer
    if (counter % 3 === 0) {
      //checks if counter equals 3 or it's multiple
      temporaryCharactersContainer.push(','); // inserts a comma before the next character
    }
  }

  /**
   generates the final output by
   (1) reversing the temporaryCharactersContainer to change the order 
    of appearance of characters
   (2) joins the reversed contents together with empty string as seperator
   (3) concatenates the dot character to the string
   (4) then adds the digitsAfterDot to the string
   */

  output =
    temporaryCharactersContainer.reverse().join('') + '.' + digitsAfterDot;
  return output; //returns the final string
};

module.exports = { String };
