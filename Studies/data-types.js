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

//Boolean - true or false
var a = 10;
var b = 20;
var result = a < b; //true

//NaN - not a number
Number.NaN

//undefined -an undefined value
var car;

//null - absence of any value/ emptyvalue
var car = null; 
car;//null

//infinity - positive numeric value representing infinity
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

//3. Copy By Value//
//simple datatypes are copy by value
let num1 = 1;
let num2 = num1; //the value is store in num1 and copied into num2;

//4. Copy By Reference//
//complex data types are copy by reference
var obj1 = {name: "Ashlee"};

var obj2 = obj1; //the value is stored in obj2 is a reference to the value in obj1

//any values chaned in obj2 effects all references because references in obj1 connected to references in ob2

obj2.lastName = "Harvey";
console.log(obj1.lastName); //prints "Harvey"