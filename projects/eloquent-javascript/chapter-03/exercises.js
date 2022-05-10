////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(min, max) {
  if(max > min){
    return min;
  } else {
    return max
  }
}


////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(n) {
  const even = 0;
  const odd = 1;
    //base
    if(n === even){
      return true;
    } else if(n === odd){
      return false;
      //for any positive number, subtract 2 from the given number
    } else if(n > 0) {
      return isEven(n - 2);
      //the function is inputting a nugetive number
    } else{
      return isEven(-n);
    }
    //recursion
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  var count = 0;
  for (var i = 0; i < string.length; i++){
    if(string.charAt(i) === char){
      count++
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++){
    if(string.charAt(i) === "B"){
      count++
    }
  }
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};