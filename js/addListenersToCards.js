import { clickCard } from "./clickCard.js";
import { showCard } from "./showCard.js";


export const addListenerToCards = () => {
    const cards = document.querySelectorAll('.card');

    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener('click', (e) => {
            clickCard(e);
        });
    }
}