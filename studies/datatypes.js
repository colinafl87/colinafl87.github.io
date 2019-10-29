/*
* DATATYPES:
* 
* What is the difference between primitive/simple and complex data types?
* 
* 1) Simple/Primitive values
* 
* Simple/primitive data types do not alter their original value. They have a fixed amount of size.
* Operations on simple value return new simple values.
* They cannot hold, collect, or aggregate other values. They are immutable.
* They are copied by value. When passed to another variable, their value is copied to another.
* 
* 2) Complex values 
* 
* Complex data can hold other data. They are of indefinite size. They are copied by reference.
*/

// Copy by Value //

var p = 1;
var q = p; // the value in p is copied to q

q = 9; // q can get reassigned a new value
console.log(p); //prints 1 because the reassignment of q has no effect on p

// Copy by Reference //

var objA = {letter: 'x'};
var objB = objA; // both variable reference the same object which either can influence

objB.letter = 'y';
//objB has changed the value of the letter key

console.log(objA.letter); //this prints y because the change is in the reference object

// Number //
// This is a simple datatype of numeric data 

var num = 8; 
console.log(typeof num); // prints number

// String //
// A simple data type between quotations, typically letters

var myString = 'this is a string';
console.log(typeof myString); //prints string

// Boolean //
//This is a primitive true false assignment

var bool = true;
console.log(typeof bool); //prints boolean

// Array //
// Complex datatype that can hold any number of elements, with numerous methods to modify

var arr = [1, 2, 3];
arr.push(4, 5); //method add elements to the array's end
console.log(arr);//prints [1, 2, 3, 4, 5]
console.log(Array.isArray(arr));//prints true

// Object //

/* 
 * Objects are containers of primitive and other complex datatypes
 * They are complex datatypes, organized in key:value pairs
 */

var person = {firstName: 'Bob',
              lastName: 'Jones',
              age: 50,
              children: ['Timmy', 'Billy', 'Janet']
              };


// Function //

/*
 * A function is a complex datatype. 
 * It is composed of function keyword and function body (the subprogram to be run)
 * function name and parameters are optional 
 */

function myFunc(){
    console.log('I am a function!');
};

myFunc(); //prints "I am a function!"
typeof myFunc; //returns 'function'

// undefined //

/*
 * This is a declared variable that has not been initialized
 * Simple datatype
 */

var newVar;
console.log(newVar); //prints undefined

// null //

/*
 * This is given to a variable that specifically should have no value
 * Simple datatye
 */

var nul = null;
console.log(nul); //prints null

// NaN //

/*
 * Simple datatype clasifying those values that are or not numbers
 */

console.log(isNaN('number')); //this will print true because it is a string not a number
console.log(isNaN(NaN)); //this prints true because it is not a number
console.log(isNaN(4)); //this prints false

// Infinity and -Infinity //

/*
 * These are greater or lesser than any other numeric value.
 * Anything divided by infinity is 0. 
 * Anything multiplied by infinity is infinty. The same goes for anything added to infinity
 */
console.log(Infinity ); // Infinity 
console.log(Infinity + 1 ); // Infinity 
console.log(Math.pow(10, 1000)); // Infinity 
console.log(Math.log(0) ); // -Infinity 
console.log(1 / Infinity ); // 0
console.log(Infinity * -1); // -Infinity