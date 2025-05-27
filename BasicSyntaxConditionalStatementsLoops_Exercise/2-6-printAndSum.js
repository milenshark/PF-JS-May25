function printAndSum(numberOne, numberTwo) {

    let result = '';
    let total = 0; 

    for(let i = numberOne; i <= numberTwo; i++) {
        result += i + ' ';
        total += i;
    }

    console.log(result);

    console.log(`Sum: ${total}`);
}

printAndSum(5, 10);