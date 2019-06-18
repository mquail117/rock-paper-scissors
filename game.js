function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function computerPlay() {
    random = getRandomInt(1,3)
    let play;
    switch(random) {
        case 1:
            play = "rock";
            break;
        case 2:
            play = "paper";
            break;
        case 3:
            play = "scissors";
            break;
    }
    return play;
}
function playerPlay() {
    let play = prompt("Enter your play.").toLowerCase();
    if (play == "rock" || play == "paper" || play == "scissors") {
        return play; 
    }
    else { 
        alert("That is not a valid play. Please try again.");
        playerPlay();
    }
}
function playRound(playerSelection) {
    computerSelection = computerPlay();
    if (playerSelection == computerSelection) {
        result.innerHTML = "<p>Round " + round + " is a tie! Both players chose " + playerSelection + ".</p>";
        tie();
    } else {
        if (playerSelection == "rock"){
            if (computerSelection == "scissors") {
                result.innerHTML = "<p>You win round " + round + "! Rock crushes scissors.</p>";
                playerWin();
            } else {
                result.innerHTML = "<p>You lose round " + round + "! Paper covers rock.</p>";
                computerWin()
            }
        } else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                result.innerHTML = "<p>You win round " + round + "! Paper covers rock.</p>";
                playerWin();
            }
            else {
                result.innerHTML = "<p>You lose round " + round + "! Scissors cut paper.</p>";
                computerWin()
            }
        } else if (playerSelection == "scissors") {
            if (computerSelection == "paper") {
                result.innerHTML = "<p>You win round " + round + "! Scissors cut paper.</p>";
                playerWin();
            }
            else {
                result.innerHTML = "<p>You lose round " + round + "! Rock crushes scissors.</p>";
                computerWin()
            }
        }
    }
    if (playerWins == 3) {
        endGame("Player");
    }
    if (computerWins == 3) {
        endGame("Computer");
    }
}
function playerWin() {
    playerWins++;
    round++;
    playerScore.innerHTML = playerWins;
    roundNumber.innerHTML = "Round " + round;
}
function computerWin() {
    computerWins++;
    round++;
    computerScore.innerHTML = computerWins;
    roundNumber.innerHTML = "Round " + round;
}
function tie() {
    round++;
    roundNumber.innerHTML = "Round " + round;
}
function initialize() {
    hideElement('#welcome-content');
    showClass('.game');
}
function hideClass(classToHide) {
    nodes = document.querySelectorAll(classToHide);
    nodes.forEach((node) => {
        node.classList.add('hidden');
    });
}
function hideElement(elementToHide) {
    node = document.querySelector(elementToHide);
    node.classList.add('hidden');
}
function showClass(classToShow) {
    nodes = document.querySelectorAll(classToShow);
    nodes.forEach((node) => {
        node.classList.remove('hidden');
    });
}
function showElement(elementToShow) {
    node = document.querySelector(elementToShow);
    node.classList.remove('hidden');
}
function endGame(winner) {
    hideClass('.game');
    endDiv = document.querySelector('#end-container');
    endDiv.innerHTML = "<h1>" + winner + " is the winner!</h1>"
    resetButton = document.createElement('button')
    resetButton.innerHTML = "Play again"
    resetButton.addEventListener('click', function () {
        window.location.reload(true);
    });
    endDiv.appendChild(resetButton);
}
startBtn = document.querySelector('#start');
startBtn.addEventListener('click', initialize)
let round = 1;
let playerWins = 0;
let computerWins = 0;
result = document.querySelector('#result');
playerScore = document.querySelector('#player-score .score');
computerScore = document.querySelector('#computer-score .score');
roundNumber = document.querySelector('#round-number h1');
playRock = document.querySelector('#rock-button');
playRock.addEventListener('click', function () {
    playRound('rock', round);
});
playPaper = document.querySelector('#paper-button');
playPaper.addEventListener('click', function () {
    playRound('paper');
});
playScissors = document.querySelector('#scissors-button');
playScissors.addEventListener('click', function () {
    playRound('scissors');
});