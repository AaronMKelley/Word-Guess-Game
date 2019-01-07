// working js. 


// press any key to get started 
document.onkeyup= function (event){
	var keyword= String.fromCharCode(event.keyCode)
	if (keyword.indexOf(choosenWord) > -1)
		console.log(true);
}


// Setting array 
// function randomWordGenerator(){
var marvel= ["Captain America","Spider-Man Homecoming","Guardians of the Galaxy","Avenegers Infinity War"];
var randomWord = Math.floor(Math.random()* marvel.length);
var underscore= [];
var choosenWord= marvel[randomWord];
 for (var i=0;i<choosenWord.length;i++){
 	underscore.push('_');
 	}
console.log(underscore);
