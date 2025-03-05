const result = document.querySelector('.result')
const yourScore = document.querySelector('#human-score')
const cpuScore = document.querySelector('#cpu-score')
const totalMatches = document.querySelector('#total-matches')


let humanScoreNumber = 0
let cpuScoreNumber = 0
let matchesNumber = 0

const GAME_OPTIONS = {
    ROCK: 'rock',
    PAPER: 'paper',
    SCISSORS: 'scissors'
}


const playHuman = (Humanplay) => {
    playGame(Humanplay, playCPU())
    matchesNumber++
    totalMatches.innerHTML = matchesNumber

}

const playCPU = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, cpu) => {
    console.log('human:', human, 'cpu', cpu)

    if (human === cpu) {
        result.innerHTML = 'Draw!'
    } else if (
        human === GAME_OPTIONS.PAPER && cpu === GAME_OPTIONS.ROCK ||
        human === GAME_OPTIONS.ROCK && cpu === GAME_OPTIONS.SCISSORS ||
        human === GAME_OPTIONS.SCISSORS && cpu === GAME_OPTIONS.PAPER) {
        
        humanScoreNumber++
        result.innerHTML = 'You win!'
        yourScore.innerHTML = humanScoreNumber

    } else {
        cpuScoreNumber++
        result.innerHTML = 'You lose!'
        cpuScore.innerHTML = cpuScoreNumber
    }
}