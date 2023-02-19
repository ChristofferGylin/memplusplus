import { game } from "./game.js"

export const stressLevelButton = () => {

    if (game.stressMenu) {

        game.stressMenu = false;

        document.getElementById('stressMenu').style.display = 'none';
        document.getElementById('buttons').style.borderRadius = '0 0.8rem 0 0';

    } else {

        game.stressMenu = true;

        document.getElementById('stressMenu').style.display = 'flex';
        document.getElementById('buttons').style.borderRadius = '0';

    }



}