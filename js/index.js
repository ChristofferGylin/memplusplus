import { chooseStressLevel } from './chooseStressLevel.js';
import { game } from './game.js';
import { startGame } from './startGame.js';
import { stressLevelButton } from './stressLevelButton.js';
import animation from './animation.js';
import animationParameters from './animationParameters.js';
import createManySprites from './createManySprites.js';

createManySprites(15);
animation(animationParameters);

document.getElementById('startButton').addEventListener('click', () => {
    startGame(game);
});

document.getElementById('stressButton').addEventListener('click', stressLevelButton);

const stressButtons = document.querySelectorAll('.stress-level-button');

stressButtons.forEach(button => {
    button.addEventListener('click', chooseStressLevel);
});

setTimeout(() => {

    document.getElementById('blackoutcover').style.opacity = '0';

    setTimeout(() => {
        document.getElementById('blackoutcover').style.display = 'none';
    }, 2000);
}, 750);




