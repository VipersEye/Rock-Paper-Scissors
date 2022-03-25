let btnsSelection = document.querySelectorAll('.btn');
let selectionImg = document.querySelector('.user-selection');
let roundNumber = 0;
let userScore = 0;
let computerScore = 0;
let userScoreText = document.querySelector('.user-score');
let computerScoreText = document.querySelector('.computer-score');

btnsSelection.forEach( btn => {
    btn.addEventListener('click', evt => {
        let btnValue = evt.target.value;
        let newSrc = `./img/hand-${btnValue}.svg`
        selectionImg.setAttribute('src', newSrc)
        playRound(btnValue);    
    });
});



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

function playRound (userChoice) {
    let computerChoice = computerPlay();
    let roundWinner;

    switch (true) {
        case (userChoice === computerChoice):
            roundWinner = 'no one';
            break;

        case (userChoice === 'rock' && computerChoice === 'scissors'):
        case (userChoice === 'scissors' && computerChoice === 'paper'):
        case (userChoice === 'paper' && computerChoice === 'rock'):
            roundWinner = 'user';
            break;

        case (computerChoice === 'rock' && userChoice === 'scissors'): 
        case (computerChoice === 'scissors' && userChoice === 'paper'):
        case (computerChoice === 'paper' && userChoice === 'rock'):
            roundWinner = 'computer';
            break;
    }

    if (roundWinner === 'user') {
        userScore++;
        userScoreText.textContent = userScore;
    }
    if (roundWinner === 'computer') {
        computerScore++;
        computerScoreText.textContent = computerScore;
    }
    roundNumber++;
}

// while (userScore < 5 && computerScore < 5) {
        
        // }
        // if (userScore > computerScore) {
        //     console.log('User win the game!'  + ' ' + userScore + '-' + computerScore);
        // }
        // else if (userScore < computerScore) {
        //     console.log(' Computer win the game!'  + ' ' + userScore + '-' + computerScore) ;
        // }
    
        // else if (userScore === computerScore) {
        //     console.log('Your score are equal!' + ' ' + userScore + '-' + computerScore);
        // }

        // console.log(roundWinner + ' is the ' + (roundNumber + 1) + ' round winner');

        
// function userPlay () {
//     let userChoice = prompt("Choose rock, paper or scissors").toLowerCase();
//     if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
//         return userChoice;
//     }
//     else {
//         alert('Wrong! You must choose rock, paper or scissors');
//         return userPlay();
//     }
// }