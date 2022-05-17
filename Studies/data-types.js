/**
 * DATATYPES
 * 0. value of a data- type
 * 1. Simple/Primitive: immutable data that cannot hold or collect other values.
 *    During assignment, they are copied by value.
 * 2. Complex: Mutable data that can hold of values(infinite in size). During
 *    assignment, they are copied by reference.
 */

//1. Simple Datatypes //
//Number
 var number = 1;

//String
var message = "Hey there!"

//Boolean
3 < 4; true 

//NaN - not a number
Number.NaN

//undefined -an undefined value
var car;

//null
var car = null;

//infinity - positive infinity
if (maxNumber === Infinity) {
    console.log('Let\'s call it Infinity!'); // expected output: "Let's call it Infinity!"
  } 

//-Infinity - negative infinity
    let x = -1.797693134862316E+308;   


//2. Complex Datatypes
//objects
{key: "value"}

//arrays
["dog", "cat", "hamster"]

//functions
function add(num1, num2){
    return num1 * num2;
}