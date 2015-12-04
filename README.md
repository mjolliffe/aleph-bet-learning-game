# wdi-game
Aleph Bet Learning Game

##### Links
http://mjolliffe.github.io/wdi-game/
https://trello.com/b/lRzKvH8X/project-1-game

##### Reason for the Game & Approach Taken

The Aleph Bet Learning game is a game created to help English speakers learn the Hebrew alphabet by matching the Hebrew characters with the name of that character. The Hebrew alphabet AKA the Aleph Bet is unique in that it is very intuitive. The names of the characters reflect the sound those characters make. For example, B for Bet which makes the "B" sound.

##### Rules of the Game

1. Press Play: Press play to initiate the timer and enable the boards. If you don't click play, you cannot click any of the words or characters.
2. Click: Click on a Hebrew character.	
3. Match: Match the character in the left box with its name in the right box.	
4. Score: Score 10 points when you make a match. If you miss a match, your opponent must make the correct match or lose his turn.	
5. Win: Earn enough points to beat your opponent and win the game!

##### Explanation of Technologies Used

To create this game I used HTML, CSS, JavaScript, and jQuery. 
HTML: Used to outline the structure of the game and create basic ids and classes to use throughout the other technologies.
CSS: Used to style the game.
JavaScript/jQuery: Used to make the game interactive.
Additional add ons were modals as well as GoogleFonts and FontAwesome Icons.

##### Issues

1. Game always starts with Player 1. 
2. If click a character tile and incorrectly match it with a word tile, then the next player has to chose that tile - this is not the issue, the issue is that the whole board should disable except for that character tile and the word tiles when this happens.
3. Timer has a problem resetting upon clicking reset.

##### Ultimate Vision for the Game

Ideally I would like the game to have multiple levels based on age and user exposure to Hebrew. For example, if you're a young child who has not yet learned to read, the game should be based fully on visuals and audio versus if you are an adult who just wants to quickly brush up on their Hebrew characters.
