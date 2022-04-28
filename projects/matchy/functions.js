/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function search(array, name){
//iterate through the animals array
for(var i = 0; i < array.length; i++){
    //condition, if the animals name is in the animals array
    if(name === animals[i].name){
        //return animals object
        return animals[i];
    } 
        //return "null"
        
    }
    return null;
        
    
    
        
};

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function replace(animals, name, replacement){
    for (var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            return animals[i] = replacement;
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function remove(animals, name){
    for (var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(animals[i]);
        } 
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function add(animals, animal){
    var match = false
    var length = false;
      // this empty array will hold all of our animals names
      var arr = []
      // we push all of the names in the animals array into arr
      for(var i = 0; i < animals.length; i++) {
          arr.push(animals[i].name)
      }
    // if any of the names match variable match = true
    for (var i = 0; i < arr.length; i++) {
    if (arr[i] === animal.name) {
       match = true
    }
      }
      // if animal name and species length is more then 0 length = true
    if (animal.name.length > 0 && animal.species.length > 0) {
      length = true
    }
    // if match = false and length = true push into the array
    if (match === false && length === true) {
      animals.push(animal)
    }
      return animals
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
