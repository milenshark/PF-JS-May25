function integerOrFloat(numberOne, numberTwo, numberThree) {

    let sum = numberOne + numberTwo + numberThree;

    if(sum % 1 === 0) {
        console.log(`${sum} - Integer`);  
    } else {
    console.log(`${sum} - Float`)
    }
}

integerOrFloat(9, 100, 1.1);