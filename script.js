let btnStart = document.querySelector('.btn');
let roundNumber = 0;
let userScore = 0;
let computerScore = 0;
btnStart.addEventListener('click', (e)=> {
    if (e.target.classList[1] == 'btn_img_play') {
        playGame();
    }
    else {
        restartGame();
    } 
});

function playGame() {
    let btnsSelection = document.querySelectorAll('.btn[value]');
    let selectionUserImg = document.querySelector('.user-selection');
    let selectionComputerImg = document.querySelector('.computer-selection');
    
    let userScoreText = document.querySelector('.user-score');
    let computerScoreText = document.querySelector('.computer-score');

    selectionUserImg.setAttribute('src', './img/hand-rock.svg');

    roundNumber = 0;
    userScore = 0;
    computerScore = 0;

    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    selectionComputerImg.setAttribute('src', './img/hand-rock.svg');

    btnStart.style.display = "none";

    btnsSelection.forEach( btn => {
        btn.disabled = false;
        btn.addEventListener('click', evt => {
            let btnValue = evt.target.value;
            let newSrc = `./img/hand-${btnValue}.svg`;
            selectionUserImg.setAttribute('src', newSrc);
            playRound(btnValue, userScoreText, computerScoreText);    
        });
    });
}

function restartGame() {
    let btnsSelection = document.querySelectorAll('.btn[value]');
    let selectionUserImg = document.querySelector('.user-selection');
    let selectionComputerImg = document.querySelector('.computer-selection');
    
    let userScoreText = document.querySelector('.user-score');
    let computerScoreText = document.querySelector('.computer-score');

    selectionUserImg.setAttribute('src', './img/hand-rock.svg');

    roundNumber = 0;
    userScore = 0;
    computerScore = 0;

    userScoreText.textContent = userScore;
    computerScoreText.textContent = computerScore;
    selectionComputerImg.setAttribute('src', './img/hand-rock.svg');

    btnStart.style.display = "none";

    btnsSelection.forEach(btn => {
        btn.disabled = false;
    });
}

function stopGame() {
    let btnsSelection = document.querySelectorAll('.btn[value]');
    btnsSelection.forEach((btn)=> {
        btn.disabled = true;
    })


    btnStart.classList.remove('btn_img_play');
    btnStart.classList.add('btn_img_restart');

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
    else if (roundWinner === 'computer') {
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

    let newSrc = `./img/hand-${computerChoice}.svg`;
    selectionImg.setAttribute('src', newSrc);
    return computerChoice;
}