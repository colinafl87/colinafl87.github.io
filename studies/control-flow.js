/*
* CONTROL FLOW:
*
* Using conditional statements, we can control the flow of coding.
* Depending the result of a conditional statement, code can continue to run
* or return a result and end. If-else if-else chains or switch statements are used
* to to do this. The former are based on Boolean results, the later are case specific.
*/

// If //

/*
 * If marks the beginning of a condional code block.
 * Syntax: keyword if, parenthesis containing the condition to be tested, 
 * curly brackets of code to execute if the condition is true
 */

// Else-if //

/*
 *This is chained on if there are more conditions which can be taken into account
 * and tested for 
 */

// Else //

/*
 * Acts as default when no other condition is true
 */

var myPet = {noise:'hiss',
             skin: 'furry'
             };
             
function animalType(animal){
    if(animal.noise === 'woof'){
        console.log('dog'); //if true console.log 'dog' and end code block
    }else if (animal.noise === 'meow'){
        console.log('cat'); //if true console.log 'cat' and end code block
    }else if (animal.noise === 'hiss' && animal.skin === 'scaley'){
        console.log('snake'); // if both conditions true log 'snake' and end code block
    }else if (animal.noise === 'hiss' && animal.skin === 'furry'){
        console.log('cat'); //if both true log 'cat' and end code block
    }else{
        console.log('unknown'); //if all else above false default and end
    }
}

animalType(myPet); //prints 'cat'


// Switch //

/*
 * This works for specific input cases. 
 * Put break at the end of each case to end the code block when the case is met.
 * If the case is not found the switch ends with default at the end of the code block.
 */

var dogBreed = 'lab';

switch(dogBreed){
    case 'daschund':
    console.log('shaped like a hotdog');
    break;
    case 'great dane':
    console.log('the horses of dogs');
    break;
    case 'pit bull':
    console.log('misunderstood sweeties');
    break;
    case 'lab':
    console.log('lovable goofs'); //this is printed and the switch code block ends here
    break;
    case 'pug':
    console.log('eyes like marbles');
    break;
    default:
    console.log('many many more lovable doggos');
}

