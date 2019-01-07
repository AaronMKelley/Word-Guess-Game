

// 4. Display the following on the page:


// wins varibale # guessing, # guesses ramianijng, array for guesses to choose from
// have a start game function in begin - will hold all start and restarting. 

// 6. Wins: (# of times user guessed the word correctly).

//    * If the word is `madonna`, display it like this when the game starts: `_ _ _ _ _ _ _`.

//    * As the user guesses the correct letters, reveal them: `m a d o _  _ a`.


// All neec js.
// 7. Number of Guesses Remaining: (# of guesses remaining for the user).

// 8. Letters Already Guessed: (Letters the user has guessed, displayed like `L Z Y H`).

// 9. After the user wins/loses the game should automatically choose another word and make the user play it.

var wins = 0;
var remainingGuess= 8;
var lettersGuessed=[];
var losses= 0
// Setting array 
var marvel= ["Captain America","Spider Man Homecoming","Guardians of the Galaxy","Avenegers Infinity War","Xmen First Class",];
var images =["assets/images/redskull.jpg","assets/images/Vulture.jpg","assets/images/RonantheAccusor.jpg,","assets/images/Thanos.jpg","assets/images/sebass.jpg" ]
var alpha = "abcdefghijklmnopqrstuvwxyz".split("");
// Choose word randomly
var randomWord = Math.floor(Math.random()* marvel.length);
var choosenWord= marvel[randomWord];
var correctGuessedLetters = [];
var strToPrint = " "
// var marvelImage=["assets/images/redskull.jpg","assets/images/Vulture.jpg","assets/images/RonantheAccusor.jpg","assets/images/Thanos.jpg","assets/images/sebass.jpg"];
// // / test
function  disply(){
	document.querySelector("#guessesLeft").innerHTML=remainingGuess;
	document.querySelector("#winsTotal").innerHTML=wins;
	document.querySelector("#lettersGuessed").innerHTML=lettersGuessed;
 	document.querySelector("#wordToGuess").innerHTML=correctGuessedLetters;
 	document.querySelector("#photo").innerHTML=images[random];
}


function startGame(){
		remainingGuess=8;
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
//    restart game (call start game function)	
	     startGame();
	}
	if (!choosenWord.includes(event.key)){
		remainingGuess --
	
	}

	if (choosenWord.split("").some( x => x.toLowerCase()==event.key)){
		//correctGuessedLetters.push(lettersGuessed)
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
