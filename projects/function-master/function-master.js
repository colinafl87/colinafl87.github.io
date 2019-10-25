//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
//takes objects and returns their values in array
//requires container array

let container = [];

//remove values form object with for in loop

for(let key  in object){
    container.push(object[key]);
}

return container;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {

//collect all keys from an object
//could use a container array

let contains = [];

for(let key in object){
    contains.push(key);
}

return contains.join(' ');

}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //takes object's string values and returns them as string
    
    let contain = [];
    
    for(let key in object){
        //check if value is a string with typeof
        if(typeof object[key] === 'string'){
         contain.push(object[key]);   
        }
    }
    
    return contain.join(' ');
    
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    //return if collection is an array or object
    //make sure not false positive for typeof object
    
    if(Array.isArray(collection) === true ){
        return 'array'
    }else if(typeof collection === 'object' && collection !== null){
        return 'object'
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    //return a word capitalized on the first letter alone
    //toUpperCase string at 0 and add single character to the rest of the word
    return string[0].toUpperCase() + string.slice(1)
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //capitalize all words
    //use the previous method change the string into an array to loop through each word
    
    let arr = string.split(' ');
    let answer = [];
    
    for(let i = 0; i <= arr.length - 1; i++){
        answer.push(arr[i][0].toUpperCase() + arr[i].slice(1));
    }
    
    return answer.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
//take an object with name property and return "Welcome <Name>!"

let obName = object.name[0].toUpperCase() + object.name.slice(1);

return "Welcome " + obName + "!";

}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
//take an object with a name property and species property
//return Name is a Species string

let animalName = object.name[0].toUpperCase() + object.name.slice(1);
let animalSpecies = object.species[0].toUpperCase() + object.species.slice(1);

return `${animalName} is a ${animalSpecies}`;

}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
//check IF the object has a noises array 
//return as a string separated by spaces if so
//ELSE return 'there are no noises'

//check if noises is an array
//check if array is not empty
if(Array.isArray(object.noises) === true && object.noises.length > 0){
    return object.noises.join(' ');
}else{
    return 'there are no noises';
}


}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
//return true if argument string contains argument word
//return false if not
//check a string for a word

return string.includes(word);

}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    //add name to object.friends's array and return object
    
    object.friends.push(name);
    
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    //take object and name and return true if name is a friend
    
    for(let key in object){
        if(key === 'friends'){
            return object.friends.includes(name);
        }
    }
   // 
            return false;

}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
//takes a list and name and returns a list that name is NOT friends with

let enemies = [];

for(let i = 0; i <= array.length -1; i++){
    //name will not have its own name in its friends list
    //can't be friends with yourself
        if(array[i].friends.includes(name) === false && array[i].name !== name){
            enemies.push(array[i].name);
        }
    }

return enemies;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
//take object, key, and value update the key of object with new value
//check if object contains key

object[key] = value;

return object;

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
//take object of array of strings 
//remove properties in object listed in array

for(let key in object){
    if(array.includes(key) === true){
        delete object[key];//must be in bracket not dot notation
    }
}
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
//take an array and remove duplicates return that corrected array
//have to count the number of times an array element appears and remove
//you could build a new array and check if it now contains a value from old array
//if it does, don't move it to new array

let cleanArray = [];

for(let i = 0; i <= array.length -1; i++){
    if(cleanArray.includes(array[i]) === false){
        cleanArray.push(array[i]);
    }
}

return cleanArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}