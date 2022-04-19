/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animal` and assign it to an empty object
var animal = {};
/*Using **dot notation** give `animal` a **property** named `species` 
with a value of any animal species*/
animal.species = "dog";
/**Using **bracket notation** give `animal` a **property** called 
`name` with a value of your animal`s name. */
animal.name = "Biscuit";
/**give `animal` a **property** called `noises` with a value of 
empty array. */
animal.noises = [];
//Print your `animal` Object to the console by adding
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**give `animal` a **property** called `noises` with a value of 
empty array. */
var noises = [];
//Using **bracket notation** give `noises` it's first element
noises[0] = "wimper";
noises.push("growls");
//using array function, add another noise to the end
noises.unshift("barks");
//at the end
noises[noises.length] = "snarl";


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

animal.noises = noises;
noises.push("howl");
console.log(animals);


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *dot notation and bracket notation
 * 2. What are the different ways of accessing elements on arrays?
 * only bracket noition using the index
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `animals` and assign it to an empty array.
var animals = [];
//push` our `animal` that we created to `animals
animals.push(animal);
console.log(animals);
//Create a variable called `duck` and assign it to the data
var duck = {
  species: "duck",
  name: "Jermone",
  noises: ["quack", "honk", "sneeze", "woosh"]
};
//`push` `duck` to `animals`
animals.push(duck);
console.log(animal);
//Create two more animal objects
//animal#3
var turtle = {
  species: "turtle",
  name: "Jelly",
  noises: ["splash", "chomp"]
};
animals.push(turtle);
console.log(animal);
//animal#4
var bird = {
  species: "bird",
  name: "Pebbles",
  noises: ["chirp", "cheep", "squack"]
};
animals.push(bird);
console.log(animal);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**
*/

//Create a variable called `friends`
 var friends = [];

//Write a function called `getRandom`
function getRandom(animals){
 
  var randomIndex = (Math.floor(Math.random() * animals.length));
  return randomIndex;
};
 /**Using a random index from this function that you just created, 
  get a random animal and add its `name` to `friends`. */
friends.push(animal[randomIndex]);

console.log(friends);

animals["friends"] = friends;
console.log(friends);




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}