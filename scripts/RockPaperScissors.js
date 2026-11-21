let score = JSON.parse(localStorage.getItem('score')) || { 
    wins: 0,
    losses : 0,
    ties: 0
    };

updateScoreElements();
/* or
if (!score){
    score = {  //object for scoring
    wins: 0,
    losses : 0,
    ties: 0
    };
}; */

function pickComputerMove () {
    let randomNumber = Math.random();

    let computerMove='';

    if (randomNumber >= 0 && randomNumber < 1/3){
        computerMove='rock' ; 
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove='paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove='scissors';
    }

    return computerMove;
}

let isAutoplaying = false;
let intervalId;

function autoPlay(){
    if (!isAutoplaying) {
        intervalId = setInterval(function (){ // setInterval returns ID each time they are ne IDs
        const playerMove = pickComputerMove();
        playGame(playerMove);
    }, 1000);
    isAutoplaying = true;
    } else {
        clearInterval(intervalId);
        isAutoplaying = false;
    }
}

function stopPlay(){
    const buttonElement = document.querySelector('.auto-play-button');

    if (buttonElement.innerHTML === 'Auto Play'){
        buttonElement.innerHTML = 'Stop Auto Play';
        buttonElement.classList.add('stop-auto-play');
    } else {
        buttonElement.innerHTML = 'Auto Play'
        buttonElement.classList.remove('stop-auto-play');
    }
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result='';

    if (playerMove === 'scissors'){
        if (computerMove === 'rock'){
            result= 'You Lose';
        } else if (computerMove === 'paper'){
            result='You Win';
        } else if (computerMove === 'scissors'){
            result='Tie'; 
        }

    } else if (playerMove === 'paper'){
        if (computerMove === 'rock'){
            result= 'You Win';
        } else if (computerMove === 'paper'){
            result='Tie';
        } else if (computerMove === 'scissors'){
            result='You Lose'; 
        }
    } else if (playerMove === 'rock') {
        if (computerMove === 'rock'){
            result= 'Tie';
        } else if (computerMove === 'paper'){
            result='You Lose';
        } else if (computerMove === 'scissors'){
            result='You Win'; 
        }
    }

    if (result === 'You Win'){
        score.wins += 1;
    } else if (result === 'You Lose') {
        score.losses += 1;
    } else if (result === 'Tie') {
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score)); // local storage only supports strings

    document.querySelector('.result').innerHTML = result;

    document.querySelector('.moves').innerHTML = `You: <img src="images/${playerMove}-emoji.png" class="move-icon"> AND Computer: <img src="images/${computerMove}-emoji.png" class="move-icon">`;

    updateScoreElements();
}

function updateScoreElements() {
    document.querySelector('.score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;

}

function resetScore() {
    score.wins=0; 
    score.losses=0; 
    score.ties=0; 
    localStorage.removeItem('score');

    updateScoreElements();

    alert(`Scores are reset. Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
}