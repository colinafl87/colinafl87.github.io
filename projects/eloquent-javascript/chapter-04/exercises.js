////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*eslint-disable no-param-reassign */
function range(start, end, step) {
//takes arguments start and end and optional third argument step

//returns all numbers from start up to and including end
//basically loop through the start and end and create an array

let rangeArray = [];


//if no step given 1 is used
if(start < end && step === undefined){
    for(let i = start; i <= end; i++){
        rangeArray.push(i);
    }
    //if no step given 1 is used
}else if(start > end && step === undefined){
    for(let j = start; j >= end; j--){
        rangeArray.push(j);
    }
    //have to account for negative steps
    
/* it seems like it would be better to reassign the step to undefined if negative
    to complete this the way the book would like but that doesnt work on spec runner
if(step < 0){
    step = undefined;
}*/

}else if(start > end && step > 0) {
    for(let k = start; k >= end; k -= step){
        rangeArray.push(k);
    }
}else if(start < end && step > 0){
    for(let l = start; l <= end; l += step){
        rangeArray.push(l);
    }
}
 return rangeArray;

}

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(integerArray) {
    //evaluate argument array of integers to a sum value
    //including empty array to 0
    //loop through array elements adding each to the last
    //start with counter at 0
    
    let counter = 0;
    for(let i = 0; i <= integerArray.length -1; i++){
        counter += integerArray[i];
    }
    return counter;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
    //takes an array and returns new array in reverse
    
    let reversed = [];
    //loop backwards through array and push into new array
    for(let i = array.length -1; i >= 0; i--){
        reversed.push(array[i]);
    }
    return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
//reverse and returns the same array
//does not use reverse and does not return a new array
//push or unshift elements into the same array stopping at the middle
//determine the middle with array.length -1 /2 (use Math.floor)

  //iterate thru half of original array
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let original = array[i]; //original i value
    array[i] = array[array.length - 1 - i]; //set i value to its "opposite" from end of array
    array[array.length - 1 - i] = original; //set "opposite" to be original i value
  }
  return array;
}




////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
//builds array into object list
//create container list

let list = null; //list ends null

    for (let i = array.length-1; i>=0; i--)  
        list = {value: array[i], rest:list}; 
    return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
//function produces array from list
 let array = [];
  while( list != null)
  {
    array.push(list.value);
    list = list.rest;
  }
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(elem, list) {
  let newList = listToArray(list);
  newList.unshift(elem);
    newList = arrayToList(newList);
  return newList;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n === 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(valueOne, valueTwo) {
/*takes two values and returns true only if they are the same value 
* or are objects with the same properties, 
* where the values of the properties are equal when compared
* with a recursive call to deepEqual */
if(typeof valueOne !== 'object'){ //first have to establish when to compare deeply
//if its not an object collection, comparison is easier
    return valueOne === valueTwo;
}else if(Array.isArray(valueOne) === true && Array.isArray(valueTwo) === true){
    //arrays are false positives for objects so this must be ruled out
    //if they are both arrays they can be joined and compared as strings more easily
  return valueOne.join('') === valueTwo.join('');
}else if(valueOne === null){
    // null is another false positive that must be ruled out
  return valueOne === valueTwo;
}else if (valueOne !== null || typeof valueOne === 'object' ||
    valueTwo !== null || typeof valueTwo === 'object'){
        //finally object collections can be deeply compared
    var propsInOne = 0, propsInTwo = 0;
    //these two counters will be compared
    for (var prop in valueOne){
         propsInOne += 1;}
    for (var prop in valueTwo){
        propsInTwo += 1;
        //recursion will compare the values in the objects
        if (!(prop in valueOne) || !deepEqual(valueOne[prop], valueTwo[prop])){
        return false;}
}
return propsInOne === propsInTwo;
} 
}



deepEqual(null, "null");

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
