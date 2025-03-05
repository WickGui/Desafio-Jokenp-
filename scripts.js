const result = document.querySelector('.result')
const yourScore = document.querySelector('#human-score')
const cpuScore = document.querySelector('#cpu-score')
const totalMatches = document.querySelector('#total-matches')


let humanScoreNumber = 0
let cpuScoreNumber = 0
let matchesNumber = 0


const playHuman = (Humanplay) => {
    playGame(Humanplay, playCPU())
    matchesNumber++
    totalMatches.innerHTML = matchesNumber

}

const playCPU = () => {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}

const playGame = (human, cpu) => {
    console.log('human:', human, 'cpu', cpu)

    if (human === cpu) {
        result.innerHTML = 'Draw!'
    } else if (
        human === 'paper' && cpu === 'rock' ||
        human === 'rock' && cpu === 'scissors' ||
        human === 'scissors' && cpu === 'paper') {
        
        humanScoreNumber++
        result.innerHTML = 'You win!'
        yourScore.innerHTML = humanScoreNumber

    } else {
        cpuScoreNumber++
        result.innerHTML = 'You lose!'
        cpuScore.innerHTML = cpuScoreNumber
    }
}