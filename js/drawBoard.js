import { addListenerToCards } from "./addListenersToCards.js";
import { pics } from "./pics.js";

export const drawBoard = () => {

    const gameBoard = document.getElementById('gameBoard');

    const addCards = () => {

        const cardSelection = [];

        for (let i = 0; i < pics.length; i++) {
            cardSelection.push(i, i);
        }

        for (let i = 0; i < pics.length * 2; i++) {

            const cardNumber = Math.floor(Math.random() * cardSelection.length);
            let newCard = document.createElement('div');
            newCard.dataset.number = cardSelection[cardNumber];
            cardSelection.splice(cardNumber, 1);
            newCard.classList.add('card');
            gameBoard.appendChild(newCard);

        }
    }

    addCards();
    addListenerToCards();

}

