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
var greeting = function(greeting, location, time) {
    console.log("${greeting}${location}${time}")
    console.log("greeting", "location", "time") 
};
  
 


// 2.
var contestants = function(array) {
    return dogs.length;
};



// 3.
var filterSpecies = dogs.filter(function(cont) {
    return cont.species === "dog";
});
   


// 4. 
var dogContestants = [...filteredSpecies];




// 5. 
var dogsWithClasses = dogContestants.map(function(dogs) {
    //if the dog's weight between 0-10
    if(dog.weight >= 0 || dog.weight <= 10) { 
        //return class value as red       
        dog.class = "red";
    } else if (dogs.weight >= 11 || dogs.weight <= 20) {//else if the dog's weight between 11-20
        //return class value as yellow
        dog.class = "yellow";
    } else {
        dog.class = "green";
    }   
    return dog;
});
    


// 6.
var firstInClass = function(array, obj={}){
//base
if(array.length === 0) {
    return obj;
} 
//recursion
Object.assign(obj, array[0]);
return firstInClass(array.slice(1), obj);
};



// 7.
var votes = dogs.reduce(function(sum, dog) {
    dog += dog.votes;
    return sum;    
}, 0);