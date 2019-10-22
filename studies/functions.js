/*
 * FUNCTIONS:
 * 
 * 1) The two phases to using functions: First we must ___? 
 * 
 * A function must be defined, 
 * either in:
 * 
 *  FUNCTION DECLARATION - requiring the function keyword, followed by its name
 * paranthesis for paramenters or empty, and function code
 * The definition is hoisted, allowing it to be used before definition
 */

/*eslint-disable semi */
func(); //prints string below

function func(){
    console.log("I'm a function, look at me go!");
}

 /* or
 * 
 *  FUNCTION EXPRESSION - in which a variable is assigned a named or anonymous function
 * These function definition aren't hoisted
 */ 

//myFunc(); returns type error if entered here in code

var myFunc = function(){
    console.log("I'm a function too");
};

myFunc(); //prints the string above

 /* Next we can execute (or two other words for executing a function?) a function by?
 * 
 * You can call a function or invoke a function by name with arguments if possible
 */

myFunc(); //this is calling a function
func(); //there are no arguments for these invocations

function lessByFive(numbers){
    return numbers - 5;
}

lessByFive(10); //function called by name with argument 10 returns 5

 /* 2) What’s the difference between a function’s parameters and arguments PASSED to a function?
 *
 * The function parameters are the suggested arguments to input and return the result of
 */

function buildSentence(noun, verb, adverb){// parameters noun, verb, adverb
    return "My " + noun + " " + verb + " " + adverb + ".";
}

buildSentence("dog", "barks", "loud");// arguments input for logical return 'My dog barked loud.'

 /* 3) What’s the syntax for a NAMED function?
 *
 * function name(parameters){
 *   statements
 *   }
 *
 * 4) How do we assign a function to a variable?
 *
 * let name = function(parameters){
 *              statements
 *              }
 *
 * 5) Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. 
 *    How do we specify inputs, and how do we specify outputs?
 *
 *    If we want to specify inputs we should define a function with parameters and code that
 *    require certain arguments. In that way, we would receive specific outputs
 */

    function minus(numberOne, numberTwo){
        return numberOne - numberTwo;
    }
    
    minus(3, 8); //this returns -5, inputting a string returns NaN
    buildSentence(5, 6, 7); //this will still build a string result 'My 5 6 7.' since its code calls for it

 /* 6) Scope: Functions can see and modify variables in parent or global scopes. 
 *      The inverse is NOT true.
 *
 *  Functions can reach out but not into nested (child) functions.
 *
 *AND
 *
 * 7) Closures: Functions form closures around the data they house. 
 *    If an object returned from the Function and is held in memory somewhere (referenced), 
 *    that closure stays ALIVE, and data can continue to exist in these closures!
 */

/* This is function expression passwordSecurity. It requires arguments of
 * a user name and password to be input
 */

console.log(passwordSecurity("Aaron", "password")());

/*the first paranthesis is filled with arguments, the second are empty since there are no parameters
 * since the second argument is incorrect this will print 'nope, you don't belong'
 * There is no revealing from outside the child function the correct user name or password
 */

 function passwordSecurity(user, password){
  
  return function secretPassword(){
    let secretMembers = ["Aaron", "Aalana", "Aaden"];
    let pass = "aaName";
    console.log(secretMembers); //within the code these variables will print via console.log
    console.log(pass);
    if(password === pass && secretMembers.includes(user)){
        return("You may enter");
    }
    return "nope, you don't belong";
  };
}

//console.log(secretMembers); console.log outside the closure of the child scope will get errors
//console.log(pass); these both would result in errors 


 
 
 