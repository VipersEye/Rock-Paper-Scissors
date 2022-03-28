let btnStart = document.querySelector('.btn');
let roundNumber = 0;
let userScore = 0;
let computerScore = 0;
btnStart.addEventListener('click', ()=> {
    playGame();
});

function playGame() {
    let btnsSelection = document.querySelectorAll('.btn[value]');
    let selectionImg = document.querySelector('.user-selection');
    
    let userScoreText = document.querySelector('.user-score');
    let computerScoreText = document.querySelector('.computer-score');

    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;

    btnStart.style.display = "none";

    btnsSelection.forEach( btn => {
        btn.disabled = false;
        btn.addEventListener('click', evt => {
            let btnValue = evt.target.value;
            let newSrc = `./img/hand-${btnValue}.svg`
            selectionImg.setAttribute('src', newSrc)
            playRound(btnValue, userScoreText, computerScoreText);    
        });
    });
}

function stopGame() {
    roundNumber = 0;
    userScore = 0;
    computerScore = 0;

    btnStart.classList.toggle('btn_img_play');
    btnStart.classList.toggle('btn_img_restart');

    btnStart.style.display = 'inline-block';
}

function playRound (userChoice, userScoreText, computerScoreText) {
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

    if (userScore === 5 || computerScore === 5) {
        stopGame();
    }
}

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