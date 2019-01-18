const Movie = require('./Word.js');

 const inquirer = require("inquirer");


const Game = function(){
	this.movies = ["spaceballs", "goodfellas", "jaws", "titanic", "rocky", "batman"];

	this.randomWord = this.movies[ Math.floor(Math.random() * this.movies.length)];
	this.currentGame = new Movie(this.randomWord);
	this.promptUserForGuess = function(){
		const self = this;
		inquirer.prompt([{type:'input', name:'letterInput', message:'Choose a letter'}])
		.then(function(answers){
			console.log(answers);
			console.log(self.currentGame);
			self.currentGame.rightLetter(answers.letterInput);
			//need to happen here
		})
		.catch(function(err){
			console.log(err);
		});
;	}
	
}

const myGame = new Game();
myGame.promptUserForGuess();
//console.log(myGame)
	
// const game = new startGame();
// const userGuess = 10;

	
// 	letTheGameBegin(userGuess);

// 		function letTheGameBegin(guesses){
// 			console.log("Guesses left: " + guesses);
// 			if(game.currentGame.comparingWords() == true){
// 				console.log("You win");
// 				return;
// 			}
			
// 			if(guesses <= 0){
// 				console.log("Game Over!");
// 				return;
// 			}

		
// 		console.log(game.currentGame.display());

	
// }

// startGame();



