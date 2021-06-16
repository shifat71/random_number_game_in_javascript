  var winCounter=0,loseCounter=0; 
  for(var i=1;i<=5;i++){
  var inputNum=parseInt(prompt("Enter A Number"));
    
     var randomNum = Math.floor(Math.random()*6);

     if(randomNum==inputNum)
     {
         alert("You Have Won! You guessed the number right");
         wonCounter++;
     }
     else{
         alert("You Have Lost! The right number was: "+randomNum);
         loseCounter++;
     }
  }

  document.write("You Have Won: "+winCounter+" Times<br>");
  document.write("You Have Lost: "+loseCounter+" Times");
