/**
 * FUNCTIONS:
 * 0.  enclose a block of code an dexecute the code whenever and how the
 * the programmer chooses
 * 1. instructs the code should to do a scpedic action
 * 2. Two phases of using function: declaration & invocation
 * 3. 
 */

//Parameter vs Argumments//
//parameters are inputs/variable we use when designing a function
//arguments are real values used to pass into the function when it is invoked
    function addNumber(x, y){ //x & y are parameters
         return x + y;
    }

    var sum = addNumber(5, 6); //5 & 6 are the arguments we use in place of the arguments during invocation
 

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
(function () {
    //...
 });

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

//Scope//
//Scopes are where variables and constants are accessible. They can either be globally
//locally scoped. Local scopes are local to the body of a function. This is where the functions variable are 
//protect their variables
    function greeting(){
        var response = "hello";
        console.log(response); //only available within the function
    }
    console.log(response); // prints a reference error

    let x = 2; //global scope
    function functioning(){
        x = 10; //function scope
    }
    console.log(x); // prints 2
    functioning(); //invoke the function
    console.log(x); //prints 10 since the function has been invoked and value is accessible

//Closure//
//the abiility have access to values by placing them in function bodies
//Even references variable within the parent scope from the inner function
function add(x) {
    return function(y) {
      return x + y;
    };
  }

