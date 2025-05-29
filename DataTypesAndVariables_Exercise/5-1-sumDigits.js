function sumDigits(number) {

    let sum = 0;
    let numberAsString = String(number);

    for(let i = 0; i < numberAsString.length; i++) {
        currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
    }
    console.log(sum);
}

sumDigits(97561);