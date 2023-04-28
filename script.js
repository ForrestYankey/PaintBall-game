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

console.log(computerPlay());
//firstround functoin where player choses to shoot left, right, or middle
//if player choice is the same as computer choice, players gets 1 point

//second round function where the player choses to dogde left, right, or middle
//if player choice is the same as computer choice, computer gets one point

//game function where first and second rounds repeat until player or computer has score of 3
//first to 3 wins