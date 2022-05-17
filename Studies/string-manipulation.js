/**
 * STRING-MANIPULATION
 * 
 * 0. used to represnt or manupulate a set of character data
 * 1. hold data that can represented in text form
 * 2. operations on strings(properties of string): can check length, concatenate, access index
 * 3. methods on strings: check existence, check location, or extraction
 */


//1. String: Character Data//
//strings are a string of characters encloded in single or double quotes
    var firstName = "Ashlee";
    var  lastName = "Harvey";

//2. Operators //
//assignment operator (=) assigns a value to a variable.
    let firstName = "Ashlee";

//concatenation (+) adds two or more string values together 
    let fullName = firstName + " " + lastName;
    console.log(fullName); //prints "Ashlee Harvey"

// 3. Methods //
//length property- returns the length of a string
    firstName.length; //returns 6

// slice(start, end) extracts a part of a string and returns the extracted part in a new string
    let slice = firstName.slice(1 ,3); //print sh

//substr(parameter, parameter) the second parameter specifies the length of the extracted part
    let sub = firstName.substr(1, 3); //prints shl
//toUpperCase() string is converted to upper case
    let capName = firstName.toUpperCase(); //prints ASHLEE
//toLowerCase() string is converted to lower case
    let lowName = firstName.toLowerCase(); //prints ashlee
//concat() joins two or more strings
    let concatNames = firstName.concat(lastName); //prints AshleeHarvey