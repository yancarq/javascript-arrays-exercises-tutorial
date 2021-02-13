function lyricsGenerator(arrayL) {
    let lyric = '';
    let maxOne = 0;
    arrayL.forEach(element => {
        if (element == 0) {
            lyric += 'Boom ';
            maxOne = 0;
        } else {
            lyric += 'Drop the base ';
            maxOne += 1;
        }

        if (maxOne == 3) {
            lyric += '!!!Break the base!!! ';
        }
    });
    return lyric;

}


// test Data
console.log(lyricsGenerator([0, 0, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 1, 1, 1, 0, 0, 0]))
console.log(lyricsGenerator([0, 0, 0]))
console.log(lyricsGenerator([1, 0, 1]))
console.log(lyricsGenerator([1, 1, 1]))