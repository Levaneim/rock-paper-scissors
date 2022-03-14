const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
   for (let i = 1; i <= 5; i++) {
       playRound(i);
   }
   document.querySelector('button').textContent = 'Play new game';
   logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection, computerSelection, winner, round);
}

function playerChoice() {
    let input = prompt('Rock, Paper, or Scissors?');
    while(input == null) {
        input = prompt('Rock, Paper, or Scissors?');
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false){
      input = prompt(
          'Rock, Paper, or Scissors? Check your spelling, capitalization does not matter'
        );
        while(input == null) {
            input = prompt('Rock, Paper, or Scissors?');
        }
        input = input.toLowerCase();
        check = validateInput(input);
    }
    return input;
}

function computerChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(input){
    if(choices.includes(input)){
        return true;
    } 
    return false;
}

function checkWinner(choiceP, choiceC) {
    if(choiceP === choiceC){
        return 'Tie';
    } else if(
        (choiceP === 'rock' && choiceC == 'scissors') || 
        (choiceP === 'scissors' && choiceC == 'paper') || 
        (choiceP === 'paper' && choiceC == 'rock') 
    ) {
        return 'Player wins';
    } else {
        return 'Computer wins';
    }
}

function logWins(){
    let playerWins = winners.filter((item) => item == 'Player wins').length;
    let computerWins = winners.filter((item) => item == 'Computer wins').length;
    let ties = winners.filter((item) => item == 'Tie').length;
    console.log('Results:');
    console.log('Player Wins:', playerWins);
    console.log('Computer Wins:', computerWins);
    console.log('Ties:', ties);
}

function logRound(playerChoice, computerChoice, winner, round) {
    console.log('Round:', round);
    console.log('Player Chose:', playerChoice);
    console.log('Computer Chose:', computerChoice);
    console.log(winner, 'Won the round');
    console.log('----------------------------');
}

