//Variables 
var wins = 0;
var remainingGuess= 5;
var lettersGuessed=[];
var losses= 0
// Setting array 
var marvel= ["Captain America","Spider Man Homecoming","Guardians of the Galaxy","Avenegers Infinity War","Xmen First Class","Fantastic Four Rise of the Silver Surfer", "Black Panther","Ant Man and the Wasp",
"Thor The Dark World",];
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
// Choose word randomly
var randomWord = Math.floor(Math.random()* marvel.length);
var choosenWord= marvel[randomWord];
var correctGuessedLetters = [];
var strToPrint = " "
function  disply(){
	document.querySelector("#guessesLeft").innerHTML=remainingGuess;
	document.querySelector("#winsTotal").innerHTML=wins;
	document.querySelector("#lossesTotal").innerHTML=losses
	document.querySelector("#lettersGuessed").innerHTML=lettersGuessed;
	document.querySelector("#wordToGuess").innerHTML=correctGuessedLetters;
	document.querySelector("#lossesTotal").innerHTML=losses
}


function startGame(){
		remainingGuess=5;
		lettersGuessed=[];
		randomWord = Math.floor(Math.random()* marvel.length);
		choosenWord = marvel[randomWord];
	    correctGuessedLetters=choosenWord.split("").map((e,i)=>{
	    	if (e == " ") {
	    		return " "
	    	} else {
	    		return "_"
	    	}
			
		})

		disply()
		
} 
// / press any key to get started, if users guess it right. 
document.onkeyup= function (event){
	var userKey = event.key
	console.log(userKey)

	console.log(strToPrint)


	if(!alpha.includes(userKey)){
		return false 
	}

	if(lettersGuessed.includes(userKey)){
		return false 
	}

	lettersGuessed.push(userKey);
	
	if (remainingGuess<=1){
		alert("You Lose!");
		losses ++ 
//    restart game (call start game function)	
	     startGame();
	}
	if (!choosenWord.includes(event.key)){
		remainingGuess --
	
	}

	if (choosenWord.split("").some( x => x.toLowerCase()==event.key)){
		correctGuessedLetters=correctGuessedLetters.map((e,i)=>{
			if (choosenWord.split("")[i].toLowerCase()==userKey) {
				return choosenWord.split("")[i]
			} else {
				return e
			}
			
		})
	}
	if (!correctGuessedLetters.includes("_")){
// 		The user guess all letter correctly and wins 
		wins ++
		alert("You've Won!")

		// restart game (call start game function)
		 startGame();
	}
		disply();
}

 startGame();
