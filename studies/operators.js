/*
 * OPERATORS:
 * 
 * Operators act on data. 
 * They are classed by how many operands(the values the operators act on) are needed.
 * Unary operators only need one operand to act on.
 * Binary operators require two operands to act on. Ternary require three operands.
 *
 */ 

 // 1) Assignment operators //
 /* 
  * These assign value to operands and include =, +=, -=, *=, /=
  */
 
 var z = 6;
 console.log(z); //prints 6 the value assigned to z
 
 // 2) Arithmetic operators //
 
 /*
  * These include simple addition, subtraction, division, and multiplication signs
  * (+, -, /, *)
  * 
  * They also include incrementor ++ and decrimentor -- which add and subtract one from the value
  * Placed before the value will increment or decrement immediately
  * Placed behind the value will increment or decrement after it is passed through an operation
  *
  *  Similarly, *=, /=, +=, -= will change the value of the item, they are also assignment operators
  * z += 2 is the same as z = z + 2, etc
  * 
  * Modulo % returns the remainder of a divisional operation
  */
 
 console.log(1 + 0) //prints 1
 console.log(3 % 3) //prints 0
 
 var z = 6;
 console.log(z += 3) //prints 9
 console.log(z) //prints 9
 console.log(++z) //prints 10
 
 
 // 3) Comparison operators //
 /*
 * These compare two operands and evaluate to true or false
 * They include symbols such as: <, >, <=, >=
 */

console.log(1 > 2) //prints false

/* Non-strict vs strict comparison operators
*It is recommended to use strict comparison operators such as ===, >==, <==, !==
*These compare value and data type
*Non strict only compare value and include ==, !=
*/

console.log(2 === 2) //prints true
console.log("2" === 2) //prints false
console.log("2" == 2) //prints true

 // 4) Logical operators //
  
  /* The AND operator && requires both conditions to be true in a conditional statement
  * The OR operator || requires on or the other condition to be true in a conditional
  * The bang operator ! flips the truthiness of a value
  * The double bang !! coerces a value to Boolean, if falsey (0, null, undefined) it stays
  * false. Otherwise it returns true
  */
 console.log(1 > 2 && 2 > 0);//prints false since both are not true
 console.log(1 > 2 || 2 > 0); //prints true since one is true
 console.log(1 !== 2 && 2 > 0); //prints true as 1 doesn't equal 2 and 2 is greater than 0
 
  
 // 5) Unary operators (!, typeOf, -) //
 /*
  * These are operators requiring only one operand.
  * delete and typeof are examples of these operators
  */
 var numbers = [1, 2, 3];
 delete numbers[2]; // deletes 3 from array
 typeof numbers; //returns 'object'
 
 // 6) Ternary operator (a ? b : c) //
 /*
  * These are shortcuts for conditional if statements.
  * They require 3 operands.
  * The syntax is:
  * condition ? result if truthy : result if falsy;
  */
 var age = 18;
 var draft = (age > 17) ? 'enlisted' : 'wait your turn';
 console.log(draft); // print 'enlisted'