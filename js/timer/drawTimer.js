import { timerSvg } from "./timerSvg.js";

export const drawTimer = () => {

    const timerContainer = document.getElementById('timerContainer');
    timerContainer.innerHTML = timerSvg;

}