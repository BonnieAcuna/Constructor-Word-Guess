function Letter(letter) {
    this.letter = letter;
    this.guessed = false;

    
    this.lettersGuessed = function() {
      if (this.guessed === false) {  
        return "_";
      } else {
        return this.letter;
      }
    }
    this.letterMatch = function(letter) {
      const lettersMatch = letter.toLowerCase() === this.letter.toLowerCase();
      if(lettersMatch){
        this.guessed = true;
      }
      return this.guessed;
    }
  }

module.exports = Letter;