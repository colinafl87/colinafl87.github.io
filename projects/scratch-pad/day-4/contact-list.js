// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
   var newObject = {}; 
    newObject.id = id;
    newObject.nameFirst = nameFirst;
    newObject.nameLast = nameLast;
    
return newObject;
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){
         contacts.push(contact);
        },//add comma to keep the next function as part of the return
        findContact: function(fullName){
            //must loop through names first and length for complete match
            for(var i = 0; i <= contacts.length -1; i++){
                if(contacts[i].nameFirst + ' ' + contacts[i].nameLast === fullName){
                    //return that contact index when there is a match
                    return contacts[i];
                }else{
                    return undefined;
                }
            }
        },
        removeContact: function(contact){
            //loop through contacts for complete match including id
            for (var j = 0; j<= contacts.length -1; j++){
                if(contacts[j].nameFirst === contact.nameFirst && contacts[j].nameLast === contact.nameLast && contacts[j].id === contact.id){
                   //splice out the contact beginning where j is ending after that
                   contacts.splice(0, 1);
                }
            }
        },
        printAllContactNames: function(){
            //push all contacts' names into storage
            var storage = [];
            
            for(var k = 0; k <= contacts.length -1; k++){
                storage.push(contacts[k].nameFirst + ' ' + contacts[k].nameLast)
            }
            //join them into a string joined with a new line \n
           return storage.join('\n');
        }
           };

}


// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
