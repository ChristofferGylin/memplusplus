import { showCard } from "./showCard.js";
import { game } from "./game.js";

const score = document.getElementById('score');

export const clickCard = (e) => {

    if (!game.gameOn) {
        return
    }

    if (game.state === 'waiting') {

        game.state = 'inTurn';
        game.pickedCard = e.target.dataset.number;
        showCard(e);

    } else if (game.state === 'inTurn') {

        game.state = 'waitingInTurn'

        let isSameCard = false;

        game.pickedCardElements.forEach(element => {
            if (e.target === element) {
                return
            }
        });

        game.pickedCardElements.push(e.target);

        if (e.target.dataset.number === game.pickedCard) {
            game.score++;



            score.innerHTML = `Score: ${game.score}`;
            game.state = 'waiting';


        } else {
            setTimeout(() => {

                game.pickedCardElements.forEach(element => {
                    element.removeAttribute('style')
                });
                /* e.target.removeAttribute('style');
                game.lastCardElement.removeAttribute('style'); */
                game.state = 'waiting';
                game.pickedCardElements.length = 0;
            }, 1000);

        }

        showCard(e);

    }

}