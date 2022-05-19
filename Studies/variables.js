/**
 * VARIABLES
 * 0. USE: To hold things in memory during the life-cycle of a program, we can use variables
 * 
 * 1. Variable are named indentifiers that can point to values ofa particular type.
 * 
 * 2. Variable types: number, string, boolean, array, object
 * 
 * 3. TWO Phases of USE: declaration and initialization
 */

//1. Declaration//
 // TO create variable we use the keyword follwed by a name for the variable name. key to use words: (let, var, const)
    //Examples:
            var	age; //global scope
            let	named; //block scope local variable
            const anAdult; //block scope
    
//2. Initialization//
// assingning a value to the variable by place the assignment operator follows by the variable n
    //Examples:
    var	age = 28;
    let	name = Ashlee;	
    const amAnAdult = true;

//3. Data Types//
//Primitive 
       var message = "Can I help you?" //String 
        var sum = 9; //Number 
        var isTrue = false; //Boolean
//Complex
        var person = { name: "David"};  //Object
        var array = [1, 2, 3, 4]; //Array
        var arrowSum = (x, y) => (x + y); //Function

//4Keywords//
//Var Keyword
        //description: can be reassigned, hoisted, function scoped only
        //example:
        var class = "Bootcamp";
        //reassignemnt
        class = "precourse"; //
//Let Keyword
        //description: can be reassigned, no hoisting, block scoped, function scoped, block scoped
        //example
        let canDrive = true;
        //reassignemnt
        canDrive = false; //allowed

//Const Keyword
        //description: cannot be reassigned, no hoisting, block scoped, function scoped, block scoped
        //example
        const fruit = "grapes";
        //reassignemnt
        fruit = "strawberries"; //not allowed

//Hoisting//
//Before a program can be executed, the all declared varriables names with the var keyword and declared functions are 
// dragged or hoisted ot the top of the program. 
        console.log(active); //prints undefined
        var active = true;
        console.log(active); //prints true

//let and const values are not hoisted are not and when refernces will print a reference error before declaration
        console.log(animal); //prints reference error
        console.log(firstName); //prints reference error
        let animal = "dog";
        const firstName = "Ashlee"




    
 