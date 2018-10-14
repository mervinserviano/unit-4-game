var targetNumber;
var totalScore = 0;
var winCount = 0;
var lossCount = 0;

var crystal1;
var crystal2;
var crystal3;
var crystal4;

function resetGame() {
    targetNumber = Math.floor(Math.random() * 101) + 19;
    crystal1 = Math.floor(Math.random() * 12) + 1;
    crystal2 = Math.floor(Math.random() * 12) + 1;
    crystal3 = Math.floor(Math.random() * 12) + 1;
    crystal4 = Math.floor(Math.random() * 12) + 1;
    totalScore = 0
    $("#wins").text(winCount)
    $("#loss").text(lossCount)
    $("#total-score").text(totalScore)
    $("#random-number").text(targetNumber);
}

function setScore(crystalValue) {
    totalScore += crystalValue
    $("#total-score").text(totalScore)
    if (totalScore === randomNumber) {
        wins++;
        resetGame();
        }
    else if (totalScore >= randomNumber) {
        loses++;
        resetGame();
    };
}
resetGame();

$(document).ready(function () {

    $(".crystal1").on("click", function() {
        setScore(crystal1);
    });

    $(".crystal2").on("click", function() {
        setScore(crystal2);
    });

    $(".crystal3").on("click", function() {
        setScore(crystal3);
    });

    $(".crystal4").on("click", function() {
        setScore(crystal4);
    });
});

//2. Player clicks on crystal images and add specific amount of points to player total score.
/*The player will have to guess the answer, just like in Word Guess. This time, though, the player will guess with numbers instead of letters. 

3. Here's how the app works:

   * There will be four crystals displayed as buttons on the page.

   * The player will be shown a random number at the start of the game.

   * When the player clicks on a crystal, it will add a specific amount of points to the player's total score. 

     * Your game will hide this amount until the player clicks a crystal.
     * When they do click one, update the player's score counter.

   * The player wins if their total score matches the random number from the beginning of the game.

   * The player loses if their score goes above the random number.

   * The game restarts whenever the player wins or loses.

     * When the game begins again, the player should see a new random number. Also, all the crystals will have four new hidden values. Of course, the user's score (and score counter) will reset to zero.

   * The app should show the number of games the player wins and loses. To that end, do not refresh the page as a means to restart the game.

##### Option 1 Game design notes

* The random number shown at the start of the game should be between 19 - 120.

* Each crystal should have a random hidden value between 1 - 12.*/