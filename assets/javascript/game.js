//Global Variables Needed =================================================================================

var targetScore,
    totalScore,
    winCounter = 0,
    lossCounter = 0;

//Functions Needed ========================================================================================

$(document).ready(function() {
    startGame();
});

//This function resets all needed variables. It also removes the play again text if it is there.
function startGame() {
    targetScore = Math.floor(Math.random() * 101) + 19;
    totalScore = 0;

    $('.playAgain').text('');
    $('.targetNumber').text(targetScore);
    $('.gemsTotal').text(totalScore);
    assignValue();
    //This on click function adds the assigned value of the glicked gem to the total score.
    $('.redGem img, .blueGem img, .yellowGem img, .greenGem img').on('click', function() {
        totalScore += parseInt($(this).attr('pointValue'));
        $('.gemsTotal').text(totalScore);
        scoreCheck();
    });
}

//This function creates an array and will generate 4 unique numbers and assign them to each gem.
function assignValue() {
    var gemValues = [];
    while (gemValues.length < 4) {
        var temp = Math.floor(Math.random() * 11) + 1;
        if (gemValues.indexOf(temp) === -1) {
            gemValues.push(temp);
        }
    }
    $('.redGem img').attr('pointValue', gemValues[0]);
    $('.blueGem img').attr('pointValue', gemValues[1]);
    $('.yellowGem img').attr('pointValue', gemValues[2]);
    $('.greenGem img').attr('pointValue', gemValues[3]);
}

//This function checks for end game conditions after each click and updates wins and losses counter.
function scoreCheck() {
    if (totalScore === targetScore) {
        winCounter++
        $('.playAgain').text('Nice job! Click here to play again');
        $('.winsTotal').text(winCounter);
        endGame();
    }
    
    else if (totalScore > targetScore) {
        lossCounter++
        $('.playAgain').text('Too bad... Click here to play again');
        $('.lossTotal').text(lossCounter); 
        endGame();
    }
}

//This function runs when an end game condition is met and makes the play again text appear and turns clicks off.
function endGame() { 
    $('.redGem img').off('click');
    $('.blueGem img').off('click');
    $('.yellowGem img').off('click');
    $('.greenGem img').off('click');
    //This on click function turns on the reset functionality and turns it off after it is clicked.
    $('.playAgain').on('click', function() {
        startGame();
        $('.playAgain').off('click');
    }) 
}


