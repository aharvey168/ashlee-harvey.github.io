/**
 * FUNCTIONS:
 * 0.  enclose a block of code an dexecute the code whenever and how the
 * the programmer chooses
 * 1. instructs the code should to do a scpedic action
 * 2. Two phases of using function: declaration & invocation
 * 3. 
 */

//Declaration//
//declaring a function creates the function

//example - syntax
function(pararameter){
    //function body: code instruction go here!
}

//named functions - defined with a name
function name(parameter){
    return parameter;
}

//anonymous functions - defined without a name, usually within another func
function named(parameter, anonFunc){
    //perform anonFunc on parameter
}

//function expression - anonymous function assigned to a variable
var func = function(parameter1, parameter2){
    return parameter1 / parameter2;
}


//Invocation//
//invoking a function will run the code within the body of the function
//to call or invoke a function, the name of the function must be referenced 
//then pass any necessary values

//example - with data
function subtract(num1, num2){
    return num1 - num2;
}

console.log(subtract(3, 1)); //prints 2
//invocation syntax: function name(value, value)