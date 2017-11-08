window.onload = function(){
  $(document).ready(function(){
    //virabile names
    var curValue = 0; // the resultl of equation
    var curEntry ="";
    var equation = ""; // restore any input which compose together as equation
    var flag = 0;      // indicate 
    var rightside = "";
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
      
      if(curEntry === 'ec'){
          
      }
      
      
      
      // if press "AC"
      //set curValue = 0
      //set equation = 0
      
      /*if(curEntry === "="){
        // calculate the equation
        curValue = eval(equation);
        // output result which is curValue
        $("#display").html(curValue);
      }else{
      equation += curEntry; //* get clicked button's value and append it to the equation string
      $("#display").html(equation);
      }
      */

      /*display
        (1) AC -- curValue
        (2) =  -- curValue(excute equation, assign the result to curValue)
        (3) 2nd opt -- curValue like(2)
        (4) enter a number after 1st opt -- number
        (5) never display any operaters

        right side = curValue
        left side += curEntry
          Initially
          if curEntry  
      */
      /*if curValue = 0
          curEntry can be an operater
            equation = curvalue + curEntry e.g. equation = 0 +/-
              if entry repeat operaters, they are invalid, ignore them
              numbers should come after
                after the number, if press any operater, that is the second operater in equation, then we automatically excute it and update the curValue, use a flag to indicate which is the second one
                since curEntry is operater, update equation
          curEntry can be a number
            just update curValue equals that number
      */
      
    });
  });
}