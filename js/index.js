import { drawBoard } from './drawBoard.js';
import { timer } from './timer.js'
import { game } from './game.js';

document.querySelector('button').addEventListener('click', () => {
    game.gameOn = true;
    timer();
})

drawBoard();
