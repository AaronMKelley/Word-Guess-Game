

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





// Setting array 
var marvel= ["Captain America","Spider-Man Homecoming","Guardians of the Galaxy","Avenegers Infinity War"];
var randomWord = Math.floor(Math.random()* marvel.length);
var choosenWord= marvel[randomWord];
var underscore= [];
console.log(choosenWord);


// Generating randon word and making it underscore
// function randomWordGenerator(){
// var randomWord = Math.floor(Math.random()* marvel.length);
// var choosenWord= marvel[randomWord];
// var underscore= [];
// console.log(choosenWord);

// var generateUnderscore= () => {
// 	for (var i=0;i<choosenWordlength;i++){
// 		underscore.push ('_');
// 		}
// 		return underscore;
// }
// console.log(generateUnderscore());
// }
// // document.onload= function randomWordGenerator(){
// // console.log(generateUnderscore);}

// press any key to get started 
document.onkeyup= function (event){
	console.log(event.key)
}





