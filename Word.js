const Letter = require('./Letters.js');

const Movie = function(word){
	
	this.word = word;
	this.guessedWord = [];
	this.youWin = false;
	this.guesses = [];

// console.log(word);

	this.pickLetters = function(){
		for(let i = 0; i < this.word.length; i++){
			let newLetter = new Letter(this.word[i]);
			this.guessedWord.push(newLetter);

		}
	}

	this.rightLetter = function(guessLetter){
		if(this.guesses.indexOf(guessLetter) < 0) {
		this.guesses.push(guessLetter);

		let match = null;

		for(let i = 0; i < this.guessedWord.length; i++){
			const matchedLetter = this.guessedWord[i].letterMatch(guessLetter);
			if(matchedLetter){
				match = guessLetter;
			}
		}
		console.log("IAM THE MATCH"+match);
		if(match){
			console.log('You got a match with letter ' + match);
			console.log(this.displayWord());
			return;
		}
		
		console.log('You did not get a match');
	}
	else {
		console.log('You already guessed this letter');
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

// const someMovie = new Movie('Terminator');
// someMovie.pickLetters();
// console.log(someMovie.display());
// someMovie.rightLetter('t');
// console.log(someMovie.isWordComplete());

// someMovie.rightLetter('e');
// someMovie.rightLetter('r');
// someMovie.rightLetter('m');
// someMovie.rightLetter('i');
// someMovie.rightLetter('n');
// someMovie.rightLetter('a');
// someMovie.rightLetter('o');
// someMovie.rightLetter('r');
// console.log(someMovie.isWordComplete());


module.exports = Movie;

