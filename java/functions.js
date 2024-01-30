
function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var dice = document.getElementById("dice");
    dice.src = "../images/" + randomNumber + ".png";
}


