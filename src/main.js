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
  var regExp = /^\d$/;//regular expression to match a single digit
  return regExp.test(this); //returns the result of invoking test method on regExp and passing target String(this) as pararmeter to test
};


String.prototype.numberWords = function(){
    var regExp = /\d/g,
        matches = this.match(regExp),
        numbers = {
            '0':'zero',
            '1':'one',
            '2':'two',
            '3':'three',
            '4':'four',
            '5':'five',
            '6':'six',
            '7':'seven',
            '8':'eight',
            '9':'nine'
        },
        output = '';

    for(var i = 0; i < matches.length; i++){
        output += numbers[matches[i]] + ' ';
    }
    return output;
}
module.exports = { String };
