import { pics } from "./pics.js";

export const showCard = (e) => {
    const picNumber = e.target.dataset.number;
    e.target.style.backgroundImage = `url(${pics[picNumber].url})`;
}