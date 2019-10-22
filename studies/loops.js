/* 
 * LOOPS:
 * 
 * These allow us to loop over blocks of code multiple times
 * This is very useful on collections such as arrays and objects
 * Loops iterate over the collections' values, working each one by one 
 */

// For-Loop //

/*
 * The for-loop iterates over arrays.
 * It is configured:for( declaring and initializing the index; setting the ending condition;
 * and how the index will incriment each loop).
 */

var myArr = [1, 2, 3];
 
 for (var i = 0; i <= myArr.length -1; i++){
     console.log(myArr[i]);
 }
 //this will print 1 2 3
 
 for (var j = myArr.length -1; j >= 0; j--){
     console.log(myArr[j]);
 }
 //this will print the array values backwards 3 2 1
 
// For In Loops //

/*
 * These loops allow looping over the values of an object
 */

var myObj = {name: 'Bob', last: 'Smith', age: 41};

for(var key in myObj){
    console.log(myObj[key]); //use bracket notation as there is no key named 'key'
}
//this prints 'Bob' 'Smith' 41

// While Loops //

/*
 * This uses the keyword while and paranthesis containing 
 * the condition the loop will execute under.
 * Be wary of creating an infinite loop with these and create the variable 
 * applied to the loop outside of its code block.
 */

var count = 0;

while(count <= 10){
    console.log(count);
    count++;
}

//this prints numbers 0 through 10
