function computerPlay() {
    let computerChoice;
    let selectionImg = document.querySelector('.computer-selection');
    
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
    let newSrc = `./img/hand-${computerChoice}.svg`
    selectionImg.setAttribute('src', newSrc)
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

function playRound (userChoice) {
    let computerChoice = computerPlay();

    switch (true) {
        case (userChoice === computerChoice):
            console.log('no one');
            return ('no one');

        case (userChoice === 'rock' && computerChoice === 'scissors'):
        case (userChoice === 'scissors' && computerChoice === 'paper'):
        case (userChoice === 'paper' && computerChoice === 'rock'):
            console.log('user');
            return ('player');

        case (computerChoice === 'rock' && userChoice === 'scissors'): 
        case (computerChoice === 'scissors' && userChoice === 'paper'):
        case (computerChoice === 'paper' && userChoice === 'rock'):
            console.log('computer');
            return ('computer');
    }
}

function playGame () {
    let userScore = 0;
    let computerScore = 0;
    let i = 0;
    while (userScore < 5 && computerScore < 5) {
        console.log(roundWinner + ' is the ' + (i + 1) + ' round winner');
        if (roundWinner === 'player') userScore++;
        if (roundWinner === 'computer') computerScore++;
        i++;
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


let btnsSelection = document.querySelectorAll('.btn');
let selectionImg = document.querySelector('.user-selection');

btnsSelection.forEach( btn => {
    btn.addEventListener('click', evt => {
        let btnValue = evt.target.value;
        let newSrc = `./img/hand-${btnValue}.svg`
        selectionImg.setAttribute('src', newSrc)
        playRound(btnValue);    
    });
});