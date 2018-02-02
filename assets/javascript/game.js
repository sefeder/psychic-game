

var wins = 0;
var losses = 0;
var gLeft = 10;
var lGuessed = [];


// create a variable that codes for the span element with the guessSoFar tag in the html
var userGuessText = document.getElementById("guessSoFar");
// create a variable that codes for the span element with the guessLeft tag in the html
var guessLeftText = document.getElementById("guessLeft");
// create a variable that codes for the span element with the wins tag in the html
var winsText = document.getElementById("wins");
// create a variable that codes for the span element with the losses tag in the html
var lossesText = document.getElementById("losses");



// computer guesses a random letter
function randomCharacter() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr( Math.floor(Math.random() * 26), 1);
}
// that guess is
var compGuess = randomCharacter()
    console.log(compGuess);

// listen for user key stroke
document.onkeyup = function(event) {
 // user hits a random key

// display user's guess    
var userGuess = event.key; 

// enter user's guess into the array, lGuessed, defined above
lGuessed.push(userGuess);

// take the content of the element (span) with the id guessSoFar define it as array lGuessed (use)
userGuessText.textContent = lGuessed.join(", ");

// this function resets the values of the variables (notice they are global (no var))
function reset() {
   //refreshes gLeft to 10
    gLeft = 10;
    // empties lGuessed array
    lGuessed = [];
    // comp guesses a new letter
    compGuess = randomCharacter();
    // take the var from line 12 (html element with guessLeft id) and assign the value of gLeft (now 10 (from line 45)) to it (make it's content "10")
    guessLeftText.textContent = gLeft;
   // take the var from line 10 (html element with guessSoFar id) and assign the value of lGuessed (now [empty array] (from line 47)) to it (make it's content " ")
    userGuessText.textContent = lGuessed;
    console.log(compGuess);
   
}
 

 // wins increases by 1 if user's guess matches comp's guess and they get that alert   
  if (userGuess === compGuess) {
      winsText.textContent = wins+=1;
      letter = compGuess.toUpperCase
      document.getElementById("myAudio").play();
      alert("That's right! It was '" + compGuess + "'! I'm impressed, but I bet you can't do it again!");
// this will reset the game if the user wins
      reset();
      
  // if user guesses wrong, guesses left decreases by 1  
  } else { 
     guessLeft.textContent = gLeft-=1;
     
  }
// if guesses left gets to 0 (or right before that) losses increases by 1 and you get this alert and the game resets
  if (gLeft === 0) {
    lossesText.textContent = losses+=1;
    document.getElementById("myAudio").play();
    alert("Guess you are not a psychic!")
 // this will reset the game if the user loses   
    reset();
  }
        
 }















