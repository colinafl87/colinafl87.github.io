/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named animal and assign it to an empty object

var animal = {};

//Using dot notation give animal a property named species with a value of any animal species.
// Using bracket notation give animal a property called name with a value of your animal`s name.
//Using either notation, give animal a property called noises with a value of empty array.
// Print your animal Object to the console by adding, console.log(animal);,
// Save your work (command-s || ctrl-s), switch back to the browser tab with your website running, and refresh your page to see what animal looks like

animal.species = 'Reptile';
animal['name'] = 'gigi';
animal.noises = [];
console.log(animal);



//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a variable named noises and assign it to an empty array.
 Using bracket notation give noises it's first element. A string representing a sound your animal might make.
 Using an array function add another noise to the end of noises.
 Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
 Look through the functions until you find the one that will place an element at the begining of the array.
 Add an element to noises using this function.
 Using bracket syntax again, add another element to the end of noises. Make sure that the way you do this step would work no matter how many elements noises had. In other words, don't hard code the position of the new element.
 console.log the length of noises
 console.log the last element in noises again without hard coding the index.
 console.log the whole array.*/

var noises = [];
noises[0] = 'hiss';
//place element at the end using array function
noises.push('grr');
//place element at the beginning using array function
noises.unshift('roar');
//use bracket syntax add element at the end and works no matter how many elements there are
noises[noises.length] = 'sssss';
console.log(noises.length);
//print last element without hard coding index
console.log(noises[noises.length - 1]);
//print the whole array
console.log(noises);


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Using bracket syntax, assign the noises property on animal to our new noises array.
 Using any syntax add another noise to the noises property on animal.
 console.log animal.*/

animal['noises'] = noises;

animal.noises.push('bark');
console.log(animal);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Create a variable named animals and assign it to an empty array.
 push our animal that we created to animals.
 console.log animals. What does it look like?
 Create a variable called duck and assign it to the data:
{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }
 push duck to animals
 console.log animals. What does it look like?
 Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
 console.log animals, and, console.log the length of animals. Is everything looking right?*/

var animals = [];

animals.push(animal);
console.log(animals);

var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);
console.log(animals);

var elephant = { species: 'elephant', name: 'Stompy', noises: ['honk', 'stomp'] };
var dog = { species: 'dog', name: 'Doggo', noises: ['woof', 'bark'] };

animals.push(elephant);
animals.push(dog);
console.log(animals);
console.log(animals.length);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*Choose a data structure for this list of friends.
 Write a comment in your code that explains why you chose this data structure.
 Create a variable called friends and assign it to the data structure that you chose.
 Take a look at the documentation for Math.random here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 Write a function called getRandom that takes our animals array and returns the index of a random element using Math.random
 Using a random index from this function that you just created, get a random animal and add its name to friends.
 console.log friends.
 add friends as a property named friends on one of the animals in animals
 console.log your work.*/

//array is a good structure for a list because it holds multiple elements and has numerous methods

var friends = [];

function getRandom(animals){
    return friends.push(Math.random(animals.length));
}

//add friends as a property named friends on one of the animals in animals
animals[0].friends = friends;



/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
