/**
 * CONTROL-FLOW
 * 0. conditional statements control the flow of the code by making decision via  true or false questions
 * 1. if- statments have their own chains or an ability to have multiple conditions that decide whether which code runs under what condition
 * 2. switch statement match an expression's values to a case and execute statements associated with it
 */




//if statements//
// you must use an if statement to start a conditional block, then chain together any amount of else-if statemwnts under
//else must end the chain

/**
 * SYNTAX
 * if (condition1) {
  //  block of code to be executed if condition1 is true
} else if (condition2) {
  //  block of code to be executed if the condition1 is false and condition2 is true
} else {
  //  block of code to be executed if the condition1 is false and condition2 is false
}
 */
    var x = 3;
    if(x = 3){
        number = "exact";
    } else if(x < 3){
        number = "too small";
    } else {
        number = "too big";
    } //result of numbr will be "exact" since the code has

// switch //
/**
 * switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
 */

switch (expr) {
    case 'Oranges':
      console.log('Oranges are $0.59 a pound.');
      break;
    case 'Apples':
      console.log('Apples are $0.32 a pound.');
      break;
    case 'Bananas':
      console.log('Bananas are $0.48 a pound.');
      break;
    case 'Cherries':
      console.log('Cherries are $3.00 a pound.');
      break;
    case 'Mangoes':
    case 'Papayas':
      console.log('Mangoes and papayas are $2.79 a pound.');
      break;
    default:
      console.log('Sorry, we are out of ' + expr + '.');
  }
  
  console.log("Is there anything else you'd like?"); //if expr evaluates to Bananas, the program matches the value with case case 'Bananas' and executes the associated statement
   
