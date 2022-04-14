// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  //for loop to iterate over the array
  for (var i = 0; i < array.length; i++) {
    //print the value of the array
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  //for loop backwards to iterate over the array
  for( var i = array.length - 1; i >= 0; i--) {
    //print the value of the array
    console.log(array[i]);
  }
  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //create an output array
  var output = [];
  //for in loop to iterate over the keys in the object
  for (var key in object) {
    output.push(key);
  }
     //return an array of the keys
    return output;
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  //for loop iterating every key in object
  for(var key in object) {
     //print the object keys
    console.log(key);
  }
 

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //create an ouput array for object's values to be stored
  var output = [];
  //for in loop to iterate though the object keys
  for ( var key in object) {
    //push the values into the ouput array
    output.push(object[key]);
  }
  //return the ouput array
  return output; 
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  //loop over he object
  for (var key in object) {
      //print the object values
      console.log(object[key]);
  }
  

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  //create a count variable that equals 0
  var count = 0;
  //iterate over the object
  for (var key in object) {
     //return the number of key/value pairs
    count++;
  }
   
  return count;
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  //create and empty array
  var output = [];
  //for in loop interates over object
  for (var key in object){
    //push the value to the ouput array
    output.push(object[key])
  }
   for (var i = output.length - 1; i >= 0; i--){
     console.log(output[i]);
   
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
