
// TIC TAC TOE PROJECT //



// declaring all variables at the top, may change this?

const squares = document.getElementsByClassName("square")
console.log('squares:', squares);

const playerOneCounter = document.getElementById("playerOneCounter");
const playerTwoCounter = document.getElementById("playerTwoCounter");

const gameOverMessage = document.getElementById("gameOver");
const restart = document.getElementById("restart");

const gameSquare = document.getElementById("gameSquare")

// variables that determine who's turn it is, player one will start as true and player two will start as false because one needs to be able to begin
let playerOneTurn = true;
let playerTwoTurn = false;


// this variable holds the state of our game & the process of playing it, the array represents each square & keeps track of what user is using each square. index represents each squares position in the array and the user is initialized with null and will change to player one or two when clicked and change color.
let squareStuff = [
    {index: 0, user: null},
    {index: 1, user: null},
    {index: 2, user: null},
    {index: 3, user: null},
    {index: 4, user: null},
    {index: 5, user: null},
    {index: 6, user: null},
    {index: 7, user: null},
    {index: 8, user: null},
   
];

// the endGame variable will start as false and return true when the game has ended.
let endGame = false;

// these variables will represent each players counter so they initialize at 0
let playerOneScore = 0;
let playerTwoScore = 0;

restart.addEventListener("click", () => {
    console.log('clicked');
    Array.from(squares).forEach((square, index) => {
        square.style = "background-color: white";
    });

    gameOverMessage.innerHTML = "";
    gameSquare.setAttribute("style","pointer-events: auto;");

    let squareStuff = [
        {index: 0, user: null},
        {index: 1, user: null},
        {index: 2, user: null},
        {index: 3, user: null},
        {index: 4, user: null},
        {index: 5, user: null},
        {index: 6, user: null},
        {index: 7, user: null},
        {index: 8, user: null}
    ]
});

// functionality for making each square change colors when clicked, we're using Array.from() because this is an HTML collection. then we attach .forEach to loop through the array, basically saying for each square in the varable 'squares' lets add a click event.
Array.from(squares).forEach((square, index) => {
    square.addEventListener("click", () => {
        console.log('clicked');


        // functionality for turns, player one will choose a square then hand the turn to player two. if player one = true (its initialized at true) change the background color to pink (using .style) and to declare that first turn as player one we access the squareStuff array & grab the index. and change the value changes to player one.

        if(playerOneTurn == true) {

            // adding this to avoid being able to change the squares after making a choice. using .getAttribute to check the style, if its equal to red (other players color) then it will just return. so it will stay the same. if not then it will change to pink. adding equal but opposite to playerTwoTurn.
            if (square.getAttribute("style") == "background-color: red;") {
                return;
            }
            square.style = "background-color: pink";
            squareStuff[index].user = "playerOne";

// adding an else if for the next turn, if player two returns true (its initialized at false) then change the background color to red. repeat same steps.

        } else if (playerTwoTurn == true) {

            if (square.getAttribute("style") == "background-color: pink;") {
                return;
            }
            square.style = "background-color: red";
            squareStuff[index].user = "playerTwo";
        }

   // adding functionality here to change turns (otherwise player one would always be true) so were using ! to make it false. adding the same thing for player two. this way we can alternate between two values.

        playerOneTurn = !playerOneTurn;
        playerTwoTurn = !playerTwoTurn;
        console.log("squareStuff: ", squareStuff);


        let playerOnePink = [];
        let playerTwoRed = [];


        const diagonalTopLeft = [0, 4, 8];
        const diagonalTopRight = [2, 4, 6];


        const rowOne = [0, 1, 2];
        const rowTwo = [3, 4, 5];
        const rowThree = [6, 7, 8];

        const columnOne = [0, 3, 6];
        const columnTwo = [1, 4, 7];
        const columnThree = [2, 5, 8];


        squareStuff.forEach(square => {
            if (square.user == "playerOne") {
            playerOnePink.push(square.index);
        
        } if (square.user == "playerTwo") {
            playerTwoRed.push(square.index);
        }
    });  
        console.log("playerOnePink: " , playerOnePink)
        console.log("playerTwoRed: " , playerTwoRed)

        if (
            diagonalTopLeft.every((current) => playerOnePink.includes(current)) ||
            diagonalTopRight.every((current) => playerOnePink.includes(current)) ||
            rowOne.every((current) => playerOnePink.includes(current)) ||
            rowTwo.every((current) => playerOnePink.includes(current)) ||
            rowThree.every((current) => playerOnePink.includes(current)) ||
            columnOne.every((current) => playerOnePink.includes(current)) ||
            columnTwo.every((current) => playerOnePink.includes(current)) ||
            columnThree.every((current) => playerOnePink.includes(current))

        ) {

            console.log('pink is the winner');
            
            playerOneScore = playerOneScore + 1;
            endGame = true;
        }
        if (
            diagonalTopLeft.every((current) => playerTwoRed.includes(current)) ||
            diagonalTopRight.every((current) => playerTwoRed.includes(current)) ||
            rowOne.every((current) => playerTwoRed.includes(current)) ||
            rowTwo.every((current) => playerTwoRed.includes(current)) ||
            rowThree.every((current) => playerTwoRed.includes(current)) ||
            columnOne.every((current) => playerTwoRed.includes(current)) ||
            columnTwo.every((current) => playerTwoRed.includes(current)) ||
            columnThree.every((current) => playerTwoRed.includes(current))

        ) {

        console.log('red is the winner');
        playerTwoScore = playerTwoScore + 1;
        endGame = true;
    }

    if (endGame === true) {
        gameOverMessage.innerHTML = "Game Over";
        playerOneCounter.innerHTML = playerOneScore;
        playerTwoCounter.innerHTML = playerTwoScore;

        gameSquare.setAttribute("style", "pointer-events: none;");

        endGame = false;

        squareStuff = [
            {index: 0, user: null},
            {index: 1, user: null},
            {index: 2, user: null},
            {index: 3, user: null},
            {index: 4, user: null},
            {index: 5, user: null},
            {index: 6, user: null},
            {index: 7, user: null},
            {index: 8, user: null},
        ]


    }
    });
});