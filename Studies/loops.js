/**
 * LOOPS
 * 
 * OBJECTIVE:
 * 0. loops are features of Javscript that repeat(iterate) over or search through data 
 * 1.  loops execute a block of code while iterating over a collection
 * 2. looping can be used to work with data one at a time
 * 
 */
 //TYPES OF LOOPS//
  // for loop:
      // iterating over arrays
       //3 statements needed: initialize the index, condition to stop looping, incrementing or decrementing our index by each loop
       // ex:   
       //forward
        for (var i = 0; i < array.length; i++){
          console.log(arr[i]);
           }
        //backward
        for (var i = arr.length - 1; i >= 0; i--) {
            console.log(arr[i]);
        }
           
 //for-in loop:
       //pulls out all the keys of an object, one by one 
       //ex:
           for (var key in person){
           
          }
  //while loop:
       //as long as a condition is true, the loop will execute the block of code
       //ex:
           var sum = +1;
           while (sum < 10){
              console.log(sum);
              sum++;  
           }