import { game } from "./game.js";

export const timer = () => {
    const timerElement = document.getElementById('timer');

    let time = game.timeLimit;
    const setTime = () => {
        if (time > 0) {
            time--;
            timerElement.innerHTML = `Time Left: ${time} Sec`;
            if (game.gameOn) {
                setTimeout(setTime, 1000)
            }
        } else {
            timerElement.innerHTML = `STOP! Hammertime.`
            game.gameOn = false;
        }



    }
    if (game.gameOn) {
        setTimeout(setTime, 1000)
    }

}

