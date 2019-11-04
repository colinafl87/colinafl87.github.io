// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('lodown-colinafl87');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
//use filter with parameter array to return the number of male customers
let count = 0;
_.filter(array, function(customer, i, array){
    if(customer.gender === 'male'){
        return count += 1;
    }
});
return count;
};

var femaleCount = (array) => {

let female = _.reduce(array, (total, index, array)=> {
    if(index.gender === 'female'){
        total++;
    }
    return total;
    }, 0);
return female;
};

var oldestCustomer = (array) => {
  let currentAge = 0;
  let old;
   let oldest = _.each(array,(customers, index, array) =>{
       if(currentAge < customers.age){
           currentAge = customers.age;
           old = customers.name;
       }
   });
   return old;
};

var youngestCustomer = (array) => {
  let currentAge = 100;
  let young;
   let youngest = _.each(array,(customers, index, array) =>{
       if(currentAge > customers.age){
           currentAge = customers.age;
           young = customers.name;
       }
   });
   return young;
};

var averageBalance = (array) => {
    let currentBal = [];
    //remove balance from customers
    for(let i = 0; i < array.length; i++){
    currentBal.push(array[i].balance);
    }
    //remove $'s
    let convert =[];
    let convert1 = [];
    //remove commas
    for(let y = 0; y < currentBal.length; y++){
      convert.push(currentBal[y].slice(1));
      convert1.push(convert[y].charAt(0) + convert[y].slice(2));
    }


let customerBalance = _.reduce(convert1, (total, current)=> {
    
    total += parseFloat(current);
    
    return total;
    
    }, 0);
   
return customerBalance / convert.length;

};

var firstLetterCount = (array, letter) =>{
    //find how many customers names start with a given letter
    //returns a number
    
    let count = _.reduce(array, (total, current)=> {
        if(current.name[0].toLowerCase() === letter.toLowerCase()){
            total += 1;
        }
        return total;
    }, 0);
    return count;
};

var friendFirstLetterCount = (array, customer, letter) =>{
    //find how many friends of a given customer start with given letter
    //return a number and work uppercase or lowercase
    //must loop through customers and loop through friends
    let friendList = _.reduce(array, (total, current)=> {
        if(current.name.toLowerCase() === customer.toLowerCase()){
          total =  _.pluck(current.friends, 'name');
        }
        
        return total;
    }, []);
    
    
    let count = _.reduce(friendList, (total, current)=> {
        if(current[0].toLowerCase() === letter.toLowerCase()){
            total += 1;
        }
        return total;
    }, 0);
    return count;
    
};


var friendsCount = (array, name) =>{
    //fnd customers' name with given name in their friend list
    //return in an array
    //if customer.friends includes name, push customer.name
   
  let nameFriends = [];
  // using each function to iterate the element index and collection
  _.each(array, function(customer){
      // if EACH name does not equal name
   if(customer.name !== name) {
       // filter each friend
       _.filter(customer.friends, function(friend){
           if(friend.name === name) {
               // push the name into count
               nameFriends.push(customer.name);
           }
       });
   }
  });
 
  return nameFriends;
};
    


var topThreeTags = (array) =>{
    //takes array and returns array of top three tags
    //flatten into array of tags
    let tagArray = [];
    for(let i = 0; i < array.length; i++){
      for(let y = 0; y < array[i]['tags'].length; y++){
        tagArray.push(array[i]['tags'][y]);
      }
    }
    
//create object with tag count
    let tagOb = _.reduce(tagArray, (total, current) =>{
      if(total[current] === undefined){
        total[current] = 1;
      }else{
        total[current]++;
      }
      return total;
    }, {});
    
    
    //turn back into array of subarrays to implement sort
    
     let tagSort = [];
    for(let word in tagOb){
      tagSort.push([word, tagOb[word]]);
    }
    
    tagSort.sort(function(a, b){
      return b[1] - a[1];
    });
    
    //return array of top 3
    
    let answer = [];
for(let z = 0; z < 3; z++){
  answer.push(tagSort[z][0]);
}

return answer;

};


    
var genderCount = (array) =>{
    //return object of gender count utilizing reduce
    let genderArray = [];
    for(let i = 0; i < array.length; i++){
        genderArray.push(array[i]['gender']);
      }
    //flatten into array of genders

//reduce into gender count object
     let genders = _.reduce(genderArray, (total, current) =>{
      if(total[current] === undefined){
        total[current] = 1;
      }else{
        total[current]++;
      }
      return total;
    }, {});

    return genders;
};
    

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
