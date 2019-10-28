////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(numberOne, numberTwo) {
    //finds the minimum if two numbers when the first or second is smaller 
    //returns a number when they are the same
    //works on negative numbers
    
    if (numberOne > numberTwo){
        return numberTwo;
    }else if (numberOne < numberTwo){
        return numberOne;
    }else{ // in case both numbers are the same
        return numberOne;
    }
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) {
// determine if a number is even or odd
//work on negative numbers
// use recursion 

if(num >= 0 && num % 2 === 0){
    return true;
}else if (num >= 0 && num % 2 !== 0){
    return false;
}else if(num < 0){
    return isEven(num * -1) //turn negative positive and use function again
}

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, character) {
//counts the number of times a specific character is in a string
//calls for two parameters: string and character
//requires a counter variable

let counter = 0;

for(let i = 0; i < string.length; i++){
    if(string[i] === character){
        counter += 1;
    }
    
}return counter;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
// like countChars only looking for upper case B's
//requires a counter and a loop again

let counter = 0;

for(let i = 0; i <= string.length -1; i++){
    if(string[i] === 'B'){
        counter += 1;
    }
}

return counter;

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
