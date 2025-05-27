function triangleOfNumbers(number) {

    let result = '';

    for(let i = 0; i <= number; i++) {
        result = '';
        for(let j = 0; j < i; j++) {
            result += i + ' '; 
        }

        console.log(result);

    }
}


triangleOfNumbers(3);