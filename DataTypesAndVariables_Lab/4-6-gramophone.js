function gramophone(bandName, albumName, songName) {

    let songDurationInSeconds = (albumName.length * bandName.length) * songName.length / 2;

    let plateRotate = songDurationInSeconds / 2.5;

    let result = Math.ceil(plateRotate);

    console.log(`The plate was rotated ${result} times.`);

}

gramophone('Black Sabbath', 'Paranoid', 'War Pigs');