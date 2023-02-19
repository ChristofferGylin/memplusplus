import { chooseStressLevel } from './chooseStressLevel.js';
import { game } from './game.js';
import { startGame } from './startGame.js';
import { stressLevelButton } from './stressLevelButton.js';

document.getElementById('startButton').addEventListener('click', () => {
    startGame(game);
});

document.getElementById('stressButton').addEventListener('click', stressLevelButton);

const stressButtons = document.querySelectorAll('.stress-level-button');

stressButtons.forEach(button => {
    button.addEventListener('click', chooseStressLevel);
});




