window.onload = function(){
  $(document).ready(function(){
    //virabile names
    var curValue = 0; // the resultl of equation
    var curEntry ="";
    var equation = ""; // restore any input which compose together as an equation
    var flag = 0;      // indicate 
    var leftside = "";
    var prevEntry = "";
    
    $("button").click(function(){
      curEntry = $(this).attr("value");
      
      if(/[\/\+\-\*]/g.test(curEntry)){
        if(/[^\/\+\-\*]/g.test(prevEntry)){  //advoid repeat opt
          if(flag ===1 ){ // if it is the 2nd opt, we automactically execute the equation
            equation = curValue.toString() + leftside; 
            curValue = eval(equation);  // update curValue 
            $('#display').html(curValue);  //display it
            leftside = "";// set flag as 0
          }
          
        }else{ // if repeat opt, drop all previous opt, always store the most recent one
          leftside = "";
        }
        leftside += curEntry; //add opt to the leftside of equation 
        flag = 1;
      }
      
      if(/[\d]/g.test(curEntry)){
        if(flag == 0){  //no opt just update curValue as curEntry
          curValue = eval(curEntry);          
        }
        else{ //come after the 1st opt 
          leftside += curEntry; // and just add to the leftside of equation
        }
        $('#display').html(curEntry); //display this number
      }
      prevEntry = curEntry; // update prevEntry, if not curEntry may be modified
      
      if(curEntry === '='){
        equation = curValue.toString() + leftside; 
        curValue = eval(equation);  // update curValue 
        $('#display').html(curValue);  //display it
        flag = 0; // set flag as 0
      }
      
      if(curEntry === 'ac'){
        curValue = 0;
        leftside = "";
        equation = "";
        flag = 0;
        curEntry = "";
        $('#display').html(curValue);
      }
      
      /*if(curEntry === 'ec'){
          
      } */      
    });
  });
}
