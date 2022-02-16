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
//Create a variable named `animal` and assign it to an empty object.
var  animal = {};
/*Using **dot notation** give `animal` a **property** named
 `species` with a value of any animal species.*/
animal.species = "dog";
/*give `animal` a **property** called `name` with a value of your 
animal`s name.*/
animal["name"] = "Biscuit";
/*give `animal` a **property** called `noises` with a value of empty 
array.*/
animal["noises"] = [];
//Print your `animal` Object to the console
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Create a variable named `noises` and assign it to an empty array
var noises = [];
//give `noises` it's first element
noises[0] = "bark";
//Using an array function add another noise to the end of `noises`
noises.unshift("growls");
//6. add an element to noises
noises.push("wimpers");
// Using **bracket syntax** add another element to the end of `noises
noises[noises.length] = "snores";
// `console.log` the length of `noises`
console.log(noises.length);
//9.log the last element in noises
console.log(noises.length - 1);
//10. log the whole array
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
//1. using brackets, assign noises to animal to our noises array
animal["noises"] = noises;
//using an array function, add another noise
noises.unshift("snarls");


/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
    1. objectName.propertyName => dot property
    2. object[property] => breacket property
 *  
 * 2. What are the different ways of accessing elements on arrays?
  1. array[];
  2. .length-1
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
//variable named `animals` and assign it to an empty array
var animals = [];
//`push` our `animal` that we created to `animals`
animals.push(animal);
//Create a variable called `duck` and assign it to the data
var duck = {
  species: 'duck', 
  name: 'Jerome', 
  noises: ['quack', 'honk', 'sneeze', 'woosh']
};
//`push` `duck` to `animals`
animals.push(duck);

//create a variable called "cat" and assign it to the data
var cat = {
  species: "cat",
  name: "Mr. Feline",
  noises: ["meow", "purr", "hiss", "chatter"]
};
//`push` `cat` to `animals`
animals.push(cat);

//create a variable called "bird" and assign it to the data
var bird = {
  species: "bird",
  name: "Eduardo",
  noises: ["chirp", "whistle", "croak", "peeps"]
};
//`push` `cat` to `animals`
animals.push(bird);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/**list of friends will be in an array. I think the friends should be 
in an array because is best to store list-like items.*/
//Create a variable called `friends` and assign it to the data structure
var friends = [];
/*Write a function called `getRandom` takes "animals" array as input
 and returns a random index of the output array
 */
function getRandom(animals) {

  return Math.floor(Math.random(animals.length -1))
}

/*add the `friends` list as a **property** also named `friends` on
 one of the animals in the `animals` array */

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