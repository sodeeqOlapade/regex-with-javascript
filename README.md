# Extending String Class in Javascript 

> ### **Overview**

This project demonstrates the implementation of a few custom methods with Javascript and Regular Expression then making them available on the Javascript **_'String'_** prototype.

Find the details of each of these custom methods in the list below

**1 hasVowels (typeof Boolean):**

Returns true if the string contains vowels. This method is implemented with Regular Expression

**2 toUpper (typeof String):**

Returns the String in question but with all characters in upper cases as applicable. This method is implemented without the use of JavaScript toUpperCase internal methods.

**3 toLower (typeof String):**

Returns the String in question but with all characters in their lower cases as applicable. This method is implemented without the use of JavaScript toLowerCase internal methods.

**4 ucFirst (typeof String):**

Returns the String in question but changes the First Character to an Upper case. Make use of toUpper method above to implement this method

**5 isQuestion (typeof Boolean):**

Return true if the string is a question (ending with a question mark). This method is implemented using Regular Expression.

**6 words:**

Returns a list of the words in the string, as an Array. This method is implemented with Regular Expression.

**7 wordCount (typeof Number):**

Returns the number of words in the string. It make use of the words method above.

**8 toCurrency (typeof String):**

Returns a currency representation of the String e.g 11111.11 should be represented as 11,111.11.

**9 fromCurrency (typeof Number):**

Returns a number representation of the Currency String e.g 11,111.11 returns 11111.11

**10 inverseCase (typeof String):**

Returns each letter in the string as an inverse of its current case e.g Mr. Ben returns mR. bEN.

**11 alternatingCase (typeof String):**

Returns the letters in alternating cases. It starts with a lower case e.g Onomatopoeia returns oNoMaToPoEiA.

**12 numberWords (typeof String):**

Returns the numbers in words e.g 325 should return three two five.

**11 isDigit (typeof Boolean):**

Returns true if the string is a digit(one number) e.g 3 should return true and 34 should return false. This is implemented with Regular Expression.
