////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
function range(start, end, step){ 
  var rangeArray = [];
  if(start === end){
    return rangeArray;
  }
  if(step === undefined) {
    if(start > end){
      for (let i = start; i >= end; i--) {
        rangeArray.push(i);
      }
    } else {
      for(let i = start; i <= end; i++){
        rangeArray.push(i);
      }
    }
  } else {
    if(step < 0){
      return rangeArray;
    }
    if(start > end){
      for (let i = start; i >= end; i -= step) {
        rangeArray.push(i);
      }
    } else if (start < end){
      for(let i = start; i <= end; i += step){
        rangeArray.push(i);
      } 
    } 
  }
  return rangeArray;
}
 

////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arrayOfNums) {
    var total = 0;
    for (var i = 0; i < arrayOfNums.length; i++) {
      total += arrayOfNums[i];
      // console.log(total);
    }
    return total;
  }
////////////////////////////////////////////////////////////////////////////////
// sum  of range////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// function sumOfRange(start, end){
//   var arr = [];
//   for (var i = start; i <= end; i++) {
//     arr.push(i); 
//   }
//   return arr;
// };
// function range(start, end, step = start < end ? 1 : -1) {
//   let array = [];

//   if (step > 0) {
//     for (let i = start; i <= end; i += step) array.push(i);
//   } else {
//     for (let i = start; i >= end; i += step) array.push(i);
//   }
//   return array;
// }

// function sum(array) {
//   let total = 0;
//   for (let value of array) {
//     total += value;
//   }
//   return total;
// }



////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  var reversedArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversedArr.push(arr[i]);
  }

  return reversedArr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  return arr.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  //create rest parameter
  let rest = null;
  //iterate backwards though the array
  for (let i = array.length -1; i >= 0; i--){
    /**reassign rest to an object with a key of "value" and the value at they 
     * key is the current item in the array we are accessing. Additionally, 
     * the object should have a key of "rest" that is assigned the current 
     * value ofrest*/
    rest = { value: array[i], rest: rest}
  }
  return rest;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list, arr=[]) {
  //base
  if(list.rest === null){
    arr.push(list.value);
    return arr;
  }
  //recursion
    //add the current value property to arr
    arr.push(list.value);
    return listToArray(list.rest, arr)
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

function nth(list, num) {
  var node = list;
   if(num === 0) {
     return node.value;
   } else {
      if (node.rest) {
         node = node.rest;
         return nth(node, num - 1);
      } else {
         return undefined;
      }
   }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(x, y) {
  if(typeof x !== "object" && typeof y !=="object"){
    return x === y;
  }
  if (typeof x !== "object" || typeof y !== "object"){
    return false;
  }
    //assume both values are objects
      //make sure they have the same exact keys
      //make sure the keys have the same values
    let xKeys = Object.keys(x);
    let yKeys = Object.keys(y);
      //determine if the length of the arrays are equal
    if(xKeys.length === yKeys.length){
      return false;
    }
    //the objects have the same number of keys
      //check if the keys match
      //check if the values match
    
    //iterate through xKeys
    for( var i = 0; i < xKeys.length; i++){
      //determine if the  current key is included in ykeys or if the vales at they key match
      if(!yKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i]], y[xKeys[i]])){
        return false;
    }
  }
  //at this part of the function
    //the objects are deeply equal
    return true;
}
function deepEqual(a, b){
  if(typeof a !== 'object' && typeof b !== 'object'){
    return a === b;
  }
  if(typeof a !== 'object' || typeof b !== 'object'){
    return false;
  }
  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if(aKeys.length !== bKeys.length){
    return false;
  }
  for(let i = 0; i < aKeys.length; i++){
    if(!aKeys.includes(bKeys[i]) || !deepEqual(a[aKeys[i]], b[aKeys[i]])){
      return false;
    }
  }
  return true;
}
console.log(deepEqual('a', 'b'));
console.log(deepEqual({a:1},{a:1}));

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
