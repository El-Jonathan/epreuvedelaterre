// liste triée

function bubbleSort(array) {
    var done = false;
    while (!done) {
      done = true;
      
      
      for (var i = 1; i < array.length; i += 1) {
        
        if (array[i - 1] > array[i]) {
          done = false;
          console.log("pas triée");
          return false;
        }
       
        }
      
    }
    done = true;
    console.log("triée");
    return true;
  
  }
  
  var numbers = [130, 132, 150, 160];
  bubbleSort(numbers);
  console.log(numbers);
    




        
        



    
       
    