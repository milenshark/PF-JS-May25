function tripletsOfLatinLetters(n){

    let number = Number(n);

    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    //let letter = String.fromCharCode(97+n);

    for(let i = 0; i < n; i++){
        let result = '' + alphabet[i];

        for(let j = 0; j < n; j++){
            let secondResult = result + alphabet[j];

            for(let k = 0; k < n; k++) {
                let thirdResult = secondResult + alphabet[k];
                console.log(thirdResult);
            }
        }
    }
}

tripletsOfLatinLetters(3);