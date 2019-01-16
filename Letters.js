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
  }

module.exports = Letter;