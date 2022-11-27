export const createPicSelection = (level) => {

    const pics = [...level.cardImgs];
    const picSelection = [];

    for (let i = 0; i < level.numberOfPairs; i++) {
        const picNumber = Math.floor(Math.random() * pics.length);
        picSelection.push(pics[picNumber]);
        pics.splice(picNumber, 1);

    }

    return picSelection;

}