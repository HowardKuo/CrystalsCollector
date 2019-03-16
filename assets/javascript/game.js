var targetScore,
    totalScore,
    rubyValue,
    sapphireValue,
    citrineValue,
    emeraldValue,
    winCounter = 0,
    lossCounter = 0

$(document).ready(function() {
    startGame();
});

function startGame() {
    targetScore = Math.floor(Math.random() * 101) + 19;
    totalScore = 0;
    rubyValue = Math.floor(Math.random() * 11) + 1;
    sapphireValue = Math.floor(Math.random() * 11) + 1;
    citrineValue = Math.floor(Math.random() * 11) + 1;
    emeraldValue = Math.floor(Math.random() * 11) + 1;
    $('.playAgain').text('');
    $('.targetNumber').text(targetScore);
    $('.gemsTotal').text(totalScore);
    $('.redGem img').attr('pointValue', rubyValue);
    $('.blueGem img').attr('pointValue', sapphireValue);
    $('.yellowGem img').attr('pointValue', citrineValue);
    $('.greenGem img').attr('pointValue', emeraldValue);
    $('.winsTotal').text(winCounter);
    $('.lossTotal').text(lossCounter);
    $('.redGem img').on('click', function(){
        totalScore += parseInt($('.redGem img').attr('pointValue'));
        $('.gemsTotal').text(totalScore);
        scoreCheck();
    });
    $('.blueGem img').on('click', function(){
        totalScore += parseInt($('.blueGem img').attr('pointValue'));
        $('.gemsTotal').text(totalScore);
        scoreCheck();
    });
    $('.yellowGem img').on('click', function(){
        totalScore += parseInt($('.yellowGem img').attr('pointValue'));
        $('.gemsTotal').text(totalScore);
        scoreCheck();
    });
    $('.greenGem img').on('click', function(){
        totalScore += parseInt($('.greenGem img').attr('pointValue'));
        $('.gemsTotal').text(totalScore);
        scoreCheck();
    });
}

function scoreCheck() {
    if (totalScore === targetScore) {
        winCounter++
        $('.redGem img').off('click');
        $('.blueGem img').off('click');
        $('.yellowGem img').off('click');
        $('.greenGem img').off('click');
        endGame();
    }
    
    else if (totalScore > targetScore) {
        lossCounter++
        $('.redGem img').off('click');
        $('.blueGem img').off('click');
        $('.yellowGem img').off('click');
        $('.greenGem img').off('click');
        endGame();
    }
}

function endGame() {
    console.log(winCounter)
    console.log(lossCounter)
    $('.winsTotal').text(winCounter);
    $('.lossTotal').text(lossCounter);  
    $('.playAgain').text('Click here to play again');
    $('.playAgain').on("click", function() {
        startGame();
        $('.playAgain').off("click");
    }) 
}


