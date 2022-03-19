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
        document.getElementById("message").innerHTML = "You win!";
        document.getElementById("wins").innerHTML = "Wins: " + winCount;
    } else {
        lossCount += 1;
        // if the numbers don't match, change the div#message element's text to a random losing message from the array above
        document.getElementById("message").innerHTML = losing[Math.floor(Math.random()*losing.length)];
        document.getElementById("losses").innerHTML = "Losses: " + lossCount;
    }
}
