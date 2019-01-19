const Movie = require('./Word.js');
const inquirer = require("inquirer");

const movies = ["spaceballs", "goodfellas", "jaws", "titanic", "rocky", "batman"];

let pickedMovie;
let pickedMovies;
let movie;
let guesses;

function game() {
	pickedMovies = [];
	pickedMovie = "";
	guesses = 10;
	if (pickedMovies.length < movies.length) {
		pickedMovie = getMovie();
	} else {
		continueGame();
	}
	if (pickedMovie) {
		movie = new Movie(pickedMovie);
		movie.pickLetters();
		guessMovie();
	}
}

function getMovie() {
	let randomMovie = Math.floor(Math.random() * movies.length);
	let randWord = movies[randomMovie];
	if (pickedMovies.indexOf(randWord) === -1) {
		pickedMovies.push(randWord);
		return randWord;
	} else {
		return getMovie();
	}
}

function guessMovie() {
	let screening = [];
	inquirer.prompt([{
			type: 'input',
			name: 'letterInput',
			message: '\nChoose a letter' + "\n"
				+ movie.displayWord() +
				'\nGuesses left ' + guesses
				+ "\n"
		}])
		.then(function (answer) {
			console.log(answer);
			// console.log(movie);
			movie.guessedWord.forEach(letter => {
				letter.letterMatch(answer.letterInput);
				screening.push(letter.lettersGuessed());
			});
			
			if (guesses > 0 && screening.indexOf("_") !== -1) {
				guesses--;
				if (guesses === 0) {
					console.log("Game Over!");
					newMovie();
				} else {
					guessMovie();
				}
			} else {
				console.log("You guessed the right movie!");
				console.log(movie.displayWord());
				newMovie();
			}
			
		})
		.catch(function(err){
			console.log(err);
		});

	function newMovie() {
		inquirer.prompt([{
				type: 'list',
				name: 'continue',
				message: "Guess Again?",
				choices: ['Yes', 'No']
			}])
			.then(function (data) {
				if (data.continue === "Yes") {
					game();
				} else {
					console.log("Thanks for playing!");
				}
			})
	}
}

game();


