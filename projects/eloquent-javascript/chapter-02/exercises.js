
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
  //create an empty string named result
  var result = '';
  var counter = 1;
  //make while loop to console.log any number of has tags
  while (counter <= num) {
    console.log(result += '#');
    counter++;
  }
  //return result
  return result;
}

////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz(i) {
    for (var i = 1; i <= 15; i++){
      if(i % 15 === 0) {
          console.log("fizzbuzz");
      } else if (i % 3 === 0) {
          console.log("fizz");
      } else if ( i % 5 === 0) {
          console.log("buzz");
      } else {
          console.log(i);
      }
    }
  }

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(spread) { 
//   var result = "";
 
//   for (var i = 0; i <= size; i++) {  //choose the amount of iterations
//     for (var j = 0; j <= size; j++) { //tells me how many times to create the space/hashtag pattern
//       if ((j + i) % 2 == 0) {
//         result += "# ";
//       } else {
//         result += " #";
//       }
//     }
//     //result 
//     result += "\n";
//   }
//  // return result;
//  console.log(result)


var size = 8; 
var result = "";

for (var i = 0; i < size; i++) {  
  for (var j = 0; j < size; j++) {
    if ((j + i) % 2 == 0)
      result += " ";
    else
      result += "#";
  }
  result = result + "\n";
}
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
