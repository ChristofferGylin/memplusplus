import createSprite from "./createSprite.js";

const animation = (parameters) => {

    if (parameters.on) {

        createSprite(parameters, parameters.nextDirection);
        parameters.nextDirection++;

        if (parameters.nextDirection > 3) {
            parameters.nextDirection = 0;
        }

        setTimeout(() => {
            animation(parameters);
        }, 600);

    }
}

export default animation;