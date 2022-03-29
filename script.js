let btnStart = document.querySelector('.btn');
let userScore = 0;
let computerScore = 0;
btnStart.addEventListener('click', (e)=> {
    if (e.target.classList[1] == 'btn_img_play') {
        startGame();
    }
    else {
        restartGame();
    } 
});

function startGame() {
    
    let btnsSelection = document.querySelectorAll('.btn[value]');

    btnStart.style.display = "none";

    btnsSelection.forEach( btn => {
        btn.disabled = false;
        btn.addEventListener('click', evt => {
            let userChoice = evt.target.value;
            setSrcImg('user', userChoice);
            playRound(userChoice);    
        });
    });
}

function restartGame() {
    let btnsSelection = document.querySelectorAll('.btn[value]');
    
    userScore = 0;
    computerScore = 0;

    setTextScore('user', 0);
    setTextScore('computer', 0);
    setSrcImg('user', 'rock');
    setSrcImg('computer', 'rock');

    btnStart.style.display = "none";

    btnsSelection.forEach(btn => {
        btn.disabled = false;
    });
}

function playRound (userChoice) {

    let roundWinner = defineWinner(userChoice);

    if (roundWinner === 'user') {
        userScore++;
        setTextScore('user', userScore);
    }
    else if (roundWinner === 'computer') {
        computerScore++;
        setTextScore('computer', computerScore);
    }

    if (userScore >= 5 || computerScore >= 5) {
        stopGame();
    }
}

function defineWinner (userChoice) {
    let computerChoice = computerPlay();

    switch (true) {
        case (userChoice === computerChoice):
            return ('no one');

        case (userChoice === 'rock' && computerChoice === 'scissors'):
        case (userChoice === 'scissors' && computerChoice === 'paper'):
        case (userChoice === 'paper' && computerChoice === 'rock'):
            return ('user');

        case (computerChoice === 'rock' && userChoice === 'scissors'): 
        case (computerChoice === 'scissors' && userChoice === 'paper'):
        case (computerChoice === 'paper' && userChoice === 'rock'):
            return ('computer');
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

    setSrcImg('computer', computerChoice);
    return computerChoice;
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

function setSrcImg(selectedImg ,choice) {
    let newSrc = `./img/hand-${choice}.svg`;
    let img = document.querySelector(`.${selectedImg}-selection`);

    img.setAttribute('src', newSrc);    
}

function setTextScore(selectedText, score) {
    let textScore = document.querySelector(`.${selectedText}-score`);
    textScore.textContent = score;
}