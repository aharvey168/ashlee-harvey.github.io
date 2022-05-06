////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, increment) {
  
  // if(step == null){
  //   step = 1;
  //   var arr = [];
  // }
  // if (step > 0) {
  //   for (var i = x; i <= y; i += step)
  //     arr.push(i);
  // } else {
  //       for (var i = x; i >= y; i += step)
  //       arr.push(i);
  // }
  //   return arr;

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
  for (var i = start; i <= end; i++) 
    arr.push(i);
  return arr.reduce(function(a, b){
    return a + b;   
  });
}  ;


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[(arr.length - 1) - i];
  }

  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList() {

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray() {

}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {

}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {

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
