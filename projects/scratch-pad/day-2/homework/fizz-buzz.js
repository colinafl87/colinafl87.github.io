// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //

//function prints the numbers
//for multiples of 3 it prints 'Fizz' instead of the number
//for multiples of 5 it prints 'Buzz' instead of the number
//for multiples of both 3 and 5 it prints 'FizzBuzz' instead of the number
//use if statement and % === 0
//there is no given parameter, so the function has to loop through the numbers alone
//use for loop to go through the numbers

for(var i = 1; i < 101; i++){
    if(i % 15 === 0){
        console.log('FizzBuzz');
    }else if (i % 3 === 0){
        console.log('Fizz');
    }else if (i % 5 === 0){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}

    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}