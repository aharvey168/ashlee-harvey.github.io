////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  if(step === undefined){
    if(start > end){
      for( var i = end; i >= start; i--){
        rangeArray.push(i)
      } else {
        for (var i = start; i <= end; i++) {
          rangeArray.push(i)
        }
      }
    } else { //step was passed in
      if(start > end) {
        step = -1
      } else {
        step = 1;
      }
    }
  }
 
  // } else if (step !== undefined) {//step was passed in
  //     if( start > end) { // step was not passed in
  //       step = -1;
  //     } else {
  //       step = 1;
  //   }
  // } 
  // let rangeArray = []; 
  // if(step > 0) {
  //   for (var i = start; i <= end; i+= step){
  //    rangeArray.push(i);
  //   }
  // } else if(step < 0) {
  //   for(var i = start; i >= end; i+= step){
  //     rangeArray.push(i);
  //   }  
  // } 
  // if(step !== undefined){
  //   if(start > end){
  //     return start; 
  //   } else {
  //     return end;
  //   }
  // } else {
  //   if(start > end){
  //     return start; 
  //   } else {
  //     return end;
  //   }
  // }
  return rangeArray;
  
  // determine if step has been passed in
    // determine if start is greater than end
    // else end is greater than start
  // else step wasn't passed in
    // determine if start is greater than end
    // else end is greater than start
  // }
 
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

function sumOfRange(start, end){
  var arr = [];
  for (var i = start; i <= end; i++) {
    arr.push(i); 
  }
  return arr;
};


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
