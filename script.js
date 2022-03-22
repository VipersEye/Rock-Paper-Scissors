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