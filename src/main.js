//add 'hasVowels' to String prototypes
String.prototype.hasVowels = function() {
    var regExp = /[aeiou]/g;
    
    return regExp.test(this);
};

module.exports = { String };
