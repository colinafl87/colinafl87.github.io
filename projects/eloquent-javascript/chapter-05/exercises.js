// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
//use reduce funtion with concat to flatten array of arrays to single array
//The parameters to reduce are array, a combining function and a start value
return  array.reduce((first, current)=> first.concat(current), []);
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
// provides something like a for loop statement
//takes a value, a test function, an update function, and a body function
//Each iteration, it first runs the test function on the current loop value and stops if that returns false
//Then it calls the body function, giving it the current value
//Finally, it calls the update function to create a new value and starts from the beginning
for(; test(value); value = update(value)){
  body(value);
}

}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {
  //returns true if given function returns true for all elements in array
  
  let count = 0;
  //count increases for every true element
  for(let i = 0; i < array.length; i++){
    if(test(array[i]) === true){
      count += 1;
    }
  }
  
  if(count === array.length){
    return true;
  }else{
    return false;
  }

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////


function dominantDirection(text) {
//function determines dominant direction in string
//each script object has a direction property 
//that can be "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom)
//dominant direction is the direction of a majority of the characters
//characterScript and countBy are useful here

 let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  switch (scripts.length) {
    case 0:
      return 'no dominant direction found';
    case 1:
      return scripts[0].name;
    default:
      if (scripts.reduce((acc, cur) => acc.count === cur.count)) {
        return 'no dominant direction found';
      } else {
        return scripts.reduce((acc, cur) => acc.count >= cur.count ? acc.name : cur.name);
      }
  }
}


// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
