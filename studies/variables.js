/*
* VARIABLES:
*
* 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
* are named identifiers that can point to values of a particular type, like a Number, String,
* Boolean, Array, Object or another data-type.  Variables are called so because once created, we
* can CHANGE the value (and type of value) to which they point.
*
* 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
* variable. Keywords let and const can also be used to create a variable. These different keywords 
* have different effects on hoisting.
*
* 2. There are 2 phases of using variables: declaration and initialization (or assignment).
*/

// 1. declaration //
var myName;

/*
* At the declaration phase, the variable myName is undefined because we have NOT initialized
* it to anything
*/
console.log(myName); // prints => undefined

// 2. initialization or assignment //
myName = 'john';
console.log(myName); // prints => john

// 3. re-assignment //
myName = 'bob';
console.log(myName); // prints => bob

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
var myVariable = 1;
myVariable = true;
myVariable = "someString";

//var, let, const //

/*
 * Var variables are scoped to functions, scoped globally, hoisted and reassignable.
 * Let variables are block scoped and function scoped. They are reassignable.
 * Const variables are block scoped and function scoped. They are not reassignable.
 */

function oneFunction (){
    var a = 1;
    let b = 2;
    const c = 3; 
    //const variables must be assigned value immediately, cannot be undefined
}
 oneFunction(); //all  variables are not accessable, they are function scoped
 
 if (true){
     //console.log(f); const are not hoisted to the top of the code block, this will be an error
    // console.log(e); lets are hoisted to top by name only, not value, print undefined
     var d = 4;
     let e = 5;
     e = 9;
     console.log(e); //print 9, lets can be reassigned within
     const f = 6;
     console.log(f); // this will print 6
 }
 // d is not block scoped so it is available outside this code block, unlike e and f
//var can be reassigned
d = 7;
 console.log(d); //this prints 7
 

//Hoisting //

//Variable Hoisting //

/*
 * All var variable declarations, like function declarations, are hoisted to the top.
 * Variables can be declared anywhere and available anywhere in the scope,
 * before or after declaration. They have no value until it is assigned.
 * Therefore, they will be undefined until that time.
 * Unlike let and const, they will be undefined, not a reference error
 * if referenced undefined.
 */

console.log(x);//prints undefined
// console.log(y); prints reference error if entered here in code
// console.log(z); prints reference error if entered here in code   

var x = 1;
console.log(x);// prints 1
let y = 2;
console.log(y); //prints 2
const z = 3;
console.log(z); //prints 3

/* IF a variable using the var keyword is declared inside a function (function scope)
 * it will be hoisted to the top of that function.
 * If it is declared in global scope, it is hoisted in global scope.
 */
 
function something(array){
 
 console.log(i); 
 /* since i is declared with var it will be hoisted outside the for block
  * this will print undeclared NOT a reference error as it would with let or const
  * since let and const are block scoped
  */
 
for(var i = 0; i < array.length; i++){
// change this to for(let i = 0; i < array.length; i++)
  console.log(i); 
  //and this will print correctly for var and let since they can be reassigned
  //it will not work if i is a const since const's aren't reassignable
  const j = 1;
  console.log(j); //this will correctly print const j as long as the loop continues
 }
}

var array = [1, 6];

something(array);



//Function Hoisting //

/*
 * Functions can be declared anywhere and available anywhere in scope
 * before or after declaration. Since they are copied by reference
 * they are assigned their value at all times.
 */

console.log(add);//prints [Function: add]

function add(num1, num2){
    return num1 + num2;
}