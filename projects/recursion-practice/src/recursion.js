// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //multiply a number by one less than itself in each iteration
  //base case is when n reaches 1
  if (n === 0){
    return 1;
  }
  
  if (n < 0){
    return null;
  }
  
  return n * factorial(n -1);
  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  //add array until there is no array length

  if(array.length === 0){
    return 0;
  }
  
   return array[0] + sum(array.slice(1));
  
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  //checks if number is even without using modulo
  //so number - 2 until 0
  //base case n === 0 return true, if n < 0 false
  //has to work on negatives 
  
  if(n < 0){
    //change negative to positive
    return isEven(-n);
  }else if(n === 0){
    return true;
  }else if(n === 1){
    return false;
  }else{
    return isEven(n -2);
  }
  
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  //add all numbers below given integer
  //can't add given integer
  if(n < 0){
    return n + 1 + sumBelow(n + 1);
  }
  
  if(n === 0){
    return 0;
  }
  
  return n -1 + sumBelow(n -1);
  
  
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
function range(x,y){
    if(x === y){
    return [];
    }else if(y > x && y-x === 2){
    return [x+1];
    }else if(y < x && x - y === 2){
      return [y + 1];
    }else if(y-x === 1){
      return [];
    }else if(y < x){
     var results = range(x, y + 1);
     results.push(y + 1);
     return results;
    }else{
      results = range(x, y - 1);
     results.push(y - 1);
     return results;
    }
}


// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  
  if(exp === 0){
    return 1;
  }else if (exp === 1){
    return base;
  }else if(exp < 0){
    return 1 / exponent(base, -exp);
  }
  
  return base * exponent(base, exp - 1);
  
  
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
    var result = n / 2;
    
    if(n === 1 || n === 2){
      return true;
    }else if (result < 2) {
        return false;
    } else if (result === 2) {
        return true;
    } else {
        return powerOfTwo(result);
    }
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  //add last letter to string container
  //remove the last letter on every run with pop
  if (string.length === 0) {
        return "";
    }

    return string[string.length - 1] + reverse(string.substring(0, string.length - 1));
};


// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  //reads the same backward and forwards
  //compare first and last letters on each recursion
  //base case length = 1 or length = 2 and both equal
  
  if(string.length === 1 || string.length === 2 && string[0].toLowerCase() === string[string.length -1].toLowerCase()){
    return true;
  }
  
  if(string[0] !== ' ' && string[string.length -1] === ' '){
    return palindrome(string.slice(0, -1));
  }else if(string[0] === ' ' && string[string.length -1] !== ' '){
    return palindrome(string.slice(1));
  }
  
  if(string[0].toLowerCase() !== string[string.length -1].toLowerCase()){
    return false;
  }
  
  //slice to remove first and last letters, return from [1] to [length -1]
  return palindrome(string.slice(1, -1));
  
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  
  if(y === 0 || x === 0){
    return 0;
  }else if(x === 1){
    return y;
  }else if(y === 1){
    return x;
  }else if(x > 0 && y > 0){
    return x + multiply(x, y -1);
  }else if(x === -1){
    return -y;
  }else if(y === -1){
    return -x;
  }else if(x < 0 && y > 0){
    return x + multiply(x, y -1);
  }else if(x > 0 && y < 0){
    return -x + multiply(x, y + 1);
  }else if(x < 0 && y < 0){
    return -x + multiply(-x, -y - 1);
  }
  
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  //compare two strings 
  //compare the first character of both in conditional
  //if true return the function with parampeters .slice(1)
  //break when both strings are empty, true, or !==
  
  if(str1 === '' && str2 === ''){
    return true;
  }else if(str1[0] === str2[0]){
    return compareStr(str1.slice(1), str2.slice(1));
  }else{
    return false;
  }
  
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  //accepts a string and creates array with index of string's lettters
  //push string[0] into empty array until string = ''
  
  let arr = [];
  
  if(str.length === 0){
    return arr;
  }else{
    arr.push(str[0]);
    return arr.concat(createArray(str.slice(1)));
  }
  
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  let arr = [];
  
  if(array.length === 0){
    return arr;
  }else{
    arr.push(array[array.length -1]);
    array.pop();
    return arr.concat(reverseArr(array));
  }
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
 let array = [];
 if(length === 0) {
     return array;
 }
 array.push(value);
 return array.concat(buildList(value, length -1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
   if(array.length === 0) {
       return 0;
  }
   return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
 if(array.length === 1) {
     return callback(array);
 }
   return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
 // if n is a negative intergar return null
   if(n < 0) {
       return null;
       // if n = 1 return 1
   } else if(n === 1) {
        return 1;
    }
    //
     return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
    let arr = [];
  
  if(input.length === 0){
    return arr;
  }else{
    arr.push(input[0].toUpperCase());
    return arr.concat(capitalizeWords(input.slice(1)));
  }
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
    let arr = [];
  
  if(array.length === 0){
    return arr;
  }else{
    arr.push(array[0][0].toUpperCase() + array[0].slice(1));
    return arr.concat(capitalizeFirst(array.slice(1)));
  }
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj = {}) {
 if (str.length === 0){
   return obj;
 }
if (obj[str[0]] === undefined) {
   obj[str[0]] = 1;
 }else {
   obj[str[0]] += 1;
 }
return letterTally(str.slice(1), obj);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list,) {
 //return the array when the length is 0
 if (list.length === 0) {
   return [];
 //if value is not already in array, push into the new array
 } else if (list[0] !== list[1]) {
   //return the call by remving the value previously checked for
   return[(list[0])].concat(compress(list.slice(1)));
 } else {
   return compress(list.slice(1));
 }
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
   let arr = [];
  //slice array until it is empty
  //push the digits into container
  if(array.length === 0){
    return arr;
  }else if (array[0] === 0 && array[1] === 0){
    //push nothing into container move to next
    return arr.concat(minimizeZeroes(array.slice(1)));
  }else{
    arr.push(array[0]);
    return arr.concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
   if (array.length === 0) { return array; }
   if(array[0] < 0) { array[0] = -array[0]; }
   if(array[1] > 0) { array[1] = -array[1]; }
   return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
 let answer = '';
 
  if(str.length === 0){
    return answer;
  }else if(str[0] === '1'){
    answer += 'one';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '2'){
   answer += 'two';
    return answer.concat(numToText(str.slice(1))); 
  }else if(str[0] === '3'){
    answer += 'three';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '4'){
    answer += 'four';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '5'){
    answer += 'five';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '6'){
    answer += 'six';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '7'){
    answer += 'seven';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '8'){
    answer += 'eight';
    return answer.concat(numToText(str.slice(1)));
  }else if(str[0] === '9'){
    answer += 'nine';
    return answer.concat(numToText(str.slice(1)));
  }else{
    answer += str[0];
    return answer.concat(numToText(str.slice(1)));
  }
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
