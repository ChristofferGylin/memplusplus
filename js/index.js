import { drawBoard } from './drawBoard.js';
import { game } from './game.js';
import { drawTimer } from './timer/drawTimer.js';
import { startTimer } from './timer/startTimer.js';
import { updateTimer } from './timer/updateTimer.js';
import { levels } from './levels.js'
import { loadLevel } from './loadLevel.js';

// document.querySelector('button').addEventListener('click', () => {
//     game.gameOn = true;
//     startTimer();
//     window.requestAnimationFrame(updateTimer)
//     timer();
//     document.querySelector('body').style.backgroundImage = 'url("./img/backgrounds/race-track.svg")'
// })

loadLevel(levels[0]);
drawTimer();

game.gameOn = true;
startTimer();
window.requestAnimationFrame(updateTimer)


