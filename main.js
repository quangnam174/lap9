const score1 = document.querySelector('#score-1');
const score2 = document.querySelector('#score-2');
const current1 = document.querySelector('#current-0');
const current2 = document.querySelector('#current-1');

const img = document.querySelector('#img');
const again = document.querySelector('#again');
const rolldice = document.querySelector('#roll-dice');
const hold = document.querySelector('#hold');

current1.textContent = 0;
current2.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

rolldice.addEventListener('click', function () {
    const dice = Math.trunc(Math.random() * 6) + 1;
    // img.src = `./img/${dice}.png`;
    if (dice !== 1) {
        currentScore += dice;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
    } else {
        currentScore = 0;
        document.getElementById(`current-${activePlayer}`).textContent = currentScore;
        activePlayer = activePlayer === 0 ? 1 : 0;
    }
});
