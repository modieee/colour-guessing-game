let colorDisplay = document.getElementById('colorDisplay');
let play = document.getElementById('playButton');
let restart = document.getElementById('restartButton');
let scoreDisplay = document.getElementById('scoreDisplay');
let guessOption = document.querySelectorAll('.guess-options')

// Get Random Color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    return `rgb(${r}, ${g}, ${b})`;
}


function getColor() {
    let randomColor = getRandomColor();
    
    colorDisplay.style.backgroundColor = randomColor;

    const randomIndex = Math.floor(Math.random() * guessOption.length);

    guessOption.forEach(element => {
        if(element === guessOption[randomIndex]) {
            element.style.backgroundColor = randomColor;
        } else element.style.backgroundColor = getRandomColor();
    });
}

function setScoreAndStatus() {
    scoreDisplay.textContent = 0;
    let status = document.querySelector('[data-testid="gameStatus"]');

    guessOption.forEach(element => {
        element.addEventListener('click', ()=> {
            if(element.style.backgroundColor === colorDisplay.style.backgroundColor) {
                scoreDisplay.textContent = Number(scoreDisplay.textContent) + 1;

                getColor();
                status.style.color = 'green';
                status.classList.add('correct')
                status.textContent = 'correct'
                
            } else {
                getColor();
                status.style.color = 'red';
                status.classList.add('wrong')
                status.textContent = 'wrong guess';
            }
        })
    });
    
}


function playGame() {
    getColor();
    setScoreAndStatus();
}

restart.addEventListener('click', () => playGame());

playGame();