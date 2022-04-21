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
for(var i = 0; i < animals.length; i++){
    if(animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name){
                animals.push(animal[i]);
        }
    }
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
