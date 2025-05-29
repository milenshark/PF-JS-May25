function asciiValuesAsReversedCharacters(firstParam, secondParam, thirdParam) {

    let concatenatedCharsReversed = thirdParam + secondParam + firstParam;
    
    //let asciiValues = String.fromCharCode(concatenatedCharsReversed);

    console.log(concatenatedCharsReversed);

    let test = '';

        for (let i = 0; i < concatenatedCharsReversed.length; i++) {
            let asciiValue = concatenatedCharsReversed.charCodeAt(i);
            //let concatenadAsciiCodes += asciiValue;
            let asciiAsString = String(asciiValue);
            //let sum += asciiAsString;
            //console.log(`ASCII of ${concatenatedCharsReversed[i]}: ${asciiValue}`);
        
            //console.log(asciiAsString);
            test += asciiValue + ' ';
            //console.log(String.fromCharCode(asciiValue));
        }
        //console.log(concatenadAsciiCodes);
        //console.log(asciiValues);
        console.log(test);
}

asciiValuesAsReversedCharacters('a', 'b', 'c');