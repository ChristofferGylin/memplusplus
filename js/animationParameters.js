const animationParameters = {
    on: true,
    minTime: 6,
    maxTime: 26,
    minHeight: window.innerHeight / 20,
    maxHeight: window.innerHeight,
    nextDirection: 0,

}
export default animationParameters;

window.addEventListener('resize', () => {

    animationParameters.maxHeight = window.innerHeight;
    animationParameters.minHeight = window.innerHeight / 20;

})