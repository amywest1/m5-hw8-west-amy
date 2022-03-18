// Create an Array of at least 3 losing messages
const losing = ["Try again!", "Better luck next time!", "Nothing to see here!", "Your treasure is in another box."]



// Create variables to count wins and losses
var winCount = 0;
var lossCount = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
let mess = document.getElementById('message');
let win = document.getElementById('wins');
let lose = document.getElementById('losses');
// target all .box elements and attach a click event listener to each one using a loop
var boxes = document.querySelectorAll('.box');
var span = document.getElementById('clicked');

boxes.forEach(function(button) {
    button.onclick = chosenBox
})

function chosenBox(event) {
    var boxNumber = event.target.textContent
    parseInt(boxNumber)
    var winBox = Math.floor((Math.random() * 3) + 1);
    if (boxNumber == winBox) {
        winCount += 1;
        // if the numbers match, display a winning message by changing the text content of the div#message element
    } else {
        lossCount += 1;
        // if the numbers don't match, change the div#message element's text to a random losing message from the array above
    }
}
// within each click event...
// determine which box was clicked with 'this.textContent' or event.target.textContent
// convert that value to a Number and store it to a variable

// create a random number between 1-3 and store it to a variable
// This number will represent the winning box

// determine if the box clicked is equal to the random number
// if the numbers match, display a winning message by changing the text content of the div#message element
// if the numbers match, increment wins and display the win count in div#wins

// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses