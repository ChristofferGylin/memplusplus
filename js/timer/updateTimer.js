import { game } from "../game.js";
import { millisToTime } from "./millisToTime.js";
import { timerRing } from "./timerRing.js";



export const updateTimer = () => {

    const timerDigits = document.getElementById('timerDigits');
    let millis = game.timeLimit - (Date.now() - game.startTime);
    if (millis < 0) millis = 0;
    const ringPercentage = millis / game.timeLimit;
    timerRing(-ringPercentage);
    millis = Math.round(millis);
    const textValue = millisToTime(millis);
    timerDigits.innerHTML = textValue;

    if (millis <= 0) game.gameOn = false;

    if (game.gameOn) {
        window.requestAnimationFrame(updateTimer);
    }

}