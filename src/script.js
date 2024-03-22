
function getComputerChoice() {
    
    let choice = Math.random();

    if(choice < (1 / 3)){
        return 'rock';
    }
    else if (choice > (1 / 3) && choice < (2 / 3)){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

function gamePlay(playerChoice){
    let Score = JSON.parse(localStorage.getItem('scores')) || {
        wins : 0,
        loses : 0,
        ties : 0
    };    
    let result = ''
    let computerChoice = getComputerChoice();

    if(computerChoice === playerChoice){
        result = 'Tie';
    }
    else if (computerChoice === 'rock'){
        if(playerChoice === 'paper'){
            result = 'Win';
        }
        else{
            result = 'Lose';
        }
    }
    else if (computerChoice === 'paper'){
        if(playerChoice === 'scissors'){
            result = 'Win';
        }
        else{
            result = 'Lose';
        }
    }
    else {
        if(playerChoice === 'rock'){
            result = 'Win';
        }
        else{
            result = 'Lose';
        }
    }
    if(result === 'Win'){
        Score.wins++;
    }
    else if(result === 'Lose'){
        Score.loses++;
    }
    else{
        Score.ties++;
    }

    
    if (result === 'Win') {
        document.querySelector('#result').innerHTML = 'You Win.';
    }
    else if(result === 'Lose'){
        document.querySelector('#result').innerHTML = 'You Lose.';
    }
    else {
        document.querySelector('#result').innerHTML = "It's a Tie.";
    }

    document.querySelector('#choice-print').innerHTML = `You choose ${playerChoice} and computer choose ${computerChoice}`;
    document.querySelector('#scores').innerHTML = `WINS : ${Score.wins}, LOSES : ${Score.loses}, TIES : ${Score.ties}`;
    localStorage.setItem('scores', JSON.stringify(Score));
}

function resetScores() {
    localStorage.removeItem('scores');
    document.querySelector('#scores').innerHTML = `WINS : 0, LOSES : 0, TIES : 0`;
}