export const preloader = (game) => {

    const preloadPics = document.getElementById('preloadPics');

    const confirmations = [];

    const newBackground = document.createElement('img');
    newBackground.src = game.background;

    game.pics.forEach(pic => {

        const newPic = document.createElement('img');
        newPic.src = pic;

        newPic.onload = () => {
            confirmations.push(true);
        };

        preloadPics.appendChild(newPic);

    });

    const arePicsLoaded = () => {
        if (confirmations.length === game.pics.length + 1) {
            console.log('All pics loaded');
        } else {

            setTimeout(() => {
                arePicsLoaded();
            }, 100);

        }
    }

    arePicsLoaded();

}