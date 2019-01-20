const Letter = require('./Letters.js');

const Movie = function(word){
	
	this.word = word;
	this.guessedWord = [];
	
	this.guesses = [];



	this.pickLetters = function(){
		for(let i = 0; i < this.word.length; i++){
			let newLetter = new Letter(this.word[i]);
			this.guessedWord.push(newLetter);

		}
	}

	this.rightLetter = function(guessLetter){
		let found = false;
		console.log(guessLetter)
		for(let i = 0; i < this.guesses.length; i++) {
			if(this.guesses[i].letterInput == guessLetter.letterInput){
				
				console.log("You've already guessed this letter.");
				found = true;
				break;
			}
		}

			if (!found) {
				this.guesses.push(guessLetter);
			}
		
	}
	
 	this.isWordComplete = function(){
		 let wordCompleted = true;
		 
		 this.guessedWord.map(function(letter){
			if(!letter.guessed){
				wordCompleted = false;
			}
		 });

		 return wordCompleted;
 	}
 	
	this.displayWord = function(){
		let emptyString = "";
			
		for(let i = 0; i <this.guessedWord.length; i++){
			emptyString += this.guessedWord[i].lettersGuessed() + " ";
		}
		return emptyString;
	}
	
} 




module.exports = Movie;

