
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
//should work with any input number, requires a parameter

var count = '#';

/*used but also possible with for loop:
for(let count = '#'; count.length <= num; count += "#"){
    console.log(count);
    
    .repeat method also works
for(let i = 1; i <= num; i++){
    console.log('#'.repeat())
}
    
}*/

while(count.length <= num){
    console.log(count);
    count += '#';
}

}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
    //prints numbers 1 through 15 with appropriate responses
    //fizz for devisable by 3, buzz for divisable by 5, fizzbuzz for both
 
 for(let i = 1; i <= 15; i++){
     if(i % 3 === 0 && i % 5 === 0){
         console.log('fizzbuzz');
     }else if (i % 3 === 0){
         console.log('fizz');
     }else if (i % 5 === 0){
         console.log('buzz');
     }else{
         console.log(i); // default print the number
     }
 }
 
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
//should make a chessboard of any number x number
//requires \n new line
//requires a loop inside a loop


var board = "";//this is the empty string we're going to add either ' ' , '#' or newline

for (var y = 0; y < num; y++) {   
  for (var x = 0; x < num; x++) {
    if ((x + y) % 2 == 0) /* To know whether to put a space or a hash sign at a given position, 
                             test whether the sum of the two counters is even (% 2). */
      board += " "; //every inner loop is a line with " " blank space or '#'
    else
      board += "#";
  }
  board += "\n"; //in the outer loop we add newline to seperate rows
}

console.log(board);

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
