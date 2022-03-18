// #!/usr/bin/env node

'use strict';

const object = require("underbar/object");

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    var contact = {};
    contact.id = id;
    contact.nameFirst = nameFirst;
    contact.nameLast = nameLast;
    return contact;
}  
 
function makeContactList(){
var contacts = [];
return {
    length: function() {
    return contacts.length;
    },
    addContact: function(contact) {
        contacts.push(contact);
    },
    findContact: function(fullName) {
        //determine if fullName is in the  contact list array
        for (var i = 0; i < contacts.length; i++) {
            //if found 
            if(fullName === contacts[i].nameFirst + " " + contacts[i].nameLast) {
                //return contact object
                return contacts[i];
            }
          }
        return undefined; 
        },
    removeContact: function(person) {
        //search through every object
        contacts.forEach(function(contact, index, collection) {
            //determine if the current object matches the input object
            if(person.nameFirst + " " + person.nameLast === contact.nameFirst + " " + contact.nameLast) {
                //delete the object from the array of objects
                return contacts.splice(index, 1);
            } 
        }); 
    },
    printAllContactNames: function(){
    //create a value to store names
        var lineBreakList = [];
       //iterate through the contact list array
       for(var i = 0; i < contacts.length; i++) {
           //determine if on last index
           if(i === contacts.length - 1) { //if true, do what?
            lineBreakList.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
           } else {  //else not on last index
            //do what?
            lineBreakList.push(contacts[i].nameFirst + " " + contacts[i].nameLast + "\n");
           }
       }
       return lineBreakList.join("");
    }
}
}
// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
