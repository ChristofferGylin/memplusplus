import { createPicSelection } from "./createPicSelection.js";
import { drawBoard } from "./drawBoard.js";
import { game } from "./game.js";
import { preloader } from './preloader.js';

export const loadLevel = (level) => {

    game.pics = createPicSelection(level);
    game.background = level.backgroundImg;
    preloader(game);
    document.querySelector('body').style.backgroundImage = `url("${level.backgroundImg}")`;
    const gameBoard = document.getElementById('gameBoard');
    gameBoard.className = level.class;
    game.pairGoal = level.numberOfPairs;
    game.numberOfPairs = 0;
    drawBoard(game)


}