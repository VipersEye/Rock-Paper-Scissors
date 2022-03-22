function computerPlay() {
    let computerChoice;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
        default:
            computerPlay();
            break;
    }
    return computerChoice;
}

function userPlay () {
    let userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    }
    else {
        alert('Wrong! You must choose rock, paper or scissors');
        return userPlay();
    }
}