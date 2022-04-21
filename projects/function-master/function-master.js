//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
return Object.values(object);

} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
var test = Object.keys(object);
return test.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    var array = [];
    for(var key in object) {
        if(typeof(object[key]) === "string"){
            array.push(object[key]);
        }
    }
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
   if(Array.isArray(collection) === true){
       return "array";
   } else{
       return "object";
   }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
    //split the string with space
    var separatedString = string.toLowerCase().split(" ");
        //iterate through each string
        for (var i = 0; i < separatedString.length; i++) {
            /*create a variable that takes the current string at the 0 index
            and capitalaizes it plus the next string*/
            separatedString[i] = separatedString[i].charAt(0).toUpperCase() + separatedString[i].substring(1);
        } 
        //return the variable joined
        return separatedString.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
   return `Welcome ${capitalizeWord(object.name)}!`;
}
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
return `${capitalizeWord(object.name)} is a ${capitalizeWord(object.species)}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    if(object.hasOwnProperty("noises") && object["noises"].length > 0){// if there is a noises array
    return object.noises.join(" ");
    } else {//if there are no noises return, empty
        return "there are no noises";
    }       
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    //split the string with space
    var split = string.split(" ");
    for(var i = 0; i < split.length; i++) {
        if(split[i] === word){
            return true;
        }    
    }   
     return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
object.friends.push(name);
return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
if(object.hasOwnProperty("friends") === true) {
    for(var i = 0; i < object["friends"].length; i++){
         if(object.friends[i] === name) {
         return true;
        }  
    }
}
return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
   var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }

    if(current === null){
        return nameList;
    }

    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }

    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    //loop through object key pair
        //if the key exists
            //update the property <key> on <object> with new <value>
        //if the key does not exist
            //create the key
    if(object.hasOwnProperty(key)) {
        return object[key]; //will return value of the key in the object
    } else {
        object.key = "value"; // will create a new key  and assign value
    }

}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for (var i = 0; i < array.length; i++) {
if (object.hasOwnProperty(array[i]) === true) {
    delete object[array[i]];
}
}
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var removedArray = [];
for(var i = 0; i < array.length; i++){
    if(removedArray.indexOf(array[i])=== -1){
        removedArray.push(array[i]);
    }
}
return removedArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}