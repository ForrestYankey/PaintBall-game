//set computer and player score to 0
let playerScore = 0;
let computerScore = 0;

//cumputer fucntion where the computer randomly picks left, right, or middle
//choices "Left, Right, Middle"
function computerPlay() {
    const arrOfChoices = ['left', 'right', 'middle'];
    const randomNum = Math.floor(Math.random() * 3);
    const computerChoice = arrOfChoices[randomNum];
    return computerChoice
}

//firstround functoin where player choses to shoot left, right, or middle
function firstRound (playerSelection, computerSelection) {
//if player choice is the same as computer choice, players gets 1 point
    if (playerSelection === 'left' && computerSelection === 'left') {
        playerScore++;
        return "You shot the computer!";
    } else if (playerSelection === 'right' && computerSelection === 'right') {
        playerScore++;
        return "You shot the computer!";
    } else if (playerSelection === 'middle' && computerSelection === 'middle') {
        playerScore++;
        return "You shot the computer!";
    } else {
        return "You missed the computer."
    }
}

const playerSelection = 'right';
const computerSelection = computerPlay();

console.log(firstRound(playerSelection, computerSelection));

//second round function where the player choses to dogde left, right, or middle
//if player choice is the same as computer choice, computer gets one point
function secondRound (playerSelection, computerSelection) {
    //if player choice is the same as computer choice, players gets 1 point
        if (playerSelection === 'left' && computerSelection === 'left') {
            computerScore++;
            return "You were shot by the computer!";
        } else if (playerSelection === 'right' && computerSelection === 'right') {
            computerScore++;
            return "You were shot by the computer!";
        } else if (playerSelection === 'middle' && computerSelection === 'middle') {
            computerScore++;
            return "You were shot by the computer!";
        } else {
            return "You dodged the computers shot."
        }
    }
//game function where first and second rounds repeat until player or computer has score of 3
//first to 3 wins