import { clearCards } from "./clearCards.js";
import { game } from "./game.js";
import { showCard } from "./showCard.js";

export const clickCard = (e) => {

    if (!game.gameOn) {
        return;
    }

    if (game.pickedCardElements.length === 0) {

        game.pickedCardElements.push(e.target);
        showCard(e);
        return;

    } else if (game.pickedCardElements.length === 1) {

        if (e.target === game.pickedCardElements[0]) {

            return;

        } else {

            game.pickedCardElements.push(e.target);
            showCard(e);

            if (e.target.dataset.number === game.pickedCardElements[0].dataset.number) {
                game.score++;
                score.innerHTML = `Score: ${game.score}`;
                if (game.score >= game.scoreGoal) {
                    game.gameOn = false;
                    console.log('You win!', game);
                }

                game.pickedCardElements.length = 0;


            } else {
                game.timeOutId = setTimeout(clearCards, 1000);

            }

        }

    } else {
        clearCards();
        game.pickedCardElements.push(e.target);
        showCard(e);

    }
}