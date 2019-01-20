Making the Game:

The page consisted of three Javascript files.  The first was the Letters.js file.  This file found the letters from the random word that was chosen and replaced those letters with an underscore.  Than a function was made to make sure all the letters matched were made to lowercase.  This page is exported to the Word.js file.

The Word.js file required the Letters.js file.  This file had functions to pick letters, find the right letters, to find all the letters to make the word complete and to display the letters in the word.  This page is exported to the index.js file.

The index.js file required the Word.js file.  This file starts the game.  

The Game:

When the user types in node index.js in the bash it will prompt for the user to Choose a Letter.  Underscores will show up to match the random word picked.  After the user types in a letter is will either show up if it matches a letter in the word or it won't.  It will also show the user how many more guesses they have remaining.  If they type in the same letter they have previously used it will prompt to the user that the letter has already been used.  If the user uses all 10 guesses without guessing the word than the game will prompt "Game Over" and ask if the user would like to replay the game.  If they choose yes than the game starts all over and if they choose no than it will say "Thank you for playing".





Click here for video ====> https://drive.google.com/file/d/1FvZbhHFY71MUYLYrb1sCmgCiPXxZjLDN/view
