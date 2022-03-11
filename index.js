// number guessing game 

const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function(){
   let guess = document.getElementById("guessField").value;
   guesses +=1;
   if(guess == answer){
       alert(`${answer} is the #. It took you ${guesses} guesses`)
   }
   else if(guess < 1 && guess < answer){
       alert("Pick # from 1 to 10!");
   }
   else if(guess<answer){
       alert("Too small!");
   }
   else if(guess > 10){
       alert("Pick # from 1 to 10!"); 
  }
   else{
       alert("Too large");
   }
}
