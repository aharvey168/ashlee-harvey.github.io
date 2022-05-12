// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *     npm start --prefix ./ashlee-harvey.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */
var maleCount  = function(array){
    var male = _.filter(array, function(customer){
    if(customer.gender === "male") {
        return true;
    } else {
        return false; 
    }
})
return male.length;
}


var femaleCount = function(array){
    var female = _.reduce(array, function(accumulator, current, index, array){
        if(current.gender === "female"){
            accumulator += 1;
        }
        return accumulator;
    }, 0)
    return female;
}; 

var oldestCustomer = function(array){
    //createa variable named oldest that is the oldest customer in the array
        //if the current customer is oldest, then return the customer nam
        //else the current customer is younger, the next customer is oldest
        var old = array.reduce(function(accumulator, current) {
            //determne if accumulator has a greater age than current
            if(accumulator.age > current.age) {
               return accumulator;
            } else {
                return current;
            }
        });
        return old.name;
    }


var youngestCustomer = function(array) {
    var young = array.reduce(function(accumulator, current) {
        //determne if accumulator has a greater age than current
        if(accumulator.age < current.age) {
           return accumulator;
        } else {
            return current;
        }
    });
    return young.name;

};

var averageBalance = function(array) {
//     var result = _.filter(array, function(customers) {
//         if (customers.balance > 1) {
//             return true
//         } else {return false}
//     })
//     return result / array.length
// };
var average = _.reduce(array, function(total, customer) {
    var balance = customer.balance.replace(/[$,]/g, "");
    var balanceNum = parseFloat(balance);
    total = (total + balanceNum);
    return total;
}, 0)
return  average / array.length;

}
// const avg = scores.reduce((accumulator, currentValue) => accumulator + currentValue)/scores.length;
// return avg;
// }


var firstLetterCount = function(array, letter) {
    var count = _.filter(array, function(customers) {
        if (customers.name.charAt(0).toUpperCase() === letter|| customers.name.charAt(0).toLowerCase() === letter) {
            return true
        } else {
            return false
        }
    });
    return count.length
};

var friendFirstLetterCount = function(array, name, letter) {
    let namesArray = _.pluck(array, "name");
    let friendsArray = _.pluck(array, "friends");
    var count = 0;
    var index = 0;

    for (let i = 0; i < namesArray.length; i++){
        if(name === namesArray[i]){
            index = i;

        }
    }
     let friendList = friendsArray[index];
     for( let i = 0; i < friendList.length; i++){
        if (friendList[i].name.charAt(0).toUpperCase() === letter.toUpperCase()) {
            count++;
        }
     }
     return count;
}

var friendsCount = function(array, name) {
//create an array to hold the names
var friendNames = [];
    //iterate through the customers array
    for (let i = 0; i < array.length; i++){
        //iterate through the current object's friends array
        for(let j = 0; j < array[i].friends.length; j++){
            //determine if current object has a name that matches the input name
            if(array[i].friends[j].name === name){
                //if true, push the name into the new array
                friendNames.push(array[i].name);
            }     
        }      
    }
    //return output array
    return friendNames;
}

var topThreeTags = function(customers) {
//     var topThree = [];
//     var allTags = [];
    
//   var tag =  _.map(customers, func(customer)) {
      
//     topThree.push(customer.tag);
//     }
//     _.filter(allTags, function(value, curr, collection) {
//           if (test(value.tags === curr[tag])) {
//               topThree.push(curr);
//           }
//       }
    
//     }
    
//     return topThree;
    };

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
