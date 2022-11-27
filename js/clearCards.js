import { game } from "./game.js";

export const clearCards = () => {
    clearTimeout(game.timeOutId);

    game.pickedCardElements.forEach(element => {
        element.removeAttribute('style');
        element.className = 'card';
    });

    game.pickedCardElements.length = 0;
}