const Letter = require('./Letters.js');

const Movie = function(words){
	
	this.words = words;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

	
	this.grabLetters = function(){
		for(let i = 0; i <this.words.length; i++){
			let newLetter = new Letter(this.words[i]);
			this.guessedWord.push(newLetter);

		}
	}
	this.pickLetters();

	this.rightLetter = function(guessLetter){
		for(let i = 0; i <this.guesses.length; i++){
			if(guessLetter == this.guesses[i]){
				return true;
			}
		}
		console.log(guessLetter);
		const added = false;

		this.guesses.push(guessLetter);
		
		for(let i = 0; i <this.guessedWord.length;i++){
			
			if(this.guessedWord[i].letterin(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}
	
 	this.comparingWords = function(){
 		for(let i = 0; i < this.words.length; i++){
 			
 			if(this.words.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}
 	
	this.display = function(){
		let emptyString = "";
			
		for(let i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].current + " ";
		}
		return emptyString;
	}
	
} 




module.exports = Movie;

