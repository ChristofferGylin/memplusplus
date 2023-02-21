const createSprite = (parameters, directionArg) => {

    const endHeight = Math.floor(Math.random() * (parameters.maxHeight - parameters.minHeight)) + parameters.minHeight;
    const time = Math.floor(Math.random() * (parameters.maxTime - parameters.minTime)) + parameters.minTime;
    const maxStartX = window.innerWidth * 0.7;
    const maxStartY = window.innerHeight * 0.7;
    const minStartX = window.innerWidth * 0.3;
    const minStartY = window.innerHeight * 0.3;
    const startPositionX = Math.floor(Math.random() * (maxStartX - minStartX)) + minStartX;
    const startPositionY = Math.floor(Math.random() * (maxStartY - minStartY)) + minStartY;

    const element = document.createElement('div');
    element.classList.add('animationSpriteContainer');

    element.innerHTML = `<img src="./img/ani-sprite.svg" class="animationSprite">`;
    element.style.left = `${startPositionX}px`;
    element.style.top = `${startPositionY}px`;
    element.style.filter = 'blur(20px)';
    element.style.opacity = '0';
    element.style.transform = 'translate(-50%, -50%)';
    element.style.transition = `filter ${time}s linear, top ${time}s linear, left ${time}s linear, width ${time}s linear, height ${time}s linear, opacity ${time}s linear`;

    const animationNumber = Math.floor(Math.random() * 9);
    element.classList.add(`spin${animationNumber}`);

    const normalOrReverse = Math.floor(Math.random() * 2);

    if (normalOrReverse === 0) {

        element.style.animationDirection = 'reverse';

    }

    let direction;


    if (directionArg) {

        direction = directionArg;

    } else {

        direction = Math.floor(Math.random() * 4);

    }

    let endPositionX;
    let endPositionY;

    switch (direction) {

        case 0:
            endPositionY = 0 - endHeight;
            endPositionX = Math.floor(Math.random() * window.innerWidth);
            break;
        case 1:
            endPositionY = Math.floor(Math.random() * window.innerHeight);
            endPositionX = window.innerWidth + endHeight;
            break;
        case 2:
            endPositionY = window.innerHeight + endHeight;
            endPositionX = Math.floor(Math.random() * window.innerWidth);
            break;
        case 3:
            endPositionY = Math.floor(Math.random() * window.innerHeight);
            endPositionX = 0 - endHeight;
            break;

    }

    document.getElementById('animationContainer').appendChild(element);

    element.addEventListener('transitionend', () => {
        element.remove();
    })

    setTimeout(() => {
        element.style.left = `${endPositionX}px`;
        element.style.top = `${endPositionY}px`;
        element.style.height = `${endHeight}px`;
        element.style.filter = `blur(0)`;
        element.style.opacity = `1`;
    }, 500);

}

export default createSprite;