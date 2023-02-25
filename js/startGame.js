import animationParameters from "./animationParameters.js";
import { levels } from "./levels.js";
import { loadLevel } from "./loadLevel.js";
import { drawTimer } from './timer/drawTimer.js';
import { startTimer } from './timer/startTimer.js';
import { updateTimer } from './timer/updateTimer.js';

export const startGame = (game) => {

    const continueStart = () => {

        drawTimer();

        document.getElementById('blackoutcover').style.opacity = '0';
        setTimeout(() => {
            document.getElementById('blackoutcover').style.display = 'none';
        }, 2000);


        startTimer();
        window.requestAnimationFrame(updateTimer);

    }

    const checkIfLoaded = () => {

        if (game.gameOn) {
            continueStart();
        } else {
            setTimeout(() => {
                checkIfLoaded();
            }, 100)
        }

    }

    document.getElementById('blackoutcover').style.display = 'block';

    setTimeout(() => {
        document.getElementById('blackoutcover').style.opacity = '1';
        setTimeout(() => {

            const animationContainer = document.getElementById('animationContainer')
            animationContainer.innerHTML = '';
            animationContainer.style.display = 'none';
            animationParameters.on = false;
            document.getElementById('container').style.gridTemplateColumns = "4fr 1fr";
            document.getElementById('sidebar').style.display = 'grid';
            document.getElementById('gameBoard').innerHTML = '';
            document.getElementById('gameMenu').style.display = 'none';
            loadLevel(levels[game.level]);
            checkIfLoaded();

        }, 2000);
    }, 1);






}