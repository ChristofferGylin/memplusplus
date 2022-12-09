import { chooseStressLevel } from './chooseStressLevel.js';
import { game } from './game.js';
import { startGame } from './startGame.js';

document.getElementById('startButton').addEventListener('click', () => {
    startGame(game);
});

const stressButtons = document.querySelectorAll('.stress-level-button');

stressButtons.forEach(button => {
    button.addEventListener('click', chooseStressLevel);
});




