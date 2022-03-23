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

function playRound (userChoice, computerChoice) {
    userChoice = userPlay();
    computerChoice = computerPlay();

    switch (true) {
        case (userChoice === computerChoice):
            alert(`Hm... ${userChoice} and ${computerChoice} are equal!`);
            return ('no one');

        case (userChoice === 'rock' && computerChoice === 'scissors'):
        case (userChoice === 'scissors' && computerChoice === 'paper'):
        case (userChoice === 'paper' && computerChoice === 'rock'):
            alert(`You WIN! ${userChoice} beat ${computerChoice}`);
            return ('player');

        case (computerChoice === 'rock' && userChoice === 'scissors'): 
        case (computerChoice === 'scissors' && userChoice === 'paper'):
        case (computerChoice === 'paper' && userChoice === 'rock'):
            alert(`You LOSE! ${computerChoice} beat ${userChoice}`);
            return ('computer');
    }
}

function playGame () {
    let userScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let roundWinner = playRound();
        console.log(roundWinner + ' is the ' + (i + 1) + ' round winner');
        if (roundWinner === 'player') userScore++;
        if (roundWinner === 'computer') computerScore++;
    }
    if (userScore > computerScore) {
        console.log('User win the game!'  + ' ' + userScore + '-' + computerScore);
    }
    else if (userScore < computerScore) {
        console.log(' Computer win the game!'  + ' ' + userScore + '-' + computerScore) ;
    }

    else if (userScore === computerScore) {
        console.log('Your score are equal!' + ' ' + userScore + '-' + computerScore);
    }
}