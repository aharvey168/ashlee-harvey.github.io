// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// 1.
var greeting = function(greeting, location, time){
    console.log(`${greeting} ${location} ${time}`);
};



// 2.
var contestants = function(dogs){
    return dogs.length;
};



// 3.
var filterSpecies = dogs.filter(function(dog){
    if(dog.species === "dog"){
        return dog;
    }
    return filterSpecies;
})

  




// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map(function(dog){
    //add a key of class to the current dog object
    if(dog.weight < 11){
        dog.class = "red";
    } else if (dog.weight < 21){ //11-21
        dog.class = "yellow";
    } else { //21 lbs or more
        dog.class = "green";
    }
        //give it a value based on the dogs weight
    //return the current dog object after updating
    return dog;
});
    


// 6.
var firstInClass = function(array, obj={}){
    //base
    if(array.length === 0){
        return obj;
    }
    //recursion
        //copy all of the zero index object's key/ value pairs into obj
        Object.assign(obj, array[0]);
        //return recursion function
        return firstInClass(array.slice(1), obj);
};



// 7.
var votes;