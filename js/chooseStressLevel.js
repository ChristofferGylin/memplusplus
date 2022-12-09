import { game } from "./game.js";

export const chooseStressLevel = (e) => {

    const stressButtons = document.querySelectorAll('.stress-level-button');

    stressButtons.forEach(button => {
        button.classList.remove('stress-level-chosen');
    });

    e.currentTarget.classList.add('stress-level-chosen');
    game.stressLevel = parseInt(e.currentTarget.dataset.stressLevel);

}