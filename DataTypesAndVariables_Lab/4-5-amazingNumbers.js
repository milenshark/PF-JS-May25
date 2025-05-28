function amazingNumbers(number) {

    let numberAsString = number.toString();
    //console.log(typeof(numberAsString));
    let sum = 0;

    for(let i = 0; i < numberAsString.length; i++) {
        let currentSymbol = numberAsString[i];
        sum += Number(currentSymbol);
    }

    let sumAsString = sum.toString();

    let isAmazing = false;

    for(let i = 0; i < sumAsString.length; i++) {
        let currentDigit = sumAsString[i];

        if(currentDigit === '9') {
            isAmazing = true;
        }
    }

    if(isAmazing) {
        console.log(`${number} Amazing? True`)
    } else {
        console.log(`${number} Amazing? False`)
    }

    // let result = sum.toString().includes('9');

    // console.log(result ? 
    //     `${number} Amaizing? True` :
    //     `${number} Amaizing? False`);

}

amazingNumbers(1233);