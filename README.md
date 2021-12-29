# Project 1: Tic Tac Toe Game By Alexis Evans

## Description

###### This is a simple game of Tic Tac Toe that serves as my first opportunity to execute what I've learned in the SEI program so far. This game of Tic Tac Toe has a more minimalist style interface that has a simple aesthetic and uses different colors instead of the traditional X's and O's. [Click this link to play.](https://angry-hodgkin-1ace95.netlify.app)

## Technologies Used
- HTML
- CSS
- Javascript
- Google Fonts

## User Interface

![alt text](https://github.com/alexisjevans/tictactoegame/blob/main/interface.PNG)

## Approach

###### HTML

So I linked all of my files, started with HTML, and created a bunch of div's to hold my classes and ID's for different items on the page. 
This way I am able to reference them in CSS and Javascript. Also added text for the title, player names, counters, and the "new game" button.


###### CSS

I started with some basic CSS & flexbox to structure my page and create my game board. And towards the end I added my button, imported my font, and added more styling.

###### Javascript

This is where it got tricky! But I survived. So using those classes and ID's that I created in the HTML, I declared and initialized variables for player outcomes, the state of the game, winning combinations, etc. Next I added the functionality to be able to click the squares to make them 
change colors and signify turns using if statements and arrays. Added functionality to prevent double clicking on squares after a choice has been made. Added functionality for winning, which is comparing 
winning combos to player outcomes using the OR operator. Also added functionality for the counter by accessing the result of the comparison and increasing the counter by 1. The array that holds the
state of the game re-intializes at the end, and you can restart while each win is still recorded per player.

## User Stories

- As a user, I should be able to start a new tic tac toe game
- As a user, I should be able to click on a square to add X first and then O, and so on
- As a user, I should not be able to click the same square twice
- As a user, I should not be able to continue playing once I win, lose, or tie
- As a user, I should be able to play the game again without refreshing the page

