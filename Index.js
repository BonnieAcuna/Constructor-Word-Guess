const Movie = require('./Word.js');

// const inquirer = require("inquirer");


const startGame = function(){
	this.movies = ["spaceballs", "goodfellas", "jaws", "titanic", "rocky", "batman"];

	this.randomWord = this.movies[ Math.floor(Math.random() * this.movies.length)];
	this.currentGame = new Movie(this.randomWord);
	
}
	
const game = new startGame();
const userGuess = 10;

	
	letTheGameBegin(userGuess);

		function letTheGameBegin(guesses){
			console.log("Guesses left: " + guesses);
			if(game.currentGame.comparingWords() == true){
				console.log("You win");
				return;
			}
			
			if(guesses <= 0){
				console.log("Game Over!");
				return;
			}

		
		console.log(game.currentGame.display());

	
}

startGame();



