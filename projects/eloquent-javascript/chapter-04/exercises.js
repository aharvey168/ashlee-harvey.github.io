////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let rangeArray = [];
  //if the step is greater than 0, add to new array
  if(start === end) {
   return rangeArray = [];
  }
  if( step > 0) {
    for (var i = start; i <= end; i += step) {
      rangeArray.push(i);
    }
  } else if(step < 0) {
    for (var i = start; i >= end; i += step) {
    return rangeArray = [];
    }
  } else {
    for (var i = start; i <= end; i++) {
     rangeArray.push(i);
    }
  }
  return rangeArray;
}

//determine if z was not passed into the function
// if (x === y) {
//   return output;
// }
// if (z === undefined) {
//     //determine if ex is less than z
//     if (x < y) {
//       //create for loop starting at x, ending at y that is ascending
//         //push the current value of i into ouput
//       }
//     } else { //x is greater than y
//       //create for lopp starting at x, ending at ys that is descdening 
//         //push the current value if i into the output 


//   } else {//elsez was passed in

//   }
// }


/*
range(1,4) => [1, 2, 3, 4]
range(4, 1) => [4, 3, 2, 1]
range(1, 4, 2) = > [ 1, 3]
range(4, 1, 2) => [2, 1]
range(1, 1) => []
range(1, 4, -1) = >[] 
 */

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numbers) {
var x = numbers.reduce(function(prev, current){
  return prev + current;
}, 0);
return x;
}
////////////////////////////////////////////////////////////////////////////////
// sum of range ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sumOfRange(start, end) {
  let rangeArray = [];
  for(let i = start; i <= end; i++) {
    rangeArray.push(i);
  }
  return rangeArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) { //should produce no side effects
  var newArray = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }
  return newArray;
//returning a reversed copy of the input array
}
/*var arr = [1, 2, 3]
reveredArray(arr) => [3, 2, 1]
console.log(arr);=> [1, 2, 3]
  */
////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) { //should alter the input array to a reversed version of it 
  //directly 
arr.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) { //[10, 20, 30]
  //create a variable called rest and initialize it to null
let rest = null;
//iterate backwards through input array
for (var i = array.length - 1; i >= 0; i--) {
  //reassign rest to an object with a value properrty equal to array[1] and rest property
  rest = { value: array[i], rest };
  //equal to the current value of rest
  }
  return rest;
}
/*
arrayToList([10, 20 , 30]);
{
  value: 10,
  rest {
   value 20,
   rest: {
    value: 30
    rest: null
  }
 }
}
*/
////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(obj, output=[]) {
  //base
    if(obj.rest === null) {
      output.push(obj.value);
      return output;
    }
  //recursion
  output.push(obj["value"]);
  return listToArray(obj.rest, output);
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  return {
    value: element,
    rest: list
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, n) {
  if (!list) {
    return undefined;
  } else if (n===0) {
    return list.value;
  } else {
    return nth(list.rest, n -1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(a, b) {
//determine if x and y are not objects
// if( typeof x !== "object" && typeof y !== "object") {
//   return x === y; 
//   }
//   //determine if the one of the values is not an object
//   if (typeof x !== "object" || typeof y !== "object") {
//     return false; 
//     }
//     //use the object.keys( method to create an array of keys to both values)
//     let xKeys = Object.keys(x); //["a", "b"]
//     let yKeys = Object.keys(y); //["a", "b"]
//     //determine of the length of arrays DON"T MATCH
//     if(xKeys.length !== yKeys.length){
//       return false;
//     }
//     //iterate through xKey
//     for(let i =0; i < xKeys.length; i++){
//       if (yKeys.includes(xKeys[i]) || deepEqual(x[xKeys[i]], y[xKeys[i]])) {
//         return false;
//       }
//     }
//    return true; 
// };
if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
