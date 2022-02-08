// ---------------- global variables ----------------
// initialize choices foundations
class Choice {
    constructor(symbol, name){
        this.symbol = symbol;
        this.name = name;
    };
}
const choices = [
    new Choice('✊','rock'),
    new Choice('✋', 'paper'),
    new Choice('✌', 'scissors')
];
const scoreMessage = document.querySelector('.slogan');
const gameOver = document.querySelector('.game-over');
const resultMessage = document.querySelector('.info-message');
//player variables
const playerChoice = document.querySelector('.player-choice');
const options = document.querySelector('.choices');
const playerScoreScrn = document.querySelector('.player-score')
let playerScore = 0;
//computer variables => the array for computer too
const computerChoice = document.querySelector('.computer-choice');
const computerScoreScrn = document.querySelector('.computer-score');
let computerScore = 0;
// ---------------- mani program (events) ----------------

options.addEventListener('click', (e) => {
    setPlayerChoice(e);
    setComputerChoice();
    compareChoices();
    checkGame();
});

// ---------------- functions ----------------
function setPlayerChoice(e){
    playerChoice.textContent=e.target.textContent;
    playerChoice.dataset.id=e.target.dataset.id;
}

function setComputerChoice(){
    const newChoice = choices[Math.floor(Math.random()*choices.length)];
    computerChoice.textContent = newChoice.symbol;
    computerChoice.dataset.id = newChoice.name;
}

function compareChoices(){
    //current computer choice
    const computer = computerChoice.dataset.id;
    //current player choice
    const player = playerChoice.dataset.id;
    if (computer === player){
        scoreMessage.textContent = `it's a tie`
    }
    else if (
        (computer === 'rock' && player === 'scissors')||
        (computer === 'paper' && player === 'rock')||
        (computer === 'scissors' && player === 'paper')
    ) {
        computerScore ++;
        computerScoreScrn.textContent = computerScore;
        scoreMessage.textContent = `computer wins ${computer} defeat ${player}`;
    }
    else if (
        (player === 'rock' && computer === 'scissors')||
        (player === 'paper' && computer === 'rock')||
        (player === 'scissors' && computer === 'paper')
    ) {
        playerScore ++;
        playerScoreScrn.textContent = playerScore;
        scoreMessage.textContent = `player wins ${player} defeat ${computer}`;
    }
}

function checkGame() {
    if (playerScore >=5 || computerScore >=5) {
        gameOver.classList.add('show-status');
        if (computerScore > playerScore) 
            resultMessage.textContent = 'you lost';
    }
}