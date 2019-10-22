/* 
 * STRING MANIPULATION:
 * 
 * Strings can be changed and manipulated similar to arrays. 
 * This can be done with operators or methods.
 */ 

 // 1) With operators //
 /* Strings can be concatinated with the + and = signs.
  * Their characters can be accessed using bracket notation.
  */
 var newString = "this" + " is" + " a" + " new" + " string";
 console.log(newString); //prints 'this is a new string'
 console.log(newString[1]); // prints 'h'
 console.log(newString[newString.length -1]); // prints 'g'
 
 //2) With string methods //
 /* 
  * There are numerous methods to apply to strings for manipulation.
  */
 
 /*
  * .indexOf can filter the string for the index of a certain substring. 
  * If the substring isn't in the string, the return will be -1.
  */
 
 newString.indexOf('a'); //this returns 8
 newString.indexOf('thing'); //this returns -1
 
 /*
  * Similarly .lastIndexOf returns the index the substring last appears.
  */
 
 newString.lastIndexOf('is') //returns 5 istead of 2 which is its index in 'this'
 
 /*
  * .toUpperCase and .toLowerCase change the case the string appears in.
  */
 
 newString.toUpperCase(); //returns 'THIS IS A NEW STRING'
 newString.toLowerCase(); //returns 'this is a new string'
 
 /*
  * .charAt() will separate the character at the given index from the rest of the string.
  * This allows specific characters to be manipulated alone.
  */
 
 newString.charAt(0).toUpperCase(); //returns 'T'
 
 /*
  * Parts of the string can also be extracted with .slice and .replace.
  * The syntax of .slice(startIndex, endIndex).
  * Or .slice(startIndex) which extracts the substring to the end of the string.
  */
 
 newString.slice(0, 4); //returns 'this'
 newString.slice(4); //returns ' is a new string'
 
 /* 
  * .replace replaces one part of a string with another string
  */
 
 newString.replace('new', 'newer'); //returns 'this is a newer string'