const Letter = require('./Letters.js');

const Movie = function(word){
	
	this.word = word;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

	
	this.pickLetters = function(){
		for(let i = 0; i <this.word.length; i++){
			let newLetter = new Letter(this.word[i]);
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
			
			if(this.guessedWord[i].rightLetter(guessLetter)){
				this.guessedWord[i].showsLetter = true;
				added = true;
			} 
		}
		return added;

	}
	
 	this.comparingWords = function(){
 		for(let i = 0; i < this.word.length; i++){
 			
 			if(this.word.charAt(i) != this.guessedWord[i].current){
 				return false;
 			}

 		}
 				return true;
 	}
 	
	this.display = function(){
		let emptyString = "";
			
		for(let i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].lettersGuessed() + " ";
		}
		return emptyString;
	}
	
} 




module.exports = Movie;

