import createSprite from "./createSprite.js";
import animationParameters from "./animationParameters.js";

const createManySprites = (quantity) => {

    for (let i = 0; i < quantity; i++) {

        createSprite(animationParameters, animationParameters.nextDirection);
        animationParameters.nextDirection++;

        if (animationParameters.nextDirection > 3) {
            animationParameters.nextDirection = 0;
        }

    }

}

export default createManySprites;