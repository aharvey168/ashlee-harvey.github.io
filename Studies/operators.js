
 /* OPERATORS
 * 
 * OBJECTIVES:
 * - operators act on our data and perform arithmetic operations on them
 * - classifications: 
 *      1. Unary - work with 1 value
 *      2. Binary - work with 2 values
 *      3. Ternary - work with 3 values
 */


  //TYPES//
  
  //1. Comparision compare twp values and evaluate to true or false
               //given x = 5
     
     =	//equal to	
      x = 8	// returns false

      ===	//equal value and equal type	
      x === 5	//returns true

      !=	 //not equal 
      x != 8	//true


      !==	//not equal value or not equal type	
      x !== 5	//false
     
      >	//greater than	
      x > 8	//false

      <	//less than	
      x < 8	//true

      >=	//greater than or equal to	
      x >= 8	//false

      <=	//less than or equal to	
      x <= 8	//true

  //Arithmetic - math function that performs a calculation on two operands
     2 + 3 //Addition
     2 - 3//Subtraction
     2 *  3//Multiplication
     2 / 3 // Division
  // Logical
      && //And Operator
      || //OR Operator
      ! //Bang Operator
  //Assignment = assign values to variable
      let x = y //assigns a value
      x += y //adds a value to a variable
      x -= y //subtracts a value from a variable
      x *= y //multiplies a variable
      x *= y //divides a variable
  /*Ternary(Conditional) - the 3 operands it takes in: condition (?) truthy expression
  (:), and falsy expression
  */
      var beverage = (age >= 21) ? "Beer" : "Juice";   
  //Unary - 1 operand or one value is being worked on
     + //convert the operand into a number
     +3 //returns 3 

     - // convert the operand into a number and becomes negative
     -3 //returns -3 =>

     ++ // Adds one to its operand
     x = 4
     y = x++ //returns y = 4 and  x = 5 =>

     -- //Decrements by one from its operand
     x = 4
     y = x-- //returns y = 4 and  x = 3  

     !  //=> Converts to boolean value then negates it
     !false //returns true

     typeOf //=> returns a string which is the type of the operand
     typeOf 3 //returns "number"
  
 